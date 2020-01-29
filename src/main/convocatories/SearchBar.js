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

  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <React.Fragment>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Buscar Convocatoria"
          inputProps={{ 'aria-label': 'search google maps' }}
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
            value={state.age}
            onChange={handleChange('age')}
            labelWidth={labelWidth}
            inputProps={{
              name: 'age',
              id: 'outlined-age-native-simple',
            }}
          >
            <option value="no">Todas</option>
            <option value="Aguascalientes">Abiertas</option>
            <option value="Baja California">Cerradas</option>
            <option value="Baja California Sur">Canceladas</option>
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
