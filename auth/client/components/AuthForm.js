/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';

class AuthForm extends Component {
  state = { email: '', password: '' };

  onSubmit = event => {
    event.preventDefault();

    const { email, password } = this.state;

    this.props.onSubmit({ email, password });
  };

  render() {
    return (
      <div className="row">
        <form className="col s6" onSubmit={this.onSubmit}>
          <div>
            <label className="input-field">Email</label>
            <input
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          <div>
            <label className="input-field">Password</label>
            <input
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
