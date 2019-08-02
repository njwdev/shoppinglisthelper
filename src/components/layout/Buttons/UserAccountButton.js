import React from 'react';

const UserAccountButton = props => (
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
  >
    {props.username}
  </button>
);

export default UserAccountButton;
