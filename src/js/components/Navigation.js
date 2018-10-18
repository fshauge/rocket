import * as Rocket from '../rocket/index.js';
import List from './List.js';

const links = [
  {
    path: '#',
    title: '🚀 Rocket'
  },
  {
    path: '#',
    title: 'About'
  }
];

export default ({ activeIndex }) => (
  Rocket.createElement(
    'nav',
    null,
    Rocket.createElement(
      List,
      {
        className: 'container',
        items: links,
        render: ({ path, title }, index) => (
          Rocket.createElement(
            'div',
            index === activeIndex
              ? { className: 'active' }
              : null,
            Rocket.createElement(
              'a',
              {
                href: path
              },
              title
            )
          )
        )
      },
      null
    )
  )
);
