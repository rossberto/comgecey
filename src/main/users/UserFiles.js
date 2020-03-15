import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import FileAddIcon from '@material-ui/icons/NoteAdd';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles({
  table: {
    //minWidth: 350,
    width: "100%"
  },
});

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData('CURP', 159, 6.0),
  createData('RFC', 237, 9.0),
  createData('Comprobante de domicilio', 262, 16.0),
  createData('Título Profesional', 305, 3.7),
  createData('Solicitud', 356, 16.0),
  createData('Comprobante de pago', 356, 16.0),
];

const initFile = {
  'CURP': {
    localPath: '',
  },
  'RFC': {
    localPath: '',
  },
  'Comprobante de domicilio': {
    label: 'Comprobante de domicilio',
    localPath: '',
  },
  'Título Profesional': {
    label: 'Título Profesional',
    localPath: '',
  },
  'Solicitud': {
    label: 'Solicitud',
    localPath: '',
  },
  'Comprobante de pago': {
    label: 'Comprobante de pago',
    localPath: '',
  }
}

export default function UserFiles(props) {
  const classes = useStyles();

  const [file, setFile] = useState(initFile);

  useEffect(() => {
    console.log(file);
  }, [file]);

  function handleChange(e) {
    console.log(e.target.files[0]);

    //console.log({[e.target.name]: {e.target.value}});
    setFile({...file, [e.target.name]: {
      file: e.target.files[0],
      filename: e.target.value.split('\\')[2],
      changed: true
    }});
  }

  function handleClick(key) {
    console.log(key);
    console.log(file[key].file);
    const formData = new FormData();
    formData.append("file", file[key].file);


    console.log(formData);
    const url = 'http://localhost:4000/api/users/' + props.userId + '/files/curp';
    axios.post(url, formData, {headers: {
      'Content-Type': 'application/pdf'
    }}).then(response => {
      console.log(response);
    });
  }

  return (
    <React.Fragment>
      <Typography component="h1" variant="h5">
        Documentos
      </Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            {Object.keys(file).map(key => (
              <TableRow key={key}>
                <TableCell component="th" scope="row">
                  <Button>{key}</Button>
                  <Typography>
                    {file[key].filename}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                    <Button
                      component="label"
                    >
                      {file[key].filename ? <EditIcon /> : <FileAddIcon />}
                      <input
                        type="file"
                        name={key}
                        style={{ display: "none" }}
                        onChange={handleChange}
                      />
                    </Button>
                    <Button
                      onClick={() => handleClick(key)}
                      disabled = {file[key].changed ? false : true}
                    >
                      <SaveIcon />
                    </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}
