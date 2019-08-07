import React from 'react';
import Button from '@material-ui/core/Button';

const LinkToLogin = () => (
  <Button
    style={{ textTransform: 'initial', marginTop: '10px' }}
    variant="text"
    fullWidth
    href="/signup"
    size="small"
  >
    Already have an account? Login here
  </Button>
);

export default LinkToLogin;
