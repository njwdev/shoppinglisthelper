import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

const ListOverview = props => (
  <Grid xs={12} item>
    <Paper spacing={10} style={{ border: '2px solid #f50057' }}>
      <Link
        to={'/list/' + props.link}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <Typography align="center" variant="h6" style={{ padding: 10 }}>
          {props.listname}
        </Typography>
        <Divider />
        <List>
          <ListItem> Shared with: {props.sharedWith}</ListItem>
          <ListItem> Description {props.description} </ListItem>
          <ListItem> Author: {props.authorId}</ListItem>
        </List>
      </Link>
    </Paper>
  </Grid>
);

export default ListOverview;
