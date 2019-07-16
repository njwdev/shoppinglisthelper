import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import PageContainer from '../layout/PageContainer';
import ListSubheader from '@material-ui/core/ListSubheader';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import myListsStyles from './myListsStyles';
import { withStyles } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';

const data = (listLink, title, sharedWith, created, lastUsed) => ({
  listLink,
  title,
  sharedWith,
  created,
  lastUsed,
});

const myLists = [
  data('/list', 'Groceries', 'gf', 'January 16th', 'Yesterday'),
  data(
    '/list',
    'Holiday Things',
    'andrew, clive, bob, phil',
    'December 12th',
    'Two weeks ago',
  ),
  data(
    '/list',
    'Christmas Presents',
    'brother and sister',
    'December 14th',
    '3 weeks ago',
  ),
];

class MyLists extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">My Lists</ListSubheader>
          </GridListTile>
          {myLists.map(data => {
            return (
              <GridListTile component="a" href={data.listLink}>
                <img
                  src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
                  alt="random plane"
                />
                <GridListTileBar
                  title={data.title}
                  subtitle={
                    <ul style={{ listStyleType: 'none', padding: '0' }}>
                      <li> Shared with: {data.sharedWith}</li>
                      <li> Created on: {data.created} </li>
                      <li> Last used: {data.lastUsed}</li>
                    </ul>
                  }
                  component={'a'}
                  href="/login"
                />
              </GridListTile>
            );
          })}
        </GridList>
        <div>
          <Fab>
            <i class="material-icons">add</i>
          </Fab>
        </div>
      </div>
    );
  }
}

export default withStyles(myListsStyles)(MyLists);
