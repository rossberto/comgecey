import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';

export default function GeneralInfo(props) {
  const [info, setInfo] = useState(props.info);

  function handleChange(e) {
    e.preventDefault();
    const key = e.target.name;
    const value= e.target.value;
    setInfo({...info, [key]:value});
  }

  return (
    <React.Fragment>
      <form className={props.classes.form} noValidate onChange={handleChange}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoComplete="tit"
              name="title"
              required
              fullWidth
              id="title"
              label="Title "
              autoFocus
              size="small"
              value={info.title}
              InputProps={{
                readOnly: !props.edit,
              }}
              variant={props.edit ? "standard" : "filled"}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              name="date"
              label="Fecha de Examen"
              type="date"
              id="date"
              InputLabelProps={{shrink: true}}
              size="small"
              value={info.date}
              InputProps={{
                readOnly: !props.edit,
              }}
              variant={props.edit ? "standard" : "filled"}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id="description"
              label="Descripción"
              name="description"
              autoComplete="descr"
              size="small"
              value={info.description}
              InputProps={{
                readOnly: !props.edit,
              }}
              variant={props.edit ? "standard" : "filled"}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email de Contacto"
              name="email"
              autoComplete="emai"
              size="small"
              value={info.email}
              InputProps={{
                readOnly: !props.edit,
              }}
              variant={props.edit ? "standard" : "filled"}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id="phone"
              label="Teléfono de Contacto"
              name="phone"
              autoComplete="phon"
              size="small"
              value={info.phone}
              InputProps={{
                readOnly: !props.edit,
              }}
              variant={props.edit ? "standard" : "filled"}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id="bank"
              label="Cuenta Bancaria"
              name="bank"
              autoComplete="bank"
              size="small"
              value={info.bank}
              InputProps={{
                readOnly: !props.edit,
              }}
              variant={props.edit ? "standard" : "filled"}
            />
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
}
