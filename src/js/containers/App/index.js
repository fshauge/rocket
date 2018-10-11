import Navigation from '../../rocket/components/Navigation.js';
import routes from './routes.js';

export default () => Navigation({
  routes,
  active: {
    index: 0,
    props: {
      className: 'active'
    }
  }
});
