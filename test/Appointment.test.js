import * as React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";

import { Appointment } from "../src/Appointment";

describe("Apointment", () => {
  it("renders the costumer first name", () => {
    const customer = { firstName: "Ashley" };
    const component = <Appointment customer={customer} />;
    const container = document.createElement("div");
    document.body.replaceChildren(container);
    act(() => {
      ReactDOM.createRoot(container).render(component);
    });

    expect(document.body.textContent).toContain("Ashley");
  });

  it("renders another costumer first name", () => {
    const customer = { firstName: "Jordan" };
    const component = <Appointment customer={customer} />;
    const container = document.createElement("div");
    document.body.replaceChildren(container);
    act(() => {
      ReactDOM.createRoot(container).render(component);
    });

    expect(document.body.textContent).toContain("Jordan");
  });
});
