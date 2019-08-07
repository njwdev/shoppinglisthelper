import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

const UserAccountMenu = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <button
        style={{
          width: '40px',
          height: '40px',
          lineHeight: '1.75',
          textDecoration: 'none',
          display: 'inline-block',
          outline: 'none',
          color: 'white',
          backgroundColor: '#f50057',
          borderRadius: '100%',
          overflow: 'hidden',
          textAlign: 'center',
          margin: '0 2px',
        }}
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {props.initials}
      </button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose && props.logout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default UserAccountMenu;
