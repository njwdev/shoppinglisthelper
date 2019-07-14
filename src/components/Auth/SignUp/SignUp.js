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

const signUpFormElements = [
  data('name', 'Name', 'text', 'name', 'name'),
  data('email', 'Email', 'email', 'email', 'email'),
  data('password', 'Password', 'password', 'password', 'current-password'),
];

const SignUp = () => (
  <PageContainer>
    <Typography
      component="h1"
      variant="h5"
      fullWidth
      style={{ display: 'block' }}
    >
      Sign up
    </Typography>

    <form>
      {signUpFormElements.map(data => {
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
      <Button style={{ textTransform: 'capitalize' }} fullWidth>
        Sign up
      </Button>
    </form>
  </PageContainer>
);

export default SignUp;
