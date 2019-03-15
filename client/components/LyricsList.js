import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricsList extends Component {
  onLike(id, likes) {
    const { mutate } = this.props;

    mutate({
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyrik: {
          id,
          __typename: 'LikeLyrik',
          likes: likes + 1
        }
      }
    });
  }

  renderLyrics() {
    return this.props.lyrics.map(({ id, content, likes }) => {
      return (
        <li className="collection-item" key={id}>
          {content}
          <div className="vote-box">
            <i className="material-icons" onClick={() => this.onLike(id, likes)}>
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
      content
      likes
    }
  }
`;

export default graphql(likeLyric)(LyricsList);
