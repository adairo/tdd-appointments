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
  submitButton,
  field,
  form,
  click,
  submit,
  change,
} from "./reactTestExtensions";

import { CustomerForm } from "../src/CustomerForm";

describe("CustomerForm", () => {
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

  describe("first name field", () => {
    test("renders as a text box", () => {
      render(
        <CustomerForm original={blankCustomer} />
      );
      const firstNameField = field("firstName");
      expect(firstNameField).not.toBeNull();
      expect(firstNameField.tagName).toBe("INPUT");
      expect(firstNameField.type).toBe("text");
    });

    test("includes the existing value", () => {
      const customer = { firstName: "Ashley" };
      render(<CustomerForm original={customer} />);
      expect(field("firstName").value).toBe("Ashley");
    });

    test("renders a label", () => {
      render(
        <CustomerForm original={blankCustomer} />
      );
      const label = element("label[for=firstName]");
      expect(label).not.toBeNull();
      expect(label).toContainText("First name");
    });

    test("assigns an id that matches the label id", () => {
      render(
        <CustomerForm original={blankCustomer} />
      );
      expect(field("firstName").id).toBe("firstName");
    });

    test("saves existing value when submitted", () => {
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
      const button = submitButton();
      click(button);
    });

    test("saves new value when submitted", () => {
      expect.hasAssertions();
      render(
        <CustomerForm
          original={blankCustomer}
          onSubmit={({ firstName }) =>
            expect(firstName).toBe("Jamie")
          }
        />
      );

      change(field("firstName"), "Jamie");
      click(submitButton());
    });
  });

  test("renders a submit button", () => {
    render(<CustomerForm original={blankCustomer} />);
    const button = submitButton();
    expect(button).not.toBeNull();
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
