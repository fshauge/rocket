import * as Rocket from '../index.js';
import List from './List.js';
import Link from './Link.js';

export default ({ routes, activeIndex }) => (
  Rocket.createElement(
    'nav',
    null,
    Rocket.createElement(
      List,
      {
        items: routes,
        render: ({ path, title }, index) => (
          Rocket.createElement(
            'div',
            index === activeIndex
              ? { className: 'active' }
              : null,
            Rocket.createElement(
              Link,
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
