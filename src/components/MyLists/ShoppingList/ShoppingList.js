import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageContainer from '../../layout/PageContainer';
import ShoppingListStyles from './ShoppingListStyles';
import { withStyles } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { addItemToList } from '../../../store/actions/listActions';

class ShoppingList extends Component {
  state = {
    addButtonPressed: false,
    item: '',
    quantity: '',
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    this.props.createList(this.state);
    this.props.history.push('/mylists');
  };

  onAddButtonPressed = () => {
    this.setState({ addButtonPressed: !this.state.addButtonPressed });
  };

  render() {
    const { classes, shoppingList } = this.props;

    if (shoppingList) {
      return (
        <PageContainer>
          <div className={classes.root}>
            <Grid container justify="center" spacing={2}>
              <Grid xs={12} item>
                <Typography variant="h4">{shoppingList.listname}</Typography>
              </Grid>
              <Divider />
              <Grid xs={12} item>
                <Typography variant="subtitle1">
                  {shoppingList.description}
                </Typography>
              </Grid>
              <Grid item />
              {shoppingList.items &&
                shoppingList.items.map(list => {
                  return (
                    <Grid key={list.item + list.createdOn} xs={12} item>
                      <Paper
                        spacing={10}
                        style={{ border: '2px solid #f50057' }}
                      >
                        <List>
                          <ListItem>
                            Item: {''}
                            {list.item.charAt(0).toUpperCase() +
                              list.item.slice(1)}
                          </ListItem>
                          <ListItem key={list.listname}>
                            {' '}
                            Quantity: {list.quantity}{' '}
                          </ListItem>
                        </List>
                      </Paper>
                    </Grid>
                  );
                })}
            </Grid>

            <div>
              <Fab onClick={this.onAddButtonPressed} style={{ margin: '10px' }}>
                <i className="material-icons">add</i>
              </Fab>
            </div>
          </div>
          {this.state.addButtonPressed ? (
            <div>
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
                        Add item
                      </Button>
                    </form>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          ) : // <AddItem list={shoppingList.listname} />
          null}
        </PageContainer>
      );
    } else {
      return (
        <PageContainer>
          <div>
            <p> Loading...</p>
          </div>
        </PageContainer>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const lists = state.firestore.data.lists;
  const list = lists ? lists[id] : null;
  return {
    shoppingList: list,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItemToList: item => dispatch(addItemToList(item)),
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  firestoreConnect([{ collection: 'lists' }]),
)(withStyles(ShoppingListStyles)(ShoppingList));
