import React from 'react';
import Button from '@material-ui/core/Button';
import UserAccountButton from '../../../layout/Buttons/UserAccountButton';

const data = (text, link, onClick) => ({ text, link });

const authButtons = [data('My lists', '/mylists')];

const SignedInLinks = props => {
  return (
    <div>
      {authButtons.map(data => (
        <Button
          key={data.text}
          className={props.classes}
          href={data.link}
          variant="contained"
          styles={{ textTransform: 'lowercase' }}
          onClick={data.onClick}
        >
          {data.text}
        </Button>
      ))}
      <UserAccountButton username={props.username} />
    </div>
  );
};

export default SignedInLinks;
