import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Grid, TextField, Button, Typography} from '@material-ui/core';
import IdInfo from './details/IdInfo';
import UserFiles from './UserFiles';
import ProfessionalInfo from './details/ProfessionalInfo';
import AddressInfo from './details/AddressInfo';

import AppContext from '../../AppContext';

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

const idInfo = {
  name: '',
  father_lname: 'Gonzalez',
  mother_lname: 'Perez',
  email: 'juan@correo.com',
  birthdate: '1980-06-06',
  birthplace: 'Mérida, Yucatán'
}

const addressInfo = {
  street: 60,
  number: 123,
  town: 'Centro',
  city: 'Mérida',
  state: 'Yucatán',
  cp: '12345',
  phone: '9999871420'
}

const professionalInfo = {
  endpoint: '/professional',
  school: '',
  start_date: '',
  finish_date: '',
  intership: '',
  start_date_internship: '',
  finish_date_internship: '',
  social_service: '',
  start_date_social: '',
  finish_date_social: '',
  exam_date: '',
  exam_type: '',
  tesis: '',
  professional_id: '',
  professional_id_date: '',
  book: '',
  ssa: ''
}

export default function Profile(props) {
  const classes = useStyles();

  const appContext = useContext(AppContext);
  const { auth, goDashboard, routes, userSession, setUserSession } = appContext;

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography align="center" variant="h2" component="h2" gutterBottom style={{alignItems:'center'}}>Perfil de Médico</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <IdInfo info={userSession} classes={classes}/>
          </Paper>
          <br />
          <Paper className={classes.paper}>
            <UserFiles classes={classes}/>
          </Paper>
          <br />
          <Paper className={classes.paper}>
            {<AddressInfo info={addressInfo} userId={userSession.id} classes={classes} />}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <ProfessionalInfo info={professionalInfo} userId={userSession.id} classes={classes} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
