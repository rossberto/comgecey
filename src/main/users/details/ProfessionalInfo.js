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

  function handleEdit() {
    setEditDisabled(true);
  }

  function handleSave() {
    setEditDisabled(false);
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
      <form className={props.classes.form} noValidate>
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
              value={props.info.school}
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
              name="start_date"
              label="Fecha de Inicio"
              type="date"
              id="start_date"
              InputLabelProps={{shrink: true}}
              size="small"
              value={props.info.startDate}
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
              name="finish_date"
              label="Fecha de Terminación"
              type="date"
              id="finish_date"
              InputLabelProps={{shrink: true}}
              size="small"
              value={props.info.endDate}
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
              value={props.info.internship}
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
              name="start_date_internship"
              label="Inicio de Internado"
              type="date"
              id="start_date_internship"
              InputLabelProps={{shrink: true}}
              size="small"
              value={props.info.internStartDate}
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
              name="finish_date_internship"
              label="Fin de Internado"
              type="date"
              id="finish_date_internship"
              InputLabelProps={{shrink: true}}
              size="small"
              value={props.info.internEndDate}
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
              id="social_service"
              label="Lugar donde realizó el servicio social"
              name="social_service"
              size="small"
              value={props.info.ss}
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
              name="start_date_social"
              label="Inicio de Servicio Social"
              type="date"
              id="start_date_social"
              InputLabelProps={{shrink: true}}
              size="small"
              value={props.info.ssStartDate}
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
              name="finish_date_social"
              label="Fin de Servicio Social"
              type="date"
              id="finish_date_social"
              InputLabelProps={{shrink: true}}
              size="small"
              value={props.info.ssEndDate}
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
              name="exam_date"
              label="Fecha de Examen Profesional"
              type="date"
              id="exam_date"
              InputLabelProps={{shrink: true}}
              size="small"
              value={props.info.examDate}
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
              name="exam_type"
              label="Tipo de Examen (Oral y/o Escrito)"
              id="exam_type"
              size="small"
              value={props.info.examType}
              InputProps={{
                readOnly: !editDisabled,
              }}
              variant={editDisabled ? "outlined" : "filled"}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="tesis"
              label="Título de la Tesis Recepcional"
              id="tesis"
              size="small"
              value={props.info.examTitle}
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
              name="profesional_id"
              label="Número de Cédula Profesional"
              id="profesional_id"
              size="small"
              value={props.info.profId}
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
              name="profesional_id_date"
              label="Fecha de Expedición de Cédula Profesional"
              type="date"
              id="profesional_id_date"
              InputLabelProps={{shrink: true}}
              size="small"
              value={props.info.profIdDate}
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
              value={props.info.book}
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
              value={props.info.profId}
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
