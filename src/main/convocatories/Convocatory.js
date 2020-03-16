import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Grid, TextField, Button, Typography} from '@material-ui/core';
import GeneralInfo from './details/GeneralInfo';
import AddressInfo from './details/AddressInfo';
import Suscribers from './details/Suscribers';
import EditDetails from './details/EditDetails';
import { apiUrl } from '../apiUrl';

const convsUrl = apiUrl + 'convocatories/';
const placesUrl = apiUrl + 'places/';

const useStyles = makeStyles(theme => ({
  root: {
    //flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  }
}));

const genInfo = {
  title: '2020-2',
  date: '2020-05-25',
  description: 'Aquí se describe',
  email: 'hola@comgecey.org',
  phone: '9999875421',
  bank: '1234567890'
}

const placeInfo = {
  place: 'Facultad de Medicina - UADY',
  street: 'Av. Itzimná',
  number: 'S/N',
  town: 'Col. Cupules',
  city: 'Mérida',
  state: 'Yucatán',
  cp: '97321',
  phone: '9999876532'
}

export default function Convocatory(props) {
  const classes = useStyles();

  const [conv, setConv] = useState({});
  const [edit, setEdit] = useState({
    GenInfo: false,
    AddressInfo: false
  });

  useEffect(() => {
    axios.get(convsUrl + props.match.params.convocatoryId).then(response => {
      response.data.convocatory.date = response.data.convocatory.date.slice(0,10);
      setConv(response.data.convocatory)
    });
  }, [props.match.params]);

  function handleEditEnable(name) {
    setEdit({...edit, [name]:true});
  }

  function handleConvInfo(key, value) {
    setConv({...conv, [key]: value});
  }

  function handleSave(name) {
    console.log(name);
    switch (name) {
      case 'GenInfo':
        axios.put(convsUrl + props.match.params.convocatoryId, conv).then(response => {
          console.log(response);
        });
        break;
      default:

    }
    setEdit({...edit, [name]:false});
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={10}>
          <Typography align="center" variant="h2" component="h2" gutterBottom style={{alignItems:'center'}}>Convocatoria 2020-1</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <EditDetails
              name='GenInfo'
              title="Ficha de Convocatoria"
              enableEdit={handleEditEnable}
              handleSave={handleSave}
              edit={edit.GenInfo}
            />
            <GeneralInfo info={conv} updateInfo={handleConvInfo} classes={classes} edit={edit.GenInfo}/>
          </Paper>
          <br />
          <Paper className={classes.paper}>
            <EditDetails
              name="AddressInfo"
              title="Lugar de Examen"
              enableEdit={handleEditEnable}
              handleSave={handleSave}
              edit={edit.AddressInfo}
            />
            <AddressInfo info={placeInfo} classes={classes} edit={edit.AddressInfo}/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h5">Inscritos</Typography>
            <Suscribers classes={classes} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
