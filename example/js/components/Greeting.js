import * as Rocket from '../rocket/index.js';

export default ({ name }) => (
  Rocket.createElement(
    'p',
    null,
    `Hello ${name}!`
  )
);
