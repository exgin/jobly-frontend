import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import Jobs from './Jobs';
import Profile from './Profile';
import Login from './Login';
import pageNotFound from './pageNotFound';
import Companies from './Companies';
import Company from './Company';

const Routes = ({ setToken }) => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route exact path='/login'>
              <Login setToken={setToken} />
            </Route>

            <Route exact path='/companies'>
              <Companies />
            </Route>
            <Route path='/companies/:handle'>
              <Company />
            </Route>

            <Route exact path='/jobs'>
              <Jobs />
            </Route>

            <Route exact path='/profile'>
              <Profile />
            </Route>

            <Route>
              <pageNotFound />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
