import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import query from '../queries/CurrentUser';

class Header extends Component {
  renderButtons() {
    const { loading, user } = this.props.data;

    if (loading) {
      return <div />;
    }

    if (user) {
      return <div>Logout</div>;
    }

    return (
      <Fragment>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </Fragment>
    );
  }

  render() {
    return (
      <nav>
        <Link to="/" className="brand-logo left">
          Home
        </Link>
        <ul className="right">
          <div className="nav-wrapper">{this.renderButtons()}</div>
        </ul>
      </nav>
    );
  }
}

export default graphql(query)(Header);
