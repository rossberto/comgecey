import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Grid, Typography} from '@material-ui/core';
import SearchBar from './SearchBar';
import ConvocatoriesTable from './ConvocatoriesTable';
import StopIcon from '@material-ui/icons/Stop';
import { apiUrl } from '../apiUrl';

const baseUrl = apiUrl + 'convocatories/';

function createData(convocatory, status) {
  return { convocatory, status };
}

export default function Convocatories(props) {
  const [filter, setFilter] = useState({searchText:'', filterOption:'Todas'});
  const [convocatories, setConvocatories] = useState([]);
  //const [searchText, setSearchText] = useState('');

  useEffect(() => {
    axios.get(baseUrl).then(response => {
      console.log(response.data.convocatories);
      setConvocatories(response.data.convocatories);
    });
  }, []);

  useEffect(() => {
    console.log(convocatories);
    if (filter.filterOption !== 'Todas') {
      const filtered = convocatories.filter(row => row.status===filter.filterOption &&
                                   row.convocatory.toLowerCase().includes(filter.searchText.toLowerCase()));
      setConvocatories(filtered);
    } else {
      const filtered = convocatories.filter(row => row.convocatory.toLowerCase().includes(filter.searchText.toLowerCase()));
      setConvocatories(filtered);
    }
  }, [filter]);

  function handleUpdateFilter(key, value) {
    setFilter({...filter, [key]:value});
  }

  return (
    <Grid container alignItems="center" direction="column" spacing={3}>
      <Grid item xs={12} sm={10}>
        <Typography align="center" variant="h2" component="h2" gutterBottom style={{alignItems:'center'}}>Convocatorias</Typography>
      </Grid>
      <Grid item xs={12} sm={10}>
        <SearchBar updateFilter={handleUpdateFilter} />
      </Grid>
      <Grid item xs={12} >
        <ConvocatoriesTable convs={convocatories} />
      </Grid>
    </Grid>
  );
}
