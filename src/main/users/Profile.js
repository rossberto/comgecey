import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Grid, TextField, Button, Typography} from '@material-ui/core';
import IdInfo from './details/IdInfo';
import UserFiles from './UserFiles';
import ProfessionalInfo from './details/ProfessionalInfo';
import AddressInfo from './details/AddressInfo';

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
  name: 'Juan',
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
  school: 'Facultad de Medicina - UADY',
  startDate: '2004-12-05',
  endDate: '2008-06-06',
  internship: 'Hospital Juárez',
  internStartDate: '2008-05-05',
  internEndDate: '2009-05-05',
  ss: 'Catmis',
  ssStartDate: '2009-07-07',
  ssEndDate: '2010-05-05',
  examDate: '2010-10-10',
  examType: 'Defensa de Tesis',
  examTitle: 'La diabetis en Yucatán',
  book: '24/123',
  profId: '6ASDF15AS6SFD1',
  profIdDate: '2010-12-12',
  ssa: '1DF3D5DF1'
}

export default function Profile(props) {
  const classes = useStyles();

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
            <IdInfo info={idInfo} classes={classes}/>
          </Paper>
          <br />
          <Paper className={classes.paper}>
            <UserFiles classes={classes}/>
          </Paper>
          <br />
          <Paper className={classes.paper}>
            {<AddressInfo info={addressInfo} classes={classes} />}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <ProfessionalInfo info={professionalInfo} classes={classes} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
