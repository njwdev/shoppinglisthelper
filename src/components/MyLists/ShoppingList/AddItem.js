import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import AddItemStyles from './AddItemStyles';
import { addItemToList } from '../../../store/actions/listActions';

class AddItem extends Component {
  state = {
    item: '',
    quantity: '',
  };
  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    this.props.addItemToList(this.state);
  };
  render() {
    console.log(this.state);
    const { classes, list } = this.props;

    return (
      <div className={classes.root}>
        <Grid xs={12} item>
          <Grid xs={12} item>
            <Paper spacing={10} style={{ border: '2px solid #f50057' }}>
              <form>
                <List dense>
                  <ListItem dense>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="item"
                      label="Item"
                      type="text"
                      onChange={this.onChangeHandler}
                    />
                  </ListItem>
                  <ListItem dense>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="quantity"
                      label="Quantity"
                      type="text"
                      onChange={this.onChangeHandler}
                    />
                  </ListItem>
                </List>
                <Button
                  type="submit"
                  style={{ textTransform: 'capitalize' }}
                  fullWidth
                >
                  {list}
                  Add item
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItemToList: item => dispatch(addItemToList(item)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(withStyles(AddItemStyles)(AddItem));
