import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Button} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import nav from '../nav';

const columns = [
  { id: 'name', label: 'Nombre Completo', minWidth: 170 },
  { id: 'code', label: 'Convocatoria' },
  {
    id: 'population',
    label: 'Acciones',
    //minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString(),
  },
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

export default function UsersTable(props) {
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

  function handleClick(e, type) {
    switch (type) {
      case 'user':
        nav('/users/1');
        break;
      case 'conv':
        nav('/convocatories/1');
        break;
      default:

    }
    console.log(e.target.name);
  }

  function handleDelete(e, name) {
    const r = window.confirm('Confirmas la eliminación del usuario ' + name + '.')
    if (r) {
      console.log('Se solicita eliminar usuario.');
    }
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
            {props.users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  <TableCell key={index+row.name} align="center">
                    <Button onClick={(e) => handleClick(e, 'user')}>{row.name}</Button>
                  </TableCell>
                  <TableCell key={index+row.convocatory} align="center">
                    <Button name={row.convocatory} onClick={(e) => handleClick(e, 'conv')}>{row.convocatory}</Button>
                  </TableCell>
                  <TableCell key={index+'del-'+row.name} align="center">
                    <Button onClick={(e) => handleDelete(e, row.name)}><DeleteIcon /></Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={props.users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
