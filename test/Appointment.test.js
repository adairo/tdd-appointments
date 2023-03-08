import * as React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";

import { Appointment } from "../src/Appointment";

const setContainer = (cont) => (component) =>
  act(() => ReactDOM.createRoot(cont).render(component));

describe("Apointment", () => {
  let container;
  let render;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
    render = setContainer(container);
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
});
