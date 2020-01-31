import React from 'react';
import {Redirect} from 'react-router-dom';

export const SignInAppConfig = {
  settings: {
      layout: {
          config: {}
      }
  },
  routes: [
    {
      path: '/signin',
      component: React.lazy(() => import('./SignIn'))
    }
  ]
};
