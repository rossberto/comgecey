import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Add from '@material-ui/icons/Add';

import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles(theme => ({
  root: {

    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center",
    marginBottom: "24px"
    //maxWidth: "500px"
    //width: "100%"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  const [inputs, setInputs] = React.useState({
    searchText: '',
    filterOption: 'Todas'
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  React.useEffect(() => {
    console.log(inputs.filterOption);
  }, [inputs.filterOption]);

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setInputs({
      ...inputs,
      [key]: value,
    });
  };

  return (
    <React.Fragment>
      <Paper component="form" className={classes.root}>
        <InputBase
          name="searchText"
          className={classes.input}
          placeholder="Buscar Convocatoria"
          inputProps={{ 'aria-label': 'search google maps' }}
          value={inputs.searchText}
          onChange={handleChange}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider className={classes.divider} orientation="vertical" />
        <br />
        <FormControl size="small" variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
            Mostrar
          </InputLabel>
          <Select
            native
            value={inputs.filterOption}
            labelWidth={labelWidth}
            inputProps={{
              name: 'filterOption',
              id: 'outlined-age-native-simple',
            }}
            onChange={handleChange}
          >
            <option value="Todas">Todas</option>
            <option value="Abiertas">Abiertas</option>
            <option value="Cerradas">Cerradas</option>
            <option value="Canceladas">Canceladas</option>
          </Select>
        </FormControl>
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton color="primary" className={classes.iconButton} aria-label="directions">
          <Add />
        </IconButton>
      </Paper>
    </React.Fragment>
  );
}
