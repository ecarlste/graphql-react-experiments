import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import fetchSong from '../queries/fetchSong';

class LyricCreate extends Component {
  state = { content: '' };

  onSubmit = event => {
    event.preventDefault();

    const { mutate } = this.props;
    const { content } = this.state;

    mutate({
      variables: {
        content,
        songId: this.props.songId
      },
      refetchQueries: [{ query: fetchSong, variables: { id: this.props.songId } }]
    });
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

const mutate = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
      }
    }
  }
`;

export default graphql(mutate)(LyricCreate);
