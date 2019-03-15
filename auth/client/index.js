import React from "react";
import ReactDOM from "react-dom";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Router, hashHistory, Route, IndexRoute } from "react-router";

const cache = new InMemoryCache({
  dataIdFromObject: object => object.id || null
});

const client = new ApolloClient({ cache });

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <div>Auth Starter</div>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
