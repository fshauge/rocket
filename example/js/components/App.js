import * as Rocket from '../rocket/index.js';
import Greeting from './Greeting.js';

const names = ['A', 'B', 'C'];

export default () =>
  names.map(name => Rocket.createElement(Greeting, { name }));
