import React from 'react';
import PageContainer from '../../layout/PageContainer';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField/';
import Button from '@material-ui/core/Button';

const data = (name, label, type, id, autoComplete) => ({
  name,
  label,
  type,
  id,
  autoComplete,
});

const loginFormElements = [
  data('email', 'Email', 'email', 'email', 'email'),
  data('password', 'Password', 'password', 'password', 'current-password'),
];

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
      {loginFormElements.map(data => {
        return (
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name={data.name}
            label={data.label}
            type={data.type}
            id={data.id}
            autoComplete={data.autoComplete}
          />
        );
      })}
    </form>
    <Button style={{ textTransform: 'capitalize' }} fullWidth>
      Login
    </Button>
  </PageContainer>
);

export default Login;
