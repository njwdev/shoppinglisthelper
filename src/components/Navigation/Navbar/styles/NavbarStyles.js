const navbarStyles = theme => ({
  appBar: {
    position: 'relative',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.background.default,
  },
  toolbarTitle: { flex: 1 },
  navButton: {
    textTransform: 'Capitalize',
    margin: '0 2px',
  },
  siteTitle: {
    color: 'inherit',
    textDecoration: 'none',
  },
});

export default navbarStyles;
