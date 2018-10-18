import * as Rocket from './rocket/index.js';
import App from './containers/App/index.js';

Rocket.ready(() => {
  Rocket.render(
    Rocket.createElement(App, null, null),
    document.getElementById('root')
  );
});
