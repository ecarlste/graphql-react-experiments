import React, { Fragment } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import LoginForm from './LoginForm';

const App = () => {
  return (
    <div className="container">
      <HashRouter>
        <Fragment>
          <Header />
          <Switch>
            <Route path="/" exact component={() => <div>funky body</div>} />
            <Route path="/login" component={LoginForm} />
          </Switch>
        </Fragment>
      </HashRouter>
    </div>
  );
};

export default App;
