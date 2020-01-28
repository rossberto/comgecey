import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function IdInfo(props) {
  return (
    <React.Fragment>
      <Typography component="h1" variant="h5">
        Ficha de identificación
      </Typography>
      <form className={props.classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoComplete="fname"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="Nombre(s)"
              autoFocus
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Apellido Paterno"
              name="lastName"
              autoComplete="lname"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id="email"
              label="Apellido Materno"
              name="email"
              autoComplete="email"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              name="birthdate"
              label="Fecha de Nacimiento"
              type="date"
              id="birthdate"
              InputLabelProps={{shrink: true}}
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id="birthplace"
              label="Lugar de Nacimiento"
              name="birthplace"
              size="small"
            />
          </Grid>
        </Grid>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={props.classes.submit}
        >
          Guardar
        </Button>
      </form>
    </React.Fragment>
  );
}
