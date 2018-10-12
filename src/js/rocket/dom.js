import { isNull } from './utils.js';

function appendChildren(parent, children) {
  if (!isNull(children)) {
    if (children instanceof Array) {
      children.map(child => appendChildren(parent, child));
    } else if (children instanceof HTMLElement) {
      parent.appendChild(children);
    } else {
      parent.innerText = children;
    }
  }
}

function removeChildren(parent) {
  while (!isNull(parent.lastChild)) {
    parent.lastChild.remove();
  }
}

function assignAttributes(element, attributes) {
  for (const attribute in attributes) {
    if (attribute !== 'children') {
      element[attribute] = attributes[attribute];
    }
  }
}

function renderComponent(component, props, children) {
  return component({ ...props, children });
}

function renderElement(tagName, attributes, children) {
  const element = document.createElement(tagName);
  assignAttributes(element, attributes);
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
