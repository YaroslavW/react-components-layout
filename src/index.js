import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Components/Home/index';
import ButtonSandbox from './Components/Button/Sandbox';
import ButtonGroupSandbox from './Components/ButtonGroup/Sandbox';
import IconSandbox from './Components/Icon/Sandbox';
import ImageSandbox from './Components/Image/Sandbox';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/button' component={ButtonSandbox} />
        <Route path='/button-group' component={ButtonGroupSandbox} />
        <Route path='/icon' component={IconSandbox} />
        <Route path='/image' component={ImageSandbox} />
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);
