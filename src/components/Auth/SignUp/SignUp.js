import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField/';
import Button from '@material-ui/core/Button';
import PageContainer from '../../layout/PageContainer';

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
    // console.log(this.state);
  };

  render() {
    const data = (name, label, type) => {
      return { name, label, type };
    };
    const items = [
      data('username', 'Username', 'text'),
      data('email', 'Email', 'email'),
      data('password', 'Password', 'password'),
    ];
    return (
      <PageContainer>
        <Typography component="h1" variant="h5" style={{ display: 'block' }}>
          Sign up
        </Typography>

        <form onSubmit={this.onSubmitHandler}>
          {items.map(item => (
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name={item.name}
              label={item.label}
              type={item.type}
              onChange={this.onChangeHandler}
            />
          ))}
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
