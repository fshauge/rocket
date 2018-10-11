import * as Rocket from '../index.js';

export default ({ items, render, active }) => (
  Rocket.createElement(
    'ul',
    null,
    items.map((item, index) => {
      const props = active && active.index === index
        ? active.props :
        null;

      return Rocket.createElement(
        'li',
        props,
        render(item)
      );
    })
  )
);
