import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField/';
import Button from '@material-ui/core/Button';
import PageContainer from '../../layout/PageContainer';
import { connect } from 'react-redux';
import { signUp } from '../../../store/actions/authActions';
import Divider from '@material-ui/core/Divider';
import LinkButton from '../../layout/Buttons/LinkButton';

class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { authError } = this.props;
    const data = (name, label, type) => {
      return { name, label, type };
    };
    const items = [
      data('firstName', 'First Name', 'text'),
      data('lastName', 'Last Name', 'text'),
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
              key={item.name}
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
          <Divider />
          {authError ? <p>{authError}</p> : null}
        </form>
        <Divider />
        <LinkButton link={'/login'}>
          Already have an account? Login here
        </LinkButton>
      </PageContainer>
    );
  }
}

const mapStateToProps = state => {
  return { authError: state.auth.authError };
};

const mapDispatchToProps = dispatch => {
  return { signUp: newUser => dispatch(signUp(newUser)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);
