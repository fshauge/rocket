import * as Rocket from '../index.js';

export default ({ href, children }) => (
  Rocket.createElement(
    'a',
    {
      href
    },
    children
  )
);
