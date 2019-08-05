import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PageContainer from '../layout/PageContainer';
import Spinner from '../layout/UI/Spinner';
import ListOverview from '../MyLists/ListOverview';
import { Redirect } from 'react-router-dom';
// styles
import myListsStyles from './styles';

class MyLists extends Component {
  render() {
    const { classes, lists, auth } = this.props;
    return !lists ? (
      <Spinner />
    ) : auth.uid ? (
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
    ) : (
      <Redirect to="/login" />
    );
  }
}

MyLists.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  lists: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = state => {
  // console.log(state);
  return { lists: state.firestore.ordered.lists, auth: state.firebase.auth };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'lists' }]),
)(withStyles(myListsStyles)(MyLists));
