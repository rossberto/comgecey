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
import { apiUrl } from '../apiUrl';

const baseUrl = apiUrl + 'users/';

const useStyles = makeStyles({
  table: {
    //minWidth: 350,
    width: "100%"
  },
});

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const endpoints = {
  'CURP': 'curp',
  'RFC': 'rfc',
  'Comprobante de domicilio': 'domicilio',
  'Título Profesional': 'profesional',
  'Solicitud':'solicitud',
  'Comprobante de pago': 'pago'
}

const initFile = {
  'Comprobante de pago': {
    endpoint: 'pago'
  },
  'Título Profesional': {
    endpoint: 'profesional'
  },
  'RFC': {
    endpoint: 'rfc',
  },
  'CURP': {
    endpoint: 'curp',
  },
  'Comprobante de domicilio': {
    endpoint: 'domicilio',
  }
}

const initSaveDisabled = {
  'CURP': true,
  'RFC': true,
  'Comprobante de domicilio': true,
  'Título Profesional': true,
  'Solicitud': true,
  'Comprobante de pago': true
}

const initFilePath = {
  'CURP': '',
  'RFC': '',
  'Comprobante de domicilio': '',
  'Título Profesional': '',
  'Solicitud': '',
  'Comprobante de pago': ''
}

export default function UserFiles(props) {
  const classes = useStyles();

  const [file, setFile] = useState(initFile);
  const [saveDisabled, setSaveDisabled] = useState(initSaveDisabled);
  const [filePath, setFilePath] = useState(initFilePath)

  useEffect(() => {
    Object.keys(initFilePath).forEach(key => {
      setFilePath(
        {
          ...filePath, [key]: baseUrl + props.userId + '/documents/solicitud-' + props.userId + '.pdf'
        }
      );
    });
  }, []);

  function handleChange(e) {
    setFile({...file, [e.target.name]: {
      file: e.target.files[0],
      filename: e.target.value.split('\\')[2]
    }});

    setSaveDisabled({...saveDisabled, [e.target.name]: false});
  }

  function handleClick(key) {
    const formData = new FormData();
    formData.append("file", file[key].file);

    const url = baseUrl + props.userId + '/files/' + endpoints[key];
    axios.post(url, formData, {headers: {
      'Content-Type': 'application/pdf'
    }}).then(response => {
      console.log(response);
      setSaveDisabled({...saveDisabled, [key]: true});
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
            <TableRow key={'Solicitud'}>
              <TableCell component="th" scope="row">
                <Button href={baseUrl + props.userId + '/documents/solicitud-' + props.userId + '.pdf'} className={classes.button} download target="_blank">{'Solicitud'}</Button>
              </TableCell>
              <TableCell align="right">

              </TableCell>
            </TableRow>
            {Object.keys(file).map(key => (
              <TableRow key={key}>
                <TableCell component="th" scope="row">
                  <Button href={filePath[key]} className={classes.button} download target="_blank">{key}</Button>
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
                      disabled = {saveDisabled[key]}
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
