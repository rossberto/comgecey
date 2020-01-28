import React from 'react';
import ComAppBar from './ComAppBar';
import Frame from './Frame';
import DocumentsUpload from '../documents/DocumentsUpload';
import UsersList from '../users/UsersList';
import UsersTable from '../users/UsersTable';
import Users from '../users/Users';
import Profile from '../users/Profile';

export default function Layout() {
  return (
    <div>
      <Frame>
        <Profile />
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