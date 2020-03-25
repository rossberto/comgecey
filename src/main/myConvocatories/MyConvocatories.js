import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { withCookies } from 'react-cookie';
import {Grid, Typography} from '@material-ui/core';
import AppContext from '../../AppContext';
import Fetching from '../Fetching';
//import SearchBar from './SearchBar';
import OpenConvocatoriesTable from './OpenConvocatoriesTable';
import MyConvocatoriesTable from './MyConvocatoriesTable';
import { apiUrl } from '../apiUrl';

const userConvsUrl = apiUrl + 'users/';
const convsUrl = apiUrl + 'convocatories';

function createData(convocatory, status) {
  return { convocatory, status };
}

function MyConvocatories(props) {
  const appContext = useContext(AppContext);
  const { userSession } = appContext;

  const [convsFetched, setConvsFetched] = useState(false);
  const [userConvsFetched, setuserConvsFetched] = useState(false);
  const [userConvsUpdate, setUserConvsUpdate] = useState(false);
  const [filter, setFilter] = useState({searchText:'', filterOption:'Todas'});
  const [convocatories, setConvocatories] = useState([]);
  const [userConvocatories, setUserConvocatories] = useState([]);
  const [filtered, setFiltered] = useState([]);
  //const [searchText, setSearchText] = useState('');

  useEffect(() => {
    console.log(props);
    //console.log(fetched);
  }, []);

  useEffect(() => {
    axios.get(convsUrl).then(response => {
      setConvocatories(response.data.convocatories);
      //setFiltered(response.data.convocatories);
      setConvsFetched(true);
    });
  }, []);

  useEffect(() => {
    axios.get(userConvsUrl + userSession.id + '/convocatories').then(response => {
      setUserConvocatories(response.data.userConvocatories);
      //setFiltered(response.data.userConvocatories);
      setuserConvsFetched(true);
    });
  }, [userConvsUpdate]);

  /*
  useEffect(() => {
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
  */

  function handleUpdateUserConvs() {
    setUserConvsUpdate(!userConvsUpdate);
  }

  return (
    <Grid container alignItems="center" direction="column" spacing={3}>
      <Grid item xs={12} sm={10}>
        <Typography align="center" variant="h2" component="h2" gutterBottom style={{alignItems:'center'}}>Convocatorias</Typography>
      </Grid>
      {/*<Grid item xs={12} sm={10}>
        <SearchBar updateFilter={handleUpdateFilter} />
      </Grid>*/}
      <Grid item xs={12} >
        <Typography align="center" variant="h5" component="h5" gutterBottom style={{alignItems:'center'}}>Convocatorias Abiertas</Typography>
        <Fetching fetched={convsFetched} />
        {convsFetched ? <OpenConvocatoriesTable userId={props.cookies.cookies.userId} convs={convocatories} updateUserConvs={handleUpdateUserConvs} /> : ''}
      </Grid>
      <Grid item xs={12} >
        <Typography align="center" variant="h5" component="h5" gutterBottom style={{alignItems:'center'}}>Mis Convocatorias</Typography>
        <Fetching fetched={userConvsFetched} />
        {userConvsFetched ? <MyConvocatoriesTable userId={props.cookies.cookies.userId} convs={userConvocatories} updateUserConvs={handleUpdateUserConvs} /> : ''}
      </Grid>
    </Grid>
  );
}

export default withCookies(MyConvocatories);
