import React, {useState} from 'react';
import Layout from './main/layout/Layout';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import AppContext from './AppContext';
import routes from './configs/routesConfig';
import {createBrowserHistory} from 'history';
import {Router} from 'react-router-dom';


const history = createBrowserHistory();


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
  return (
    <AppContext.Provider
      value={{
        routes
      }}
    >
      {/*<ThemeProvider theme={theme}>*/}
        {/*page*/}
      <Router history={history}>
        <Layout />
      </Router>
      {/*</ThemeProvider>*/}

      {/*
        <AppContext.Provider
             value={{
                 routes
             }}
         >
             <StylesProvider jss={jss} generateClassName={generateClassName}>
                 <Provider store={store}>
                     <Auth>
                         <Router history={history}>
                             <FuseAuthorization>
                                 <FuseTheme>
                                     <FuseLayout/>
                                 </FuseTheme>
                             </FuseAuthorization>
                         </Router>
                     </Auth>
                 </Provider>
             </StylesProvider>
         </AppContext.Provider>
      */}
    </AppContext.Provider>
  );
}

export default App;
