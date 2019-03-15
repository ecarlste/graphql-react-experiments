import ApolloClient from 'apollo-client';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import { hashHistory, IndexRoute, Route, Router } from 'react-router';
import App from './components/App';
import SongCreate from './components/SongCreate';
import SongDetails from './components/SongDetails';
import SongList from './components/SongList';
import './style/style.css';

const client = new ApolloClient({ dataIdFromObject: o => o.id });

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
          <Route path="songs/create" component={SongCreate} />
          <Route path="songs/:id" component={SongDetails} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
