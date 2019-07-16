import React, { Component } from 'react';
import PageContainer from '../layout/PageContainer';
import myListsStyles from './myListsStyles';
import { withStyles } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

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
      <PageContainer>
        <div className={classes.root}>
          <Grid container justify="center" spacing={2}>
            <h1> My Lists</h1>
            <Grid item />
            {myLists.map(data => {
              return (
                <Grid key={data.title} xs={12} item>
                  <Paper
                    spacing={10}
                    href="/list"
                    style={{ border: '2px solid #f50057' }}
                  >
                    <a
                      href="/list"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <Typography
                        align="center"
                        variant="h6"
                        style={{ padding: 10 }}
                      >
                        {data.title}
                      </Typography>
                      <Divider />
                      <List>
                        <ListItem> Shared with: {data.sharedWith}</ListItem>
                        <ListItem> Created on: {data.created} </ListItem>
                        <ListItem> Last used: {data.lastUsed}</ListItem>
                      </List>
                    </a>
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
  }
}

export default withStyles(myListsStyles)(MyLists);
