import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead,
        TablePagination, TableRow, Button} from '@material-ui/core';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import StopIcon from '@material-ui/icons/Stop';

import nav from '../nav';

const columns = [
  { id: 'code', label: 'Convocatoria', align: 'center' },
  { id: 'name', label: 'Estado', minWidth: 170, align: 'center' },
  {
    id: 'population',
    label: 'Acciones',
    //minWidth: 170,
    align: 'center',
    format: value => value.toLocaleString(),
  },
];

function createData(name, code, population, size) {
  return { name, code, population };
}

const rows = [
  createData('Abierta', '2020-1', <StopIcon />),
  createData('Cerrada', '2019-3', <StopIcon />),
  createData('Cerrada', '2019-2b', <StopIcon />),
  createData('Cerrada', '2019-1', <StopIcon />),
  createData('Cancelada', '2019-2a', <StopIcon />),
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

  function handleClick() {
    nav('/convocatories/1')
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
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
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
