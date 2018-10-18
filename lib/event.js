/**
 * Fires the event listener only once for the specified dispatcher and event type.
 *
 * @param {any} dispatcher
 * @param {string} type
 * @param {any} listener
 */
export function once(dispatcher, type, listener) {
  dispatcher.addEventListener(type, function(event) {
    listener(event);
    dispatcher.removeEventListener(type, this);
  });
}

/**
 * Fires when the page is ready to be rendered to.
 *
 * @param {any} listener
 */
export function ready(listener) {
  once(window, 'load', listener);
}
