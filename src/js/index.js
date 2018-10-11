import * as Rocket from './rocket/index.js';
import App from './containers/App.js';

Rocket.ready(() => {
  Rocket.render('#root', App);
});
