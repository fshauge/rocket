import * as Rocket from '../rocket/index.js';

export default ({ items, render, ...props }) => (
  Rocket.createElement(
    'ul',
    props,
    items.map((item, index) => (
      Rocket.createElement(
        'li',
        null,
        render(item, index)
      )
    ))
  )
);
