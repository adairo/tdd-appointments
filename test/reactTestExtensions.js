import { act } from "react-dom/test-utils";
import ReactDOM from "react-dom/client";

export let container;

export const initializeReactContainer = () => {
  container = document.createElement("div");
  document.body.replaceChildren(container);
};

export const render = (component) =>
  act(() =>
    ReactDOM.createRoot(container).render(component)
  );

export const click = (element) =>
  act(() => element.click());

export const element = (selector) =>
  document.querySelector(selector);

export const form = () => element("form");
export const field = (fieldName) =>
  form().elements[fieldName];

export const elements = (selector) =>
  Array.from(document.querySelectorAll(selector));

export const getFromElement = (key) => (elements) =>
  elements.map((element) => element[key]);

export const textOf = getFromElement("textContent");
export const typesOf = getFromElement("type");
