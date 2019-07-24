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
import SignUp from '../components/Auth/SignUp/SignUp';
import MyLists from '../components/MyLists/MyLists';
import Account from '../components/Account/Account';
import ShoppingList from '../components/MyLists/ShoppingList/ShoppingList';
import CreateList from '../components/MyLists/CreateList/CreateList';

const App = () => (
  <div>
    <Navbar />
    <div>
      <Switch>
        <Route exact path={ROUTES.LANDING} component={Landing} />
        <Route exact path={ROUTES.LOGIN} component={Login} />
        <Route exact path={ROUTES.ABOUT} component={About} />
        <Route exact path={ROUTES.SIGNUP} component={SignUp} />
        <Route exact path={ROUTES.MYLISTS} component={MyLists} />
        <Route exact path={ROUTES.LIST} component={ShoppingList} />
        <Route exact path={ROUTES.CREATELIST} component={CreateList} />

        <Route exact path={ROUTES.ACCOUNT} component={Account} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </div>
  </div>
);

export default withStyles(appStyles)(App);
