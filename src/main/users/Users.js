import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import SearchBar from './SearchBar';
import UsersTable from './UsersTable';

export default function Users(props) {
  return (
    <Grid container alignItems="center" direction="column" spacing={3}>
      <Grid item xs={12} sm={10}>
        <SearchBar />
      </Grid>
      <Grid item xs={12} >
        <UsersTable />
      </Grid>
    </Grid>
  );
}
