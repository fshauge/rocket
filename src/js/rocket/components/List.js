import * as Rocket from '../index.js';

export default ({ items, render }) => (
  Rocket.createElement(
    'ul',
    null,
    items.map((item, index) => (
      Rocket.createElement(
        'li',
        null,
        render(item, index)
      )
    ))
  )
);
