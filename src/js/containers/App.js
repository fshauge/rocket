import * as Rocket from '../rocket/index.js';
import Navigation from '../components/Navigation.js';
import Footer from '../components/Footer.js';

export default () => [
  Rocket.createElement(Navigation, { activeIndex: 0 }),
  Rocket.createElement(
    'div',
    {
      className: 'content'
    },
    Rocket.createElement(
      'div',
      {
        className: 'container'
      },
      Rocket.createElement(
        'h1',
        null,
        'Heading'
      ),
      Rocket.createElement(
        'p',
        null,
        'Paragraph'
      )
    )
  ),
  Rocket.createElement(Footer)
];
