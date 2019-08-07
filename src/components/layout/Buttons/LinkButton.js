import React from 'react';
import Button from '@material-ui/core/Button';

const LinkButton = props => (
  <Button
    style={{ textTransform: 'initial', marginTop: '10px' }}
    variant="text"
    fullWidth
    href={props.link}
    size="small"
  >
    {props.children}
  </Button>
);

export default LinkButton;
