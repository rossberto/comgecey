import React from 'react';
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

export default function UserFiles() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography component="h1" variant="h5">
        Documentos
      </Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  <Button>{row.name}</Button>
                </TableCell>
                <TableCell align="right">
                  <Button><EditIcon /></Button>
                  <Button><DeleteIcon /></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}
