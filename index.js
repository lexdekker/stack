import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './src/views/App';
import Home from './src/views/Home';
import Settings from './src/views/Settings';
import About from './src/views/About';
import Login from './src/views/Login';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/settings" component={Settings}/>
      <Route path="/about" component={About}/>
      <Route path="/login" component={Login}/>
    </Route>
  </Router>
), document.getElementById('app'));
