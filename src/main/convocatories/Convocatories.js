import React from 'react';
import Grid from '@material-ui/core/Grid';

import SearchBar from './SearchBar';
import ConvocatoriesTable from './ConvocatoriesTable';

export default function Convocatories(props) {
  return (
    <Grid container alignItems="center" direction="column" spacing={3}>
      <Grid item xs={12} sm={10}>
        <SearchBar />
      </Grid>
      <Grid item xs={12} >
        <ConvocatoriesTable />
      </Grid>
    </Grid>
  );
}
