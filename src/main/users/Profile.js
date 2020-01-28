import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import IdInfo from './details/IdInfo';
import ProfessionalInfo from './details/ProfessionalInfo';
import AddressInfo from './details/AddressInfo';

import UserFiles from './UserFiles';

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

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <IdInfo classes={classes}/>
          </Paper>
          <br />
          <Paper className={classes.paper}>
            <UserFiles classes={classes}/>
          </Paper>
          <br />
          <Paper className={classes.paper}>
            {<AddressInfo classes={classes} />}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <ProfessionalInfo classes={classes} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
