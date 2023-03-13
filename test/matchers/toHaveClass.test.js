import {
  describe,
  test,
  expect,
} from "@jest/globals";
import { toHaveClass } from "./toHaveClass";

const stripTerminalColor = (text) =>
  text.replace(/\x1B\[\d+m/g, "");

describe("toHaveClass matcher", () => {
  test("returns true when the class matches", () => {
    const element = {
      className: "class to match",
    };

    const result = toHaveClass(
      element,
      "class to match"
    );
    expect(result.pass).toBeTruthy();
  });

  test("returns false when the class doesn't match", () => {
    const element = {
      className: "",
    };

    const result = toHaveClass(
      element,
      "class to match"
    );
    expect(result.pass).toBeFalsy();
  });

  test("return a message that contains the source line if no match", () => {
    const domElement = { className: "" };
    const result = toHaveClass(
      domElement,
      "class to match"
    );

    expect(
      stripTerminalColor(result.message())
    ).toContain(
      'expect(element).toHaveClass("class to match")'
    );
  });

  test("returns a message that contains the source line if negated match", () => {
    const domElement = {
      className: "class to match",
    };
    const result = toHaveClass(
      domElement,
      "class to match"
    );

    expect(
      stripTerminalColor(result.message())
    ).toContain(
      'expect(element).not.toHaveClass("class to match")'
    );
  });
});
