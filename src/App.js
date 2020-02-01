import React, {useState, useContext} from 'react';
import AppContext from './AppContext';
import routes from './configs/routesConfig';
import {Router} from 'react-router-dom';
import {renderRoutes} from 'react-router-config'
import Pages from './main/pages/Pages';

import Layout from './main/layout/Layout';
import Button from '@material-ui/core/Button';

import Blog from './main/blog/Blog';

import history from './main/history';

function StartPage() {
  const appContext = useContext(AppContext);

  return (
    <React.Fragment>
      {appContext.auth && <Layout />}
      {!appContext.auth && <Pages />}
    </React.Fragment>
  );
}

function App() {
  const [auth, setAuth] = useState(false);

  function goDashboard(val) {
    setAuth(val);
    if (val==true) {
      history.push('/users/1');
    } else {
      history.push('/signin')
    }
  }
  return (
    <AppContext.Provider
      value={{
        routes,
        auth,
        goDashboard
      }}
    >
      {/*<ThemeProvider theme={theme}>*/}
        {/*page*/}
      <Router history={history}>
        {/*<Blog />*/}
        {<StartPage />}
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
