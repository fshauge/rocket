import { isNull } from './utils.js';

function appendChild(element, child) {
  if (!isNull(child)) {
    if (child instanceof HTMLElement) {
      element.appendChild(child);
    } else {
      element.innerText = child;
    }
  }
}

function appendChildren(element, children) {
  for (const child of children) {
    appendChild(element, child);
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

  if (!isNull(children)) {
    if (children instanceof Array) {
      appendChildren(element, children);
    } else {
      appendChild(element, children);
    }
  }

  return element;
}

export function createElement(type, props, children) {
  if (type instanceof Function) {
    return renderComponent(type, props, children);
  } else {
    return renderElement(type, props, children);
  }
}

/**
 * Bootstraps Rocket rendering.
 * Use this function to render a component or element
 * to the specified parent element or css selector.
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
  appendChild(parent, child);
}
