import React from 'react';
import { Route, Switch } from 'react-router-dom';
import appStyles from './appStyles';
import { withStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navigation/Navbar/Navbar';
import * as ROUTES from '../constants/routes';
import Landing from '../components/Landing/Landing';
import About from '../components/About/About';
import Login from '../components/Auth/Login/Login';
import NotFound from '../components/NotFound/NotFound';

const App = () => (
  <div>
    <Navbar />
    <div>
      <Switch>
        <Route exact path={ROUTES.LANDING} component={Landing} />
        <Route exact path={ROUTES.LOGIN} component={Login} />
        <Route exact path={ROUTES.ABOUT} component={About} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </div>
  </div>
);

export default withStyles(appStyles)(App);
