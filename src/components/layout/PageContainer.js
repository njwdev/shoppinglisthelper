import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

const PageContainer = props => {
  const { children } = props;
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ padding: '5%' }}
    >
      <Grid item xs={12} sm={8} md={6}>
        {children}
      </Grid>
    </Grid>
  );
};
PageContainer.propTypes = { children: PropTypes.node.isRequired };
export default PageContainer;
