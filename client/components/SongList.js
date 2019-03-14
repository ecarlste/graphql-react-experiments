import gql from 'graphql-tag';
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

class SongList extends Component {
  renderSongs() {
    const { data } = this.props;

    return data.songs.map(song => {
      return <li key={song.id}>{song.title}</li>;
    });
  }

  render() {
    const { data } = this.props;

    if (data.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <ul className="collection">{this.renderSongs()}</ul>
        <Link to="/songs/create" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
