import * as Rocket from '../rocket/index.js';
import List from './List.js';

const links = [
  {
    path: 'https://github.com/fshauge/rocket',
    title: Rocket.createElement(
      'img',
      {
        src: 'assets/github.png',
        alt: 'Rocket on GitHub'
      }
    )
  }
];

export default () => Rocket.createElement(
  'footer',
  null,
  Rocket.createElement(
    List,
    {
      items: links,
      render: ({ path, title }) => (
        Rocket.createElement(
          'div',
          null,
          Rocket.createElement(
            'a',
            {
              href: path
            },
            title
          )
        )
      )
    }
  )
);
