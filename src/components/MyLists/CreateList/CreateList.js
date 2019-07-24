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
    return (
      <PageContainer>
        <Typography component="h1" variant="h5" style={{ display: 'block' }}>
          Create List
        </Typography>

        <form onSubmit={this.onSubmitHandler}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="listname"
            label="List Name"
            type="text"
            onChange={this.onChangeHandler}
          />
          <TextField
            multiline
            variant="outlined"
            margin="normal"
            fullWidth
            name="description"
            label="Description"
            type="description"
            onChange={this.onChangeHandler}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="sharedWith"
            label="Shared with"
            type="text"
            onChange={this.onChangeHandler}
          />

          {/* function to create timestamp onsubmit needed here */}

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

const mapDispatchToProps = dispatch => {
  return {
    createList: list => dispatch(createList(list)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(CreateList);
