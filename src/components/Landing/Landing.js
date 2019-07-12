import React from 'react';
import PageContainer from '../layout/PageContainer';

const Landing = props => {
  const { classes } = props;
  return (
    <PageContainer>
      <p
        style={{
          border: '1px solid black',
          padding: '10px',
          boxShadow: '10px 10px 10px #888888',
        }}
      >
        This is the landing page
      </p>
    </PageContainer>
  );
};

export default Landing;
