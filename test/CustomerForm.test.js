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
  form,
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
    const field = form().elements["firstName"];
    expect(field).not.toBeNull();
    expect(field.tagName).toBe("INPUT");
    expect(field.type).toBe("text");
  });

  test("includes the existing value for the first name", () => {
    const customer = { firstName: "Ashley" };
    render(<CustomerForm original={customer} />);
    const field = form().elements["firstName"];
    expect(field.value).toBe("Ashley");
  });
});
