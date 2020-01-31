import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import GeneralInfo from './details/GeneralInfo';
import AddressInfo from './details/AddressInfo';
import Suscribers from './details/Suscribers';

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

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <GeneralInfo info={genInfo} classes={classes}/>
          </Paper>
          <br />
          <Paper className={classes.paper}>
            <AddressInfo info={placeInfo} classes={classes}/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Suscribers classes={classes} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
