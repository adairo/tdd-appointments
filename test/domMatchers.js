import { expect } from "@jest/globals";

import { toContainText } from "./matchers/toContainText";

expect.extend({
  toContainText,
});
