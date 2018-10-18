import { isNullOrUndefined, matchType } from './utils.js';

function assignProps(element, props) {
  for (const prop in props) {
    if (prop !== 'children') {
      element[prop] = props[prop];
    }
  }
}

function renderComponent({ type: component, props, children }) {
  return render(component({ ...props, children }));
}

function renderChildren(element, children) {
  if (!isNullOrUndefined(children)) {
    if (matchType(children, Array)) {
      children.forEach(child => renderChildren(element, child));
    } else {
      render(children, element);
    }
  }
}

function renderElement({ type, props, children }) {
  const element = document.createElement(type);
  assignProps(element, props);
  renderChildren(element, children);
  return element;
}

function renderFragment(children) {
  const fragment = document.createDocumentFragment();
  children.forEach(child => render(child, fragment));
  return fragment;
}

/**
 * Renders a virtual DOM tree element to the document.
 *
 * @param {*} element
 * @param {*} parent
 */
export function render(element, parent) {
  const append = parent ?
    child => parent.appendChild(child) :
    child => child;

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
    console.error('Invalid virtual DOM.', element);
  }
}

/**
 * Creates an virtual DOM tree element.
 *
 * @param {any} type
 * @param {any} [props]
 * @param {any} [children]
 */
export function createElement(type, props, children) {
  return { type, props, children };
}
