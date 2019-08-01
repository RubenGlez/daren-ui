import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const PublicRoute = props => {
  // User NOT logged
  if (!props.auth.uid) return <Route {...props} />;
  // User logged
  return <Redirect to={'/dashboard'} />;
};

const mapStateToProps = state => ({
  auth: state.firebase.auth,
});

export default connect(mapStateToProps)(PublicRoute);
