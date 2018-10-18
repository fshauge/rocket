import * as Rocket from '../../rocket/index.js';
import Navigation from '../../components/Navigation.js';
import routes from './routes.js';

export default () => [
  Rocket.createElement(
    Navigation,
    {
      routes,
      activeIndex: 0
    },
    null
  ),
  Rocket.createElement(
    'div',
    null,
    Rocket.createElement(
      'div',
      null,
      [
        Rocket.createElement(
          'h1',
          null,
          'Rocket'
        ),
        Rocket.createElement(
          'p',
          null,
          'Build composable HTML pages with modern JavaScript and 🚀.'
        ),
        Rocket.createElement(
          'section',
          null,
          [
            Rocket.createElement(
              'h1',
              null,
              'Why?'
            ),
            Rocket.createElement(
              'p',
              null,
              'Inspired to create a library that allows for the same easy and flexible DOM rendering from JavaScript as React. The goal was to reason about how React handles DOM rendering, and create a rendering system from scratch that could be used in assignments that require pure HTML, CSS and JavaScript.'
            )
          ]
        )
      ]
    )
  )
];
