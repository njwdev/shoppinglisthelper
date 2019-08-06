import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import UserAccountButton from '../../layout/Buttons/UserAccountButton';
import NavbarStyles from './styles';
import { connect } from 'react-redux';
import { logout } from '../../../store/actions/authActions';

const data = (text, link) => ({ text, link });
const nonAuthButtons = [
  data('My Lists', '/mylists'),
  data('Login', '/login'),
  data('About', '/about'),
];

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
          {nonAuthButtons.map(data => (
            <Button
              key={data.text}
              className={classes.navButton}
              href={data.link}
              variant="contained"
              styles={{ textTransform: 'lowercase' }}
            >
              {data.text}
            </Button>
          ))}
          <UserAccountButton username={profile.initials} />
          {auth.uid ? <Button onClick={props.logout}>Logout</Button> : null}
          {/* update this to dynamic username */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return { auth: state.firebase.auth, profile: state.firebase.profile };
};

const mapDispatchToProps = dispatch => {
  return { logout: () => dispatch(logout()) };
};

Navbar.propTypes = { classes: PropTypes.shape({}).isRequired };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(NavbarStyles)(Navbar));
