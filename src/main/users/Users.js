import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {Container, Grid, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AppContext from '../../AppContext';
import SearchBar from './SearchBar';
import UsersTable from './UsersTable';
import { apiUrl } from '../apiUrl';

const baseUrl = apiUrl + 'users';

function createData(name, email) {
  return { name, email};
}

export default function Users(props) {
  const appContext = useContext(AppContext);
  const { goDashboard, userSession } = appContext;

  const [fetched, setFetched] = useState(false);
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (!userSession.is_admin) {
      alert('La página a la que intenta acceder es de uso exclusivo de administradores de la plataforma Comgecey.\n\n' +
            'Se le redireccionará a su perfil.');
      goDashboard();
    }
  });

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
      setFetched(true)
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
        <UsersTable fetched={fetched} users={filtered} />
      </Grid>
    </Grid>
  );
}
