import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export class LyricCreate extends Component {
  state = { content: '' };

  onSubmit = event => {
    event.preventDefault();

    const { mutate, songId } = this.props;
    const { content } = this.state;

    mutate({
      variables: {
        content,
        songId
      }
    });

    this.setState({ content: '' });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Add a Lyric</label>
        <input
          value={this.state.content}
          onChange={event => this.setState({ content: event.target.value })}
        />
      </form>
    );
  }
}

const addLyricToSong = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        content
      }
    }
  }
`;

export default graphql(addLyricToSong)(LyricCreate);
