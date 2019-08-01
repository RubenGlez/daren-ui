import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

// Assets
import { ReactComponent as Icons } from './assets/icons.svg';
import './index.scss';
import PrivateRoute from './components/layout/PrivateRoute';
import PublicRoute from './components/layout/PublicRoute';

// Sections
import Dashboard from './sections/dashboard/Dashboard';
import Sandbox from './sections/sandbox/Sandbox';
import SignIn from './sections/auth/SignIn';
import SignUp from './sections/auth/SignUp';
import Projects from './sections/projects/Projects';
import ProfileContainer from './sections/user/ProfileContainer';

// Fonts
WebFont.load({ google: { families: ['Titillium Web:300,400,700', 'sans-serif'] } });


const Root = (
  <Provider store={store}>
    <BrowserRouter>
      <Icons />
      <Switch>
        <Redirect from={'/'} to={'/dashboard'} exact={true} />
        {/* Dashboard */}
        <PrivateRoute path={'/dashboard'} component={Dashboard} />
        {/* Authentication */}
        <PublicRoute path={'/signin'} component={SignIn} />
        <PublicRoute path={'/signup'} component={SignUp} />
        {/* Sandbox */}
        <Route path={'/sandbox'} component={Sandbox} />
        {/* Projects */}
        <PrivateRoute path={'/projects'} component={Projects} />
        {/* User */}
        <PrivateRoute path={'/profile'} component={ProfileContainer} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(Root, document.getElementById('root'));
});
