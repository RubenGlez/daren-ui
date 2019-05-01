import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './sections/Home';
import Sandbox from './sections/sandbox/Sandbox';
import Error from './sections/Error';

import './index.scss';


WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif'],
  },
});


const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route path={'/'} component={Home} exact={true} />
      <Route path={'/sandbox'} component={Sandbox} />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
);


ReactDOM.render(<Root />, document.getElementById('root'));
