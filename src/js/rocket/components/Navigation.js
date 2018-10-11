import * as Rocket from '../index.js';
import List from './List.js';
import Link from './Link.js';

export default ({ routes, active }) => (
  Rocket.createElement(
    'nav',
    null,
    Rocket.createElement(
      List,
      {
        active,
        items: routes,
        render: ({ path, title }) => (
          Rocket.createElement(
            Link,
            {
              href: path
            },
            title
          )
        )
      },
      null
    )
  )
);
