import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import SearchBar from './SearchBar';
import ConvocatoriesTable from './ConvocatoriesTable';
import StopIcon from '@material-ui/icons/Stop';

function createData(convocatory, status) {
  return { convocatory, status };
}

const rows = [
  createData('2020-1', 'Abierta'),
  createData('2019-3', 'Cerrada'),
  createData('2019-2b', 'Cerrada'),
  createData('2019-1', 'Cerrada'),
  createData('2019-2a', 'Cancelada'),
];

export default function Convocatories(props) {
  const [convocatories, setConvocatories] = useState(rows);

  function handleUpdateFilter(filter) {
    if (filter !== 'Todas') {
      const filtered = rows.filter(row => row.status==filter);
      setConvocatories(filtered);
    } else {
      setConvocatories(rows);
    }
  }
  return (
    <Grid container alignItems="center" direction="column" spacing={3}>
      <Grid item xs={12} sm={10}>
        <SearchBar updateFilter={handleUpdateFilter} />
      </Grid>
      <Grid item xs={12} >
        <ConvocatoriesTable convs={convocatories} />
      </Grid>
    </Grid>
  );
}
