import React, { Fragment } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from './Header';

const App = () => {
  return (
    <div>
      <HashRouter>
        <Fragment>
          <Header />
          <Route path="/" exact component={() => <div>funky body</div>} />
        </Fragment>
      </HashRouter>
    </div>
  );
};

export default App;
