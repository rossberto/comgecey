import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';

import nav from '../../nav.js'

const columns = [
  { id: 'name', label: 'Nombre Completo', minWidth: 170 },
  { id: 'code', label: 'Pago' },
  {
    id: 'population',
    label: 'Acciones',
    //minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString(),
  },
];

function createData(name, code, population, size) {
  return { name, code, population };
}

const rows = [
  createData('Christian Eduardo Boyain de Goytia y Luna', <VisibilityIcon />, <DeleteIcon />),
  createData('Diana Iveth Sierra Gomez', <VisibilityIcon />, <DeleteIcon />),
  createData('Jorge Alberto Fonz Aguilar', <VisibilityIcon />, <DeleteIcon />),
  createData('Gloria Yaneth Calderón Loeza', <VisibilityIcon />, <DeleteIcon />),
  createData('Francisco Calderón Ojeda', <VisibilityIcon />, <DeleteIcon />),
  createData('Diana Iveth Sierra Gomez', '', <DeleteIcon />),
  createData('Jorge Alberto Fonz Aguilar', <VisibilityIcon />, <DeleteIcon />),
  createData('Gloria Yaneth Calderón Loeza', <VisibilityIcon />, <DeleteIcon />),
  createData('Francisco Calderón Ojeda', '', <DeleteIcon />),
  createData('Diana Iveth Sierra Gomez', '', <DeleteIcon />),
  createData('Jorge Alberto Fonz Aguilar', <VisibilityIcon />, <DeleteIcon />),
  createData('Gloria Yaneth Calderón Loeza', <VisibilityIcon />, <DeleteIcon />),
  createData('Francisco Calderón Ojeda', <VisibilityIcon />, <DeleteIcon />),
  createData('Diana Iveth Sierra Gomez', '', <DeleteIcon />),
  createData('Jorge Alberto Fonz Aguilar', <VisibilityIcon />, <DeleteIcon />),
  createData('Gloria Yaneth Calderón Loeza', <VisibilityIcon />, <DeleteIcon />),
];

const useStyles = makeStyles({
  root: {
    //maxWidth: '600px',

  },
  container: {
    //maxHeight: 440,
    justify:"center"
  },
});

export default function Suscribers() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function handleClick() {
    nav('/users/1');
  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        <Button onClick={handleClick}>{column.format && typeof value === 'number' ? column.format(value) : value}</Button>
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
