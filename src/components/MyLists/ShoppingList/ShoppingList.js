import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageContainer from '../../layout/PageContainer';
import ShoppingListStyles from './ShoppingListStyles';
import { withStyles } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import { Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import AddItem from './AddItem';
import { addItemToList } from '../../../store/actions/listActions';
import Spinner from '../../layout/UI/Spinner';

class ShoppingList extends Component {
  state = {
    addButtonPressed: false,
    item: '',
    quantity: '',
    id: '',
    loading: false,
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    const listId = this.props.match.params.id;
    this.props.addItemToList(this.state, listId);
    this.setState({
      addButtonPressed: !this.state.addButtonPressed,
    });
    this.props.history.push(`/list/${listId}`);
  };

  onAddButtonPressed = () => {
    this.setState({ addButtonPressed: !this.state.addButtonPressed });
  };

  render() {
    const { classes, items } = this.props;

    if (items === null) {
      return <Redirect to="/mylists" />;
    } else
      return !items ? (
        <PageContainer>
          <Spinner />
        </PageContainer>
      ) : (
        <PageContainer>
          <div className={classes.root}>
            <Grid container justify="center" spacing={2}>
              <Grid xs={12} item>
                <Typography variant="h4">{items.listname}</Typography>
              </Grid>
              <Divider />
              <Grid xs={12} item>
                <Typography variant="subtitle1">{items.description}</Typography>
              </Grid>
              <Grid item />

              {items.items &&
                Object.entries(items.items).map((item, index) => {
                  console.log(item);
                  return (
                    <Grid xs={12} item key={item[1].createdOn}>
                      <Paper
                        spacing={10}
                        style={{ border: '2px solid #f50057' }}
                      >
                        <List>
                          <ListItem>
                            Item: {''}
                            {item[1].item}
                          </ListItem>
                          <ListItem>Quantity: {item[1].quantity}</ListItem>
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
            <AddItem
              onSubmit={this.onSubmitHandler}
              onChange={this.onChangeHandler}
            />
          ) : null}
        </PageContainer>
      );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const lists = state.firestore.data.lists;
  const items = lists ? lists[id] : null;
  console.log(ownProps);
  console.log(state);
  console.log(items);
  console.log(state.firestore.ordered.lists);

  // Only giving the items subcollection, not accessing main collection

  return {
    items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItemToList: (item, listId) => dispatch(addItemToList(item, listId)),
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  firestoreConnect(props => {
    return [
      {
        collection: 'lists',
        doc: props.match.params.id,
        subcollections: [{ collection: 'items' }],
      },
    ];
  }),
)(withStyles(ShoppingListStyles)(ShoppingList));
