import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import UserAccountButton from '../../layout/Buttons/UserAccountButton';
// styles
import NavbarStyles from './styles';

const data = (text, link) => ({ text, link });
const nonAuthButtons = [
  data('My Lists', '/mylists'),
  data('Login', '/login'),
  data('About', '/about'),
];

const Navbar = props => {
  const { classes } = props;
  return (
    <div>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.toolbarTitle}>
            <a href="/" className={classes.siteTitle}>
              Shopping List Helper
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
          <UserAccountButton username="AB" />
          {/* update this to dynamic username */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

Navbar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(NavbarStyles)(Navbar);
