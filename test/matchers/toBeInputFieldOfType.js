import {
  matcherHint,
  printReceived,
} from "jest-matcher-utils";

export const toBeInputFieldOfType = (
  element,
  type
) => {
  const pass = element.getAttribute("type") === type;

  const message = () => {
    return `${matcherHint(
      "toBeInputFieldOfType",
      element.type,
      type,
      { isNot: pass }
    )}\n\nReceived: ${printReceived(element.type)}`;
  };

  return {
    pass,
    message,
  };
};
