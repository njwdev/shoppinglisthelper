import React from 'react';
import { connect } from 'react-redux';
import { LOGIN } from '../../../constants/routes';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = props => {
  const { uid } = props.auth;
  if (uid) {
    return <Route {...props} />;
  } else {
    return <Redirect to={LOGIN} />;
  }
};

const mapStateToProps = state => {
  return { auth: state.firebase.auth };
};
export default connect(mapStateToProps)(PrivateRoute);
