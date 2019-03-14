import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

export class LyricsList extends Component {
  onLike = id => {
    const { mutate } = this.props;

    mutate({ variables: { id } });
  };

  renderLyrics() {
    return this.props.lyrics.map(({ id, content, likes }) => {
      return (
        <li className="collection-item" key={id}>
          {content}
          <div className="vote-box">
            <i className="material-icons" onClick={() => this.onLike(id)}>
              thumb_up
            </i>
            {likes}
          </div>
        </li>
      );
    });
  }

  render() {
    return <div className="collection">{this.renderLyrics()}</div>;
  }
}

const likeLyric = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export default graphql(likeLyric)(LyricsList);
