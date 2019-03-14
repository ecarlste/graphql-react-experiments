/* eslint-disable jsx-a11y/label-has-associated-control */
import gql from 'graphql-tag';
import React, { Component } from 'react';
import { graphql } from 'react-apollo';

class SongCreate extends Component {
  state = { title: '' };

  onSubmit = event => {
    event.preventDefault();

    const { mutate } = this.props;
    const { title } = this.state;

    mutate({
      variables: {
        title
      }
    });
  };

  render() {
    const { title, id } = this.state;

    return (
      <div>
        <h3>Create a new song...</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title:</label>
          <input onChange={event => this.setState({ title: event.target.value })} value={title} />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
