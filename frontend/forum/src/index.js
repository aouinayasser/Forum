import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import store from './redux/store'
import {Provider} from 'react-redux'

ReactDOM.render(
<Provider store={store} >
  <App />
  </Provider>
,
  document.getElementById('root')
);

