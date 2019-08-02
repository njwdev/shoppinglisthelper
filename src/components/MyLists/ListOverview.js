import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

const ListOverview = props => {
  const { link, listname, sharedWith, description, authorId } = props;
  return (
    <Grid xs={12} item>
      <Paper spacing={10} style={{ border: '2px solid #f50057' }}>
        <Link
          to={'/list/' + link}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <Typography align="center" variant="h6" style={{ padding: 10 }}>
            {listname}
          </Typography>
          <Divider />
          <List>
            <ListItem> Shared with: {sharedWith}</ListItem>
            <ListItem> Description {description} </ListItem>
            <ListItem> Author: {authorId}</ListItem>
          </List>
        </Link>
      </Paper>
    </Grid>
  );
};

ListOverview.propTypes = {
  link: PropTypes.string.isRequired,
  listname: PropTypes.string.isRequired,
  sharedWith: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  authorId: PropTypes.string.isRequired,
};

export default ListOverview;
