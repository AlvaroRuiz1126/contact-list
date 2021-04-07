import React from 'react';
import UserCreateScreen from '../pages/UserCreateScreen';
import UserEditScreen from '../pages/UserEditScreen';
import UsersListScreen from '../pages/UsersListScreen';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

const AppRouter = () => {
    return (
      <Router>
        <div className="content center all-view">
          <Switch>
            <Route exact path="/" component={UsersListScreen} />
            <Route exact path="/new" component={UserCreateScreen} />
            <Route exact path="/update" component={UserEditScreen} />

            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    );
};

export default AppRouter;
