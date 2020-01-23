import React, {useState} from 'react';
import './App.css';

import Blog from './main/blog/Blog';
import SignUp from './main/signup/Signup';
import LandingPage from './main/landing/Landing';
import SuscribeDialog from './main/landing/Suscribe';
import InscriptionForm from './main/register/InscriptionForm';
import DocumentsUpload from './main/documents/DocumentsUpload';

import Button from '@material-ui/core/Button';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#642213',//'#212121',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

function App() {
  const [page, setPage] = useState(<LandingPage />)
  function handleClick(e) {
    switch (e.target.textContent) {
      case 'Landing Page':
        setPage(<LandingPage />)
        break;
      case 'Forma de Inscripción':
        setPage(<InscriptionForm />)
        break;
      case 'Blog':
        setPage(<Blog />)
        break;
      default:

    }
    console.log(e.target.textContent);
  }
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Button
          value='landing'
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          Landing Page
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          Forma de Inscripción
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          Blog
        </Button>

        {/*page*/}
        <DocumentsUpload />
      </ThemeProvider>
    </div>
  );
}

export default App;
