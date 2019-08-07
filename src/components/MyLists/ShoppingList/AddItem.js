import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const data = (name, label, type) => {
  return { name, label, type };
};
const items = [
  data('item', 'Item', 'text'),
  data('quantity', 'Quantity', 'text'),
];

const AddItem = props => {
  const { onChange, onSubmit } = props;
  return (
    <Grid xs={12} item>
      <Grid xs={12} item>
        <Paper spacing={10} style={{ border: '2px solid #f50057' }}>
          <form onSubmit={onSubmit}>
            <List dense>
              {items.map(item => (
                <ListItem key={item.name} dense>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name={item.name}
                    label={item.label}
                    type={item.type}
                    onChange={onChange}
                  />
                </ListItem>
              ))}
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
};

AddItem.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AddItem;
