import { isNull } from './utils.js';

function appendChildren(element, children) {
  if (!isNull(children)) {
    if (children instanceof Array) {
      children.map(child => appendChildren(element, child));
    } else if (children instanceof HTMLElement) {
      element.appendChild(children);
    } else {
      element.innerText = children;
    }
  }
}

function removeChildren(element) {
  while (!isNull(element.lastChild)) {
    element.lastChild.remove();
  }
}

function renderComponent(component, props, children) {
  return component({ ...props, children });
}

function renderElement(tagName, attributes, children) {
  const element = document.createElement(tagName);
  Object.assign(element, attributes);
  appendChildren(element, children);
  return element;
}

/**
 * Creates an element from a component or a tag name.
 *
 * @param {any} type
 * @param {any} [props]
 * @param {any} [children]
 */
export function createElement(type, props, children) {
  if (type instanceof Function) {
    return renderComponent(type, props, children);
  } else {
    return renderElement(type, props, children);
  }
}

/**
 * Bootstraps Rocket rendering. Use this function to
 * render a component or element to the specified
 * parent element or CSS selector.
 *
 * @param {HTMLElement} parent
 * @param {any} component
 */
export function render(element, component) {
  const parent = element instanceof HTMLElement
    ? element
    : document.querySelector(element);

  const child = component instanceof HTMLElement
    ? component
    : createElement(component, null, null);

  removeChildren(parent);
  appendChildren(parent, child);
}
