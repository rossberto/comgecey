import React, {useContext, useState, useEffect} from 'react';
import AppContext from '../../AppContext';
import {renderRoutes} from 'react-router-config'

import Frame from './Frame';
import DocumentsUpload from '../documents/DocumentsUpload';
import Users from '../users/Users';
import Profile from '../users/Profile';
import Convocatory from '../convocatories/Convocatory';
import Convocatories from '../convocatories/Convocatories';

import spinner from './91.gif'

export default function Layout(props) {
  const appContext = useContext(AppContext);
  const {routes} = appContext;
/*
  const [ruta, setRuta] = useState(routes);

  useEffect(() => {
    console.log(routes);
    setRuta(routes);
  });
*/
  return (
    <div>
      <Frame>
        <React.Suspense
          fallback = <div borderTop="16px solid blue"
                      borderBottom="16px solid blue"> </div>
        >
          {renderRoutes(routes)}
        </React.Suspense>
        {/*<Convocatories />*/}
      </Frame>
    </div>

  );
}

/*
  <div id="fuse-layout" className={clsx(classes.root, config.mode, 'scroll-' + config.scroll)}>
        {config.leftSidePanel.display && (
            <LeftSideLayout1/>
        )}

        <div className="flex flex-1 flex-col overflow-hidden relative">

            {config.toolbar.display && config.toolbar.position === 'above' && (
                <ToolbarLayout1/>
            )}

            <div className={classes.wrapper}>

                {config.navbar.display && config.navbar.position === 'left' && (
                    <NavbarWrapperLayout1/>
                )}

                <div className={classes.contentWrapper}>
                    {config.toolbar.display && config.toolbar.position === 'below' && config.toolbar.style === 'fixed' && (
                        <ToolbarLayout1/>
                    )}

                    <FuseScrollbars className={classes.content} scrollToTopOnRouteChange>
                        {config.toolbar.display && config.toolbar.position === 'below' && config.toolbar.style !== 'fixed' && (
                            <ToolbarLayout1/>
                        )}

                        <FuseDialog/>

                        <FuseSuspense>
                            {renderRoutes(routes)}
                        </FuseSuspense>

                        {props.children}

                        {config.footer.display && config.footer.position === 'below' && config.footer.style !== 'fixed' && (
                            <FooterLayout1/>
                        )}
                    </FuseScrollbars>

                    {config.footer.display && config.footer.position === 'below' && config.footer.style === 'fixed' && (
                        <FooterLayout1/>
                    )}

                </div>

                {config.navbar.display && config.navbar.position === 'right' && (
                    <NavbarWrapperLayout1/>
                )}
            </div>

            {config.footer.display && config.footer.position === 'above' && (
                <FooterLayout1/>
            )}
        </div>

        <FuseMessage/>
    </div>
}*/
