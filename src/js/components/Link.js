import * as Rocket from '../rocket/index.js';

export default ({ href, children }) => (
  Rocket.createElement(
    'a',
    {
      href
    },
    children
  )
);
