import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Dialog, DialogTitle, DialogContent, DialogActions, Grid, Typography, Divider, Button} from '@material-ui/core';
import GeneralInfo from './details/GeneralInfo';
import AddressInfo from './details/AddressInfo';

const newGenInfo = {
  title: '',
  date: '',
  email: '',
  phone: '',
  bank: ''
}

const placeInfo = {
  place: '',
  street: '',
  number: '',
  town: '',
  city: '',
  state: '',
  cp: '',
  phone: ''
}

const useStyles = makeStyles(theme => ({
  root: {

    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center",
    marginBottom: "24px"
    //maxWidth: "500px"
    //width: "100%"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function NewConvDialog(props) {
  const classes = useStyles();

  return (
    <Dialog onClose={props.closeDialog} open={props.open}>
      <DialogTitle align="center">Nueva Convocatoria</DialogTitle>
      <DialogContent>
        <Grid container styles={{width:'100%'}}>
          <Grid item>
            <Typography component="h1" variant="h5">
              Ficha de Convocatoria
            </Typography>
            <GeneralInfo variant="standard" edit={true} info={newGenInfo} classes={classes}/>
            <br />
            <Divider />
          </Grid>
          <Grid item>
            <Typography component="h1" variant="h5">
              Lugar del Examen
            </Typography>
            <AddressInfo edit={true} info={placeInfo} classes={classes}/>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions align="justify-between" className="justify-between pl-16">
      <Button
        variant="contained"
        onClick={props.closeDialog}
      >
        Cancelar
      </Button>
        <Button
          variant="contained"
        >
          Crear
        </Button>
      </DialogActions>
    </Dialog>
  );
}
