import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import BackButton from './Buttons/BackButton';

const PageHeader = props => {
  const { title, link } = props;
  return (
    <Fragment>
      <Grid container direction="row" justify="space-between" alignItems="left">
        {title ? <h2>{title}</h2> : null}
        {link ? <BackButton link={link} /> : null}
      </Grid>
      <Typography variant="caption" style={{ marginBottom: '5px' }} />
    </Fragment>
  );
};

PageHeader.defaultProps = {
  link: undefined,
  title: undefined,
  pageDescription: undefined,
};

PageHeader.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  pageDescription: PropTypes.string,
};

export default PageHeader;
