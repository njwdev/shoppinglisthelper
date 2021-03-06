import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import NavbarStyles from './styles';
import { connect } from 'react-redux';
import UserAccountMenu from '../../layout/UI/UserAccountMenu';
import { logout } from '../../../store/actions/authActions';
import SignedInLinks from '../Navbar/SignedInLinks/SignedInLinks';
import SignedOutLinks from '../Navbar/SignedOutLinks/SignedOutLinks';

const Navbar = props => {
  const { classes, auth, profile } = props;
  return (
    <div>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.toolbarTitle}>
            <a href="/" className={classes.siteTitle}>
              Shopping List Helper{' '}
            </a>
          </Typography>
          {auth ? (
            <Fragment>
              <SignedInLinks classes={classes.navButton} />
              <UserAccountMenu
                logout={props.logout}
                initials={profile.initials}
              />
            </Fragment>
          ) : (
            <SignedOutLinks classes={classes.navButton} />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return { auth: state.firebase.auth.uid, profile: state.firebase.profile };
};

const mapDispatchToProps = dispatch => {
  return { logout: () => dispatch(logout()) };
};

Navbar.propTypes = { classes: PropTypes.shape({}).isRequired };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(NavbarStyles)(Navbar));
