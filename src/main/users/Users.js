import React, {useState} from 'react';
import {Container, Grid, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchBar from './SearchBar';
import UsersTable from './UsersTable';

function createData(name, convocatory) {
  return { name, convocatory};
}

const rows = [
  createData('Christian Eduardo Boyain de Goytia y Luna', '2027-1'),
  createData('Diana Iveth Sierra Gomez', '2020-1'),
  createData('Jorge Alberto Fonz Aguilar', '2020-2'),
  createData('Gloria Yaneth Calderón Loeza', '2020-3'),
  createData('Francisco Calderón Ojeda', '2020-4'),
  createData('Diana Iveth Sierra Gomez', '2020-5'),
  createData('Jorge Alberto Fonz Aguilar', '2020-6'),
  createData('Gloria Yaneth Calderón Loeza', '2020-7'),
  createData('Francisco Calderón Ojeda', '2020-8'),
  createData('Diana Iveth Sierra Gomez', '2020-9'),
  createData('Jorge Alberto Fonz Aguilar', '2021-1'),
  createData('Gloria Yaneth Calderón Loeza', '2022-1'),
  createData('Francisco Calderón Ojeda', '2023-1'),
  createData('Diana Iveth Sierra Gomez', '2024-1'),
  createData('Jorge Alberto Fonz Aguilar', '2025-1'),
  createData('Gloria Yaneth Calderón Loeza', '2026-1')
];

export default function Users(props) {
  const [users, setUsers] = useState(rows);

  function handleUpdateFilter(filter) {
    const filtered = rows.filter(row => row.name.toLowerCase().includes(filter.toLowerCase()));
    setUsers(filtered)
  }

  return (
    <Grid container alignItems="center" direction="column" spacing={3}>
      <Grid item xs={12} sm={10}>
        <Typography align="center" variant="h2" component="h2" gutterBottom style={{alignItems:'center'}}>Médicos</Typography>
      </Grid>
      <Grid item xs={12} sm={10}>
        <SearchBar updateFilter={handleUpdateFilter} />
      </Grid>
      <Grid item xs={12} >
        <UsersTable users={users} />
      </Grid>
    </Grid>
  );
}
