import React from 'react';
import PageContainer from '../layout/PageContainer';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import landingStyles from './LandingStyles';
import Icon from '@material-ui/core/Icon';

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
        {/* <Icon style={{ marginRight: '20px' }}>shopping_basket</Icon> */}
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

export default withStyles(landingStyles)(Landing);
