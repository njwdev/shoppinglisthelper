import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createList } from '../../../store/actions/listActions';
import PageContainer from '../../layout/PageContainer';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField/';
import Button from '@material-ui/core/Button';

class CreateList extends Component {
  state = {
    listname: '',
    description: '',
    sharedWith: '',
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    this.props.createList(this.state);
    this.props.history.push('/mylists');
  };

  render() {
    const data = (name, label, type, required, multiline) => {
      return { name, label, type, required, multiline };
    };
    const items = [
      data('listname', 'List Name', 'text', true, false),
      data('description', 'Description', 'description', false, true),
      data('sharedWith', 'Shared With', 'text', false, false),
    ];
    return (
      <PageContainer>
        <Typography component="h1" variant="h5" style={{ display: 'block' }}>
          Create List
        </Typography>

        <form onSubmit={this.onSubmitHandler}>
          {items.map(item => (
            <TextField
              key={item.name}
              variant="outlined"
              margin="normal"
              required={item.required}
              multiline={item.multiline}
              fullWidth
              name={item.name}
              label={item.label}
              type={item.text}
              onChange={this.onChangeHandler}
            />
          ))}

          <Button
            type="submit"
            style={{ textTransform: 'capitalize' }}
            fullWidth
          >
            Create List
          </Button>
        </form>
      </PageContainer>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.firebase.auth };
};

const mapDispatchToProps = dispatch => {
  return { createList: list => dispatch(createList(list)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateList);
