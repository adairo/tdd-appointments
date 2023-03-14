import React from "react";
import {
  describe,
  test,
  expect,
  beforeEach,
} from "@jest/globals";
import {
  initializeReactContainer,
  render,
  element,
  field,
  form,
  click,
  submit,
} from "./reactTestExtensions";

import { CustomerForm } from "../src/CustomerForm";

describe("CustomerForm component", () => {
  const blankCustomer = {
    firstName: "",
  };

  beforeEach(() => {
    initializeReactContainer();
  });

  test("renders a form", () => {
    render(<CustomerForm original={blankCustomer} />);
    expect(form()).not.toBeNull();
  });

  test("renders the first name field as a text box", () => {
    render(<CustomerForm original={blankCustomer} />);
    const firstNameField = field("firstName");
    expect(firstNameField).not.toBeNull();
    expect(firstNameField.tagName).toBe("INPUT");
    expect(firstNameField.type).toBe("text");
  });

  test("includes the existing value for the first name", () => {
    const customer = { firstName: "Ashley" };
    render(<CustomerForm original={customer} />);
    expect(field("firstName").value).toBe("Ashley");
  });

  test("renders a label for the first name field", () => {
    render(<CustomerForm original={blankCustomer} />);
    const label = element("label[for=firstName]");
    expect(label).not.toBeNull();
    expect(label).toContainText("First name");
  });

  test("assigns an id that matches the label id to the first name field", () => {
    render(<CustomerForm original={blankCustomer} />);
    expect(field("firstName").id).toBe("firstName");
  });

  test("renders a submit button", () => {
    render(<CustomerForm original={blankCustomer} />);
    const button = element("input[type=submit]");
    expect(button).not.toBeNull();
  });

  test("saves existing first name when submitted", () => {
    expect.hasAssertions();
    const customer = { firstName: "Ashley" };
    render(
      <CustomerForm
        original={customer}
        onSubmit={({ firstName }) =>
          expect(firstName).toBe("Ashley")
        }
      />
    );
    const button = element("[type=submit]");
    click(button);
  });

  test("prevents the default action when submitting the form", () => {
    render(
      <CustomerForm
        original={blankCustomer}
        onSubmit={() => {}}
      />
    );

    const event = submit(form());
    expect(event.defaultPrevented).toBe(true);
  });
});
