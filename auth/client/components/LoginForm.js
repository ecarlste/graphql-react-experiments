import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import mutation from '../mutations/Login';
import AuthForm from './AuthForm';
import query from '../queries/CurrentUser';

class LoginForm extends Component {
  onSubmit = ({ email, password }) => {
    this.props.mutate({
      variables: {
        email,
        password
      },
      refetchQueries: [{ query }]
    });
  };

  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default graphql(mutation)(LoginForm);
