import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { withCookies } from 'react-cookie';
import {Grid, Typography} from '@material-ui/core';
import Fetching from '../Fetching';
import SearchBar from './SearchBar';
import ConvocatoriesTable from './ConvocatoriesTable';
import { apiUrl } from '../apiUrl';

const baseUrl = apiUrl + 'convocatories/';

function createData(convocatory, status) {
  return { convocatory, status };
}

function Convocatories(props) {
  const [fetched, setFetched] = useState(false);
  const [filter, setFilter] = useState({searchText:'', filterOption:'Todas'});
  const [convocatories, setConvocatories] = useState([]);
  const [filtered, setFiltered] = useState([]);
  //const [searchText, setSearchText] = useState('');

  useEffect(() => {
    console.log(props);
  });

  useEffect(() => {
    axios.get(baseUrl).then(response => {
      setConvocatories(response.data.convocatories);
      setFiltered(response.data.convocatories);
      setFetched(true);
    });
  }, []);

  useEffect(() => {
    console.log(convocatories);
    if (filter.filterOption !== 'Todas') {
      //const filtered = convocatories.filter(row => row.status===filter.filterOption &&
      //                             row.convocatory.toLowerCase().includes(filter.searchText.toLowerCase()))
      setFiltered(
        convocatories.filter(row => row.status===filter.filterOption &&
                                     row.title.toLowerCase().includes(filter.searchText.toLowerCase()))
      );
    } else {
      //const filtered = convocatories.filter(row => row.convocatory.toLowerCase().includes(filter.searchText.toLowerCase()));
      setFiltered(
        convocatories.filter(row => row.title.toLowerCase().includes(filter.searchText.toLowerCase()))
      );
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
        <Fetching fetched={fetched} />
        {fetched ? <ConvocatoriesTable userId={props.cookies.cookies.userId} convs={filtered} /> : ''}
      </Grid>
    </Grid>
  );
}

export default withCookies(Convocatories);
