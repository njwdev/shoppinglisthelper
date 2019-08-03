import React from 'react';
import PropTypes from 'prop-types';

const UserAccountButton = ({ username }) => (
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
    {username}
  </button>
);

UserAccountButton.propTypes = {username: PropTypes.string.isRequired,};

export default UserAccountButton;
