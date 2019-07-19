import React, { Component } from 'react';
import PageContainer from '../../layout/PageContainer';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField/';
import Button from '@material-ui/core/Button';

class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <PageContainer>
        <Typography component="h1" variant="h5" style={{ display: 'block' }}>
          Sign up
        </Typography>

        <form onSubmit={this.onSubmitHandler}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="username"
            label="Username"
            type="text"
            onChange={this.onChangeHandler}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email"
            type="email"
            onChange={this.onChangeHandler}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            onChange={this.onChangeHandler}
          />

          <Button
            type="submit"
            style={{ textTransform: 'capitalize' }}
            fullWidth
          >
            Sign up
          </Button>
        </form>
      </PageContainer>
    );
  }
}

export default SignUp;
