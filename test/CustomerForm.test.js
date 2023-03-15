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
  labelFor,
} from "./reactTestExtensions";

import { CustomerForm } from "../src/CustomerForm";

describe("CustomerForm", () => {
  const blankCustomer = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
  };

  beforeEach(() => {
    initializeReactContainer();
  });

  test("renders a form", () => {
    render(<CustomerForm original={blankCustomer} />);
    expect(form()).not.toBeNull();
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

  const itRendersAsATextBox = (fieldName) =>
    test("renders as a text box", () => {
      render(
        <CustomerForm original={blankCustomer} />
      );
      const fieldElement = field(fieldName);
      expect(fieldElement).not.toBeNull();
      expect(fieldElement.tagName).toBe("INPUT");
      expect(fieldElement).toBeInputFieldOfType(
        "text"
      );
    });

  const itIncludesTheExistingValue = (
    fieldName,
    existing
  ) =>
    test("includes the existing value", () => {
      const customer = { [fieldName]: existing };
      render(<CustomerForm original={customer} />);
      expect(field(fieldName).value).toBe(existing);
    });

  const itRendersALabel = (fieldName, labelText) =>
    test("renders a label", () => {
      render(
        <CustomerForm original={blankCustomer} />
      );
      expect(labelFor(fieldName)).not.toBeNull();
      expect(labelFor(fieldName)).toContainText(
        labelText
      );
    });

  const itAssignsAnIdThatMatchesTheLabelId = (
    fieldName
  ) =>
    test("assigns an id that matches the label id", () => {
      render(
        <CustomerForm original={blankCustomer} />
      );
      expect(field(fieldName).id).toBe(fieldName);
      expect(
        labelFor(fieldName).getAttribute("for")
      ).toBe(fieldName);
    });

  const itSavesTheExistingValueWhenSubmitted = (
    fieldName,
    existing
  ) =>
    test("saves existing value when submitted", () => {
      expect.hasAssertions();
      const customer = { [fieldName]: existing };
      render(
        <CustomerForm
          original={customer}
          onSubmit={(customer) =>
            expect(customer[fieldName]).toBe(existing)
          }
        />
      );
      const button = submitButton();
      click(button);
    });

  const itSavesNewValueWhenSubmitted = (
    fieldName,
    newValue
  ) =>
    test("saves new value when submitted", () => {
      expect.hasAssertions();
      render(
        <CustomerForm
          original={blankCustomer}
          onSubmit={(customer) =>
            expect(customer[fieldName]).toBe(newValue)
          }
        />
      );

      change(field(fieldName), newValue);
      click(submitButton());
    });

  describe("first name field", () => {
    itRendersAsATextBox("firstName");
    itIncludesTheExistingValue("firstName", "Ashley");
    itRendersALabel("firstName", "First name");
    itAssignsAnIdThatMatchesTheLabelId("firstName");
    itSavesTheExistingValueWhenSubmitted(
      "firstName",
      "Ashley"
    );
    itSavesNewValueWhenSubmitted(
      "firstName",
      "Jamie"
    );
  });

  describe("last name field", () => {
    itRendersAsATextBox("lastName");
    itIncludesTheExistingValue("lastName", "Broks");
    itRendersALabel("lastName", "Last name");
    itAssignsAnIdThatMatchesTheLabelId("lastName");
    itSavesTheExistingValueWhenSubmitted(
      "lastName",
      "Broks"
    );
    itSavesNewValueWhenSubmitted(
      "lastName",
      "Mountain"
    );
  });

  describe("phone number field", () => {
    itRendersAsATextBox("phoneNumber");
    itIncludesTheExistingValue("phoneNumber", "1234");
    itRendersALabel("phoneNumber", "Phone number");
    itAssignsAnIdThatMatchesTheLabelId("phoneNumber");
    itSavesTheExistingValueWhenSubmitted(
      "phoneNumber",
      "1234"
    );
    itSavesNewValueWhenSubmitted(
      "phoneNumber",
      "4321"
    );
  });
});
