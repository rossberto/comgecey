import React from 'react';
import {Redirect} from 'react-router-dom';

import {UsersAppConfig} from '../main/users/UsersAppConfig';
import {ConvocatoriesAppConfig} from '../main/convocatories/ConvocatoriesAppConfig';
import generateRoutesFromConfigs from './fuseRouting';

const routeConfigs = [
    UsersAppConfig,
    ConvocatoriesAppConfig
];


const routes = [
  ...generateRoutesFromConfigs(routeConfigs, ['Admin', 'Planner', 'Couple', 'Provider']),
  {
      path     : '/',
      exact    : true,
      component: () => <Redirect to="/users" />
  },
  {
      component: () => <Redirect to="/users"/>
  }
];

export default routes;
