import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from '../pages/Main';
import Repositorio from '../pages/Repositorio';

function Routes() {
  return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route  path="/repositorio/:repositorio" component={Repositorio} />
        </Switch>
    </BrowserRouter>
  )
}

export default Routes;