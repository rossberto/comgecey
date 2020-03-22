import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Container, Grid, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchBar from './SearchBar';
import UsersTable from './UsersTable';
import { apiUrl } from '../apiUrl';

const baseUrl = apiUrl + 'users';

function createData(name, email) {
  return { name, email};
}

export default function Users(props) {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    axios.get(baseUrl).then(response => {
      const formatUsers = response.data.users.map(user => {
        return {
          name: user.name + ' ' + user.father_lname + ' ' + user.mother_lname,
          email: user.email
        }
      });

      setUsers(formatUsers);
      setFiltered(formatUsers);
    });
  }, []);

  function handleUpdateFilter(filter) {
    const usersFiltered = users.filter(row => row.name.toLowerCase().includes(filter.toLowerCase()));
    setFiltered(usersFiltered)
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
        <UsersTable users={filtered} />
      </Grid>
    </Grid>
  );
}
