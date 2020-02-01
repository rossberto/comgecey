import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Grid, TextField, Button, Typography} from '@material-ui/core';
import GeneralInfo from './details/GeneralInfo';
import AddressInfo from './details/AddressInfo';
import Suscribers from './details/Suscribers';
import EditDetails from './details/EditDetails';
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

export default function Convocatory() {
  const classes = useStyles();

  const [edit, setEdit] = useState({
    GenInfo: false,
    AddressInfo: false
  });

  function handleEditEnable(name) {
    setEdit({...edit, [name]:true});
  }

  function handleSave(name) {
    console.log(name);
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
            <GeneralInfo info={genInfo} classes={classes} edit={edit.GenInfo}/>
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
