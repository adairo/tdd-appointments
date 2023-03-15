import { expect } from "@jest/globals";

import { toContainText } from "./matchers/toContainText";
import { toHaveClass } from "./matchers/toHaveClass";
import { toBeInputFieldOfType } from "./matchers/toBeInputFieldOfType";

expect.extend({
  toContainText,
  toHaveClass,
  toBeInputFieldOfType,
});
