import {
  matcherHint,
  printExpected,
  printReceived,
} from "jest-matcher-utils";

export function toHaveClass(
  receivedElement,
  expected
) {
  const pass =
    receivedElement.className.includes(expected);

  const sourceHint = () =>
    matcherHint(
      "toHaveClass",
      "element",
      printExpected(expected),
      {
        isNot: pass,
      }
    );

  const receivedHint = () =>
    `Received class: ${printReceived(
      receivedElement.className
    )}`;

  const message = () =>
    [sourceHint(), receivedHint()].join("\n\n");

  return {
    message,
    pass,
  };
}
