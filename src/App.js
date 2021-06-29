/* eslint-disable no-unused-vars */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Routes from './Routes/index'
import store from './redux/store/store'

function App() {
  window.hehe = () => alert('hehe')
  return (
    <Router>
      <Provider store={store()}>
        <Routes />
      </Provider>
    </Router>
  );
}

export default App;
