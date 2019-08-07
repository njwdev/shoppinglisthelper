import React from 'react';
import Button from '@material-ui/core/Button';

const LinkToSignUp = () => (
  <Button
    style={{ textTransform: 'initial', marginTop: '10px' }}
    variant="text"
    fullWidth
    href="/signup"
    size="small"
  >
    Don't have an account? Sign up here
  </Button>
);

export default LinkToSignUp;
