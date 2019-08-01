import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const PrivateRoute = props => {
  let finalRoute = null;
  if (props.auth.uid && props.loggedRoute) {
    finalRoute = <Redirect to={props.loggedRoute} />;
  } else {
    // If user is not logged
    if (!props.auth.uid) {
      finalRoute = <Redirect to={'/signin'} />;
    } else {
      finalRoute = <Route {...props} />;
    }
  }
  return finalRoute;
};

const mapStateToProps = state => ({
  auth: state.firebase.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
