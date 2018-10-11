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
        render: ({ path, title }) => (
          Rocket.createElement(
            Link,
            {
              href: path
            },
            title
          )
        ),
        active: {
          index: activeIndex,
          props: {
            className: 'active'
          }
        }
      },
      null
    )
  )
);
