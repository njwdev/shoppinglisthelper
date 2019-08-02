import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PageContainer from '../layout/PageContainer';
// styles
import landingStyles from './styles';

const Landing = props => {
  const { classes } = props;
  return (
    <PageContainer>
      <Typography
        variant="h6"
        style={{
          // border: '1px solid black',
          padding: '5%',
          // boxShadow: '1px 10px #888 ',
          letterSpacing: '.25em',
        }}
      >
        Coordinate your shopping trips
      </Typography>

      <Button
        className={classes.signUpButton}
        fullWidth
        variant="outlined"
        style={{ textTransform: 'capitalize' }}
        href="/signup"
      >
        Sign up
      </Button>
    </PageContainer>
  );
};

Landing.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(landingStyles)(Landing);
