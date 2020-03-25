import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead,
         TablePagination, TableRow, Button, Typography } from '@material-ui/core';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import StopIcon from '@material-ui/icons/Stop';
import { apiUrl } from '../apiUrl';
import nav from '../nav';

const baseUrl = apiUrl + 'users/';
const convsUrl = apiUrl + 'convocatories/';

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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function handleClick(id) {
    console.log(id);
    nav('/convocatories/' + id);
  }

  function handleUnsuscribe(convocatoryId, userId) {
      const r = window.confirm(`¿Confirmas que vas a desistir de esta convocatoria?`);

      if (r) {
        const url = convsUrl + convocatoryId + '/suscribers/' + userId;
        axios.delete(url).then(response => {
          if (response.status === 204) {
            alert('Se ha quitado el usuario de la convocatoria.');
            props.updateUserConvs();
            //setRefresh(!refresh);
          }
        });
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
            {props.convs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  <TableCell key={row.title} align="center">
                    <Button name={row.id} onClick={() => handleClick(row.id)}>{row.title}</Button>
                  </TableCell>
                  <TableCell key={row.status} align="center">
                    <Typography variant="button" display="block" gutterBottom>{row.user_status}</Typography>
                  </TableCell>
                  <TableCell key="icon" align="center">
                    <Button disabled={(row.user_status !== 'Certificado') && (row.user_status !== null)  ? false : true} onClick={(e) => handleUnsuscribe(row.id, props.userId)}>{(row.user_status !== 'Certificado') && (row.user_status !== null) ? 'Desistir' : ''}</Button>
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
        count={props.convs.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
