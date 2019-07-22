import React, { Component } from 'react';
import { connect } from 'react-redux';
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

class MyLists extends Component {
  render() {
    const { classes, shoppingList } = this.props;
    return (
      <PageContainer>
        <div className={classes.root}>
          <Grid container justify="center" spacing={2}>
            <Typography variant="h4" style={{ padding: 10 }}>
              My Lists
            </Typography>
            <Grid item />
            {shoppingList.map(data => {
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

const mapStateToProps = state => {
  return {
    shoppingList: state.shoppingList.lists,
  };
};

export default connect(mapStateToProps)(withStyles(myListsStyles)(MyLists));
