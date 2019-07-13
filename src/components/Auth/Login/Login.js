import React from 'react';
import PageContainer from '../../layout/PageContainer';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField/';

const Login = () => (
  <PageContainer>
    <Typography
      component="h1"
      variant="h5"
      fullWidth
      style={{ display: 'block' }}
    >
      Login
    </Typography>

    <form>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="Email"
        label="Email"
        type="email"
        id="email"
        autoComplete="email"
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
    </form>
  </PageContainer>
);

export default Login;
