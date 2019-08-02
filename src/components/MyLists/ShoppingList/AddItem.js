import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const AddItem = props => (
  <Grid xs={12} item>
    <Grid xs={12} item>
      <Paper spacing={10} style={{ border: '2px solid #f50057' }}>
        <form onSubmit={props.onSubmit}>
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
                onChange={props.onChange}
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
                onChange={props.onChange}
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
);

export default AddItem;
