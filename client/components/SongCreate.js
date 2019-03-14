/* eslint-disable jsx-a11y/label-has-associated-control */
import gql from 'graphql-tag';
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import fetchSongs from '../queries/fetchSongs';

class SongCreate extends Component {
  state = { title: '' };

  onSubmit = event => {
    event.preventDefault();

    const { mutate } = this.props;
    const { title } = this.state;

    mutate({
      variables: {
        title
      },
      refetchQueries: [{ query: fetchSongs }]
    }).then(() => {
      hashHistory.push('/');
    });
  };

  render() {
    const { title, id } = this.state;

    return (
      <div>
        <Link to="/">Back</Link>
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
