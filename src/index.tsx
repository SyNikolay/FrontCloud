import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { store } from 'store/store';

import FrontCloudCamp from './FrontCloud';

import './assets/styles/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <FrontCloudCamp />
  </Provider>
);
