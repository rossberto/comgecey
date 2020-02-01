import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';


export default function IdInfo(props) {
  const [editDisabled, setEditDisabled] = useState(false);
  const [info, setInfo] = useState(props.info);

  function handleEdit() {
    setEditDisabled(true);
  }

  function handleSave() {
    setEditDisabled(false);
  }

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setInfo(info => ({...info, [key]:value}));
  }

  return (
    <React.Fragment>
      <Grid container justify="space-between">
        <Grid item>
          <Typography component="h1" variant="h5">
            Ficha de identificación
          </Typography>
        </Grid>
        <Grid item>
          <Button disabled={!editDisabled} onClick={handleSave}><SaveIcon /></Button>
          <Button disabled={editDisabled} onClick={handleEdit}><EditIcon /></Button>
        </Grid>
      </Grid>
      <form className={props.classes.form} noValidate onChange={handleChange}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoComplete="fname"
              name="name"
              required
              fullWidth
              id="name"
              label="Nombre(s)"
              autoFocus
              size="small"
              value={info.name}
              InputProps={{
                readOnly: !editDisabled,
              }}
              variant={editDisabled ? "outlined" : "filled"}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id="father_lname"
              label="Apellido Paterno"
              name="father_lname"
              autoComplete="lname"
              size="small"
              value={info.father_lname}
              InputProps={{
                readOnly: !editDisabled,
              }}
              variant={editDisabled ? "outlined" : "filled"}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id="mother_lname"
              label="Apellido Materno"
              name="mother_lname"
              autoComplete="mother_lnameac"
              size="small"
              value={info.mother_lname}
              InputProps={{
                readOnly: !editDisabled,
              }}
              variant={editDisabled ? "outlined" : "filled"}
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
              value={info.birthdate}
              InputProps={{
                readOnly: !editDisabled,
              }}
              variant={editDisabled ? "outlined" : "filled"}
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
              value={info.birthplace}
              InputProps={{
                readOnly: !editDisabled,
              }}
              variant={editDisabled ? "outlined" : "filled"}
            />
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
}
