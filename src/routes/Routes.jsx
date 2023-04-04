import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Projects from '../pages/Projetos/Projetos';

function Routes() {
  return (
  <Switch>
    <Route path="/" component={ Home } exact />
    <Route path="/projects" component={ Projects } />
  </Switch>
  );
}

export default Routes;