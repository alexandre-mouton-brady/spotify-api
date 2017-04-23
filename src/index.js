import Inferno, { render } from 'inferno';
import App from './App';

render(
  <App />,
  document.getElementById('container'),
);

// Hot module replacement stuff
if (module.hot) {
  module.hot.accept();
}
