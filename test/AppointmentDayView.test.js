import * as React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";

import { Appointment, AppointmentsDayView } from "../src/AppointmentDayView";

const renderOnContainer = (container) => (component) =>
  act(() => ReactDOM.createRoot(container).render(component));

describe("Apointment", () => {
  let container;
  let render;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
    render = renderOnContainer(container);
  });

  it("renders the costumer first name", () => {
    const customer = { firstName: "Ashley" };
    render(<Appointment customer={customer} />);
    expect(document.body.textContent).toContain("Ashley");
  });

  it("renders another costumer first name", () => {
    const customer = { firstName: "Jordan" };
    render(<Appointment customer={customer} />);
    expect(document.body.textContent).toContain("Jordan");
  });

  it("renders an html table", () => {
    render(<Appointment customer={{ firstName: "Adairo" }} />);
    const table = document.querySelector("table");
    expect(table).not.toBeNull();
  });

  it("displays all the fields in the table", () => {
    const customer = {
      firstName: "Adairo",
      lastName: "Reyes",
      stylist: "Alex",
      service: "10",
      notes: "let it grow",
    };

    render(<Appointment customer={customer} />);
    Object.values(customer).forEach((dataClient) =>
      expect(document.body.textContent).toContain(dataClient)
    );
  });

  it("shows a heading with the appointment time", () => {
    render(
      <Appointment
        customer={{ firstName: "Adairo" }}
        startsAt={new Date().setHours(12, 0)}
      />
    );
    const heading = container.querySelector("h1");
    expect(heading).not.toBeNull();
    expect(heading.textContent).toContain("12:00");
  });
});

describe("AppointmentsDayView", () => {
  let container;
  let render;
  const today = new Date();
  const twoAppointments = [
    { startsAt: today.setHours(12, 0), customer: { firstName: "Ashley" } },
    { startsAt: today.setHours(13, 0), customer: { firstName: "Jordan" } },
  ];

  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
    render = renderOnContainer(container);
  });

  it("renders a div with the right id", () => {
    render(<AppointmentsDayView appointments={[]} />);

    expect(document.querySelector("div#appointmentsDayView")).not.toBeNull();
  });

  it("renders an ol element to display appointments", () => {
    render(<AppointmentsDayView appointments={[]} />);

    const listElement = document.querySelector("ol");
    expect(listElement).not.toBeNull();
  });

  it("renders an li for each appointment", () => {
    render(<AppointmentsDayView appointments={twoAppointments} />);

    const listChildren = document.querySelectorAll("ol > li");
    expect(listChildren).toHaveLength(2);
  });

  it("renders the time of each appointment", () => {
    render(<AppointmentsDayView appointments={twoAppointments} />);

    const listChildren = document.querySelectorAll("li");
    expect(listChildren[0].textContent).toEqual("12:00");

    expect(listChildren[1].textContent).toEqual("13:00");
  });

  it("initially shows a message saying there are no apppointments today", () => {
    render(<AppointmentsDayView appointments={[]} />);
    expect(document.body.textContent).toContain(
      "There are no appointments scheduled for today"
    );
  });

  it("selects the first appointment by default", () => {
    render(<AppointmentsDayView appointments={twoAppointments} />);

    expect(document.body.textContent).toContain("Ashley");
  });

  it("has a button element in each li", () => {
    render(<AppointmentsDayView appointments={twoAppointments} />);

    const buttons = document.querySelectorAll("li > button");
    expect(buttons).toHaveLength(2);
    expect(buttons[0].type).toEqual("button");
  });

  it("renders another appointment when selected", () => {
    render(<AppointmentsDayView appointments={twoAppointments} />);

    const button = document.querySelectorAll("button")[1];
    act(() => button.click());
    expect(document.body.textContent).toContain("Jordan");
  });
});
