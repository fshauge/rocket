import { isNullOrUndefined, matchType } from './utils.js';
import { reservedProps } from './props.js';

function renderComponent({ type: component, props, children }) {
  return render(component({ ...props, children }));
}

function renderElement({ type, props, children }) {
  const element = document.createElement(type);

  for (const prop in props) {
    if (!isNullOrUndefined(props[prop]) && !reservedProps.includes(prop)) {
      element[prop] = props[prop];
    }
  }

  for (const child of children.flat()) {
    render(child, element);
  }

  return element;
}

function renderFragment(children) {
  const fragment = document.createDocumentFragment();

  for (const child of children) {
    render(child, fragment);
  }

  return fragment;
}

/**
 * Renders a virtual DOM tree element to the document.
 *
 * @param {*} element
 * @param {*} parent
 */
export function render(element, parent) {
  const append = parent ? child => parent.appendChild(child) : child => child;

  if (isNullOrUndefined(element) || matchType(element, Boolean)) {
    return append(document.createTextNode(''));
  } else if (matchType(element, String, Number)) {
    return append(document.createTextNode(element));
  } else if (matchType(element, Object) && matchType(element.type, Function)) {
    return append(renderComponent(element));
  } else if (matchType(element, Object) && matchType(element.type, String)) {
    return append(renderElement(element));
  } else if (matchType(element, Array)) {
    return append(renderFragment(element));
  } else {
    throw new Error('Invalid virtual DOM.');
  }
}

/**
 * Creates an virtual DOM tree element.
 *
 * @param {any} type
 * @param {any} [props]
 * @param {...any} [children]
 */
export function createElement(type, props, ...children) {
  return { type, props, children };
}
