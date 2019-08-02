import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageContainer from '../layout/PageContainer';
import myListsStyles from './myListsStyles';
import { withStyles } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Spinner from '../layout/UI/Spinner';
import ListOverview from '../MyLists/ListOverview';

class MyLists extends Component {
  render() {
    const { classes, lists } = this.props;
    return !lists ? (
      <Spinner />
    ) : (
      <PageContainer>
        <div className={classes.root}>
          <Grid container justify="center" spacing={2}>
            <Typography variant="h4" style={{ padding: 10 }}>
              My Lists
            </Typography>
            <Grid item />
            {lists &&
              lists.map(list => {
                return (
                  <ListOverview
                    key={list.id}
                    link={list.id}
                    listname={list.listname}
                    sharedWith={list.sharedWith}
                    description={list.description}
                    authorId={list.authorId}
                  />
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
  console.log(state);
  return {
    lists: state.firestore.ordered.lists,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'lists' }]),
)(withStyles(myListsStyles)(MyLists));
