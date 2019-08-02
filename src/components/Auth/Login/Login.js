import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField/';
import Button from '@material-ui/core/Button';
import PageContainer from '../../layout/PageContainer';

class Login extends Component {
  state = {
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
      data('email', 'Email', 'email'),
      data('password', 'Password', 'password'),
    ];
    return (
      <PageContainer>
        <Typography component="h1" variant="h5" style={{ display: 'block' }}>
          Login
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
            Login
          </Button>
        </form>
      </PageContainer>
    );
  }
}

export default Login;
