import gql from 'graphql-tag';
import React, { Component } from 'react';
import { graphql } from 'react-apollo';

class SongList extends Component {
  renderSongs() {
    const { data } = this.props;

    return data.songs.map(song => {
      return <li>{song.title}</li>;
    });
  }

  render() {
    const { data } = this.props;

    if (data.loading) {
      return <div>Loading...</div>;
    }
    return <div>{this.renderSongs()}</div>;
  }
}

const query = gql`
  {
    songs {
      title
    }
  }
`;

export default graphql(query)(SongList);
