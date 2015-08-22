import React from 'react';
import {Route} from 'react-router';
import Main from 'components/main';
import Example from 'components/example';
import About from 'components/about';

const routes = (
  <Route handler={Main}>
    <Route name='example' handler={Example} />
    <Route name='about' handler={About} />
  </Route>
);

export default routes;
