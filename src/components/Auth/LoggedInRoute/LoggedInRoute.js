import React from 'react';
import { connect } from 'react-redux';
import { MYLISTS } from '../../../constants/routes';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = props => {
  const { uid } = props.auth;
  if (uid) {
    return <Redirect to={MYLISTS} />;
  } else {
    return <Route {...props} />;
  }
};

const mapStateToProps = state => {
  return { auth: state.firebase.auth };
};
export default connect(mapStateToProps)(PrivateRoute);
