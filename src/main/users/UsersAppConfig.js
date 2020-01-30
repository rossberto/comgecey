import React from 'react';
import {Redirect} from 'react-router-dom';

export const UsersAppConfig = {
  routes: [
    {
      path: '/users',
      component: React.lazy(() => import('./Users'))
    },
    {
      path: '/user',
      component: () => <Redirect to="/users" />
    }
  ]
};
