import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';

export default function ProfessionalInfo(props) {
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
    setInfo({...info, [key]:value})
  }

  return (
    <React.Fragment>
      <Grid container justify="space-between">
        <Grid item>
          <Typography component="h1" variant="h5">
            Licenciatura
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
              name="school"
              required
              fullWidth
              id="school"
              label="Escuela donde estudió la licenciatura"
              autoFocus
              size="small"
              value={info.school}
              InputProps={{
                readOnly: !editDisabled,
              }}
              variant={editDisabled ? "outlined" : "filled"}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              name="startDate"
              label="Fecha de Inicio"
              type="date"
              id="startDate"
              InputLabelProps={{shrink: true}}
              size="small"
              value={info.startDate}
              InputProps={{
                readOnly: !editDisabled,
              }}
              variant={editDisabled ? "outlined" : "filled"}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              name="endDate"
              label="Fecha de Terminación"
              type="date"
              id="endDate"
              InputLabelProps={{shrink: true}}
              size="small"
              value={info.endDate}
              InputProps={{
                readOnly: !editDisabled,
              }}
              variant={editDisabled ? "outlined" : "filled"}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="internship"
              label="Sitio donde realizó el internado"
              name="internship"
              size="small"
              value={info.internship}
              InputProps={{
                readOnly: !editDisabled,
              }}
              variant={editDisabled ? "outlined" : "filled"}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              name="internStartDate"
              label="Inicio de Internado"
              type="date"
              id="internStartDate"
              InputLabelProps={{shrink: true}}
              size="small"
              value={info.internStartDate}
              InputProps={{
                readOnly: !editDisabled,
              }}
              variant={editDisabled ? "outlined" : "filled"}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              name="internEndDate"
              label="Fin de Internado"
              type="date"
              id="internEndDate"
              InputLabelProps={{shrink: true}}
              size="small"
              value={info.internEndDate}
              InputProps={{
                readOnly: !editDisabled,
              }}
              variant={editDisabled ? "outlined" : "filled"}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="ss"
              label="Lugar donde realizó el servicio social"
              name="ss"
              size="small"
              value={info.ss}
              InputProps={{
                readOnly: !editDisabled,
              }}
              variant={editDisabled ? "outlined" : "filled"}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              name="ssStartDate"
              label="Inicio de Servicio Social"
              type="date"
              id="ssStartDate"
              InputLabelProps={{shrink: true}}
              size="small"
              value={info.ssStartDate}
              InputProps={{
                readOnly: !editDisabled,
              }}
              variant={editDisabled ? "outlined" : "filled"}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              name="ssEndDate"
              label="Fin de Servicio Social"
              type="date"
              id="ssEndDate"
              InputLabelProps={{shrink: true}}
              size="small"
              value={info.ssEndDate}
              InputProps={{
                readOnly: !editDisabled,
              }}
              variant={editDisabled ? "outlined" : "filled"}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="examDate"
              label="Fecha de Examen Profesional"
              type="date"
              id="examDate"
              InputLabelProps={{shrink: true}}
              size="small"
              value={info.examDate}
              InputProps={{
                readOnly: !editDisabled,
              }}
              variant={editDisabled ? "outlined" : "filled"}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="examType"
              label="Tipo de Examen (Oral y/o Escrito)"
              id="examType"
              size="small"
              value={info.examType}
              InputProps={{
                readOnly: !editDisabled,
              }}
              variant={editDisabled ? "outlined" : "filled"}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="examTitle"
              label="Título de la Tesis Recepcional"
              id="examTitle"
              size="small"
              value={info.examTitle}
              InputProps={{
                readOnly: !editDisabled,
              }}
              variant={editDisabled ? "outlined" : "filled"}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="profId"
              label="Número de Cédula Profesional"
              id="profId"
              size="small"
              value={info.profId}
              InputProps={{
                readOnly: !editDisabled,
              }}
              variant={editDisabled ? "outlined" : "filled"}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="profIdDate"
              label="Fecha de Expedición de Cédula Profesional"
              type="date"
              id="profIdDate"
              InputLabelProps={{shrink: true}}
              size="small"
              value={info.profIdDate}
              InputProps={{
                readOnly: !editDisabled,
              }}
              variant={editDisabled ? "outlined" : "filled"}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="book"
              label="Libro, Fojas y Número"
              id="book"
              size="small"
              value={info.book}
              InputProps={{
                readOnly: !editDisabled,
              }}
              variant={editDisabled ? "outlined" : "filled"}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="ssa"
              label="Registro en la SSA"
              id="ssa"
              size="small"
              value={info.ssa}
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
