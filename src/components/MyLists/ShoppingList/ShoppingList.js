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

class ShoppingList extends Component {
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
              {shoppingList.items.map(list => {
                return (
                  <Grid key={list.item + list.createdOn} xs={12} item>
                    <Paper spacing={10} style={{ border: '2px solid #f50057' }}>
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
              <Fab href="/createlist" style={{ marginTop: 10 }}>
                <i className="material-icons">add</i>
              </Fab>
            </div>
          </div>
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

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'lists' }]),
)(withStyles(ShoppingListStyles)(ShoppingList));
