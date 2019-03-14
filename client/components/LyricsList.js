import React, { Component } from 'react';

export class LyricsList extends Component {
  onLike = id => {
    console.log('id', id);
  };

  renderLyrics() {
    return this.props.lyrics.map(({ id, content }) => {
      return (
        <li className="collection-item" key={id}>
          {content}
          <i className="material-icons" onClick={() => this.onLike(id)}>
            thumb_up
          </i>
        </li>
      );
    });
  }

  render() {
    return <div className="collection">{this.renderLyrics()}</div>;
  }
}

export default LyricsList;
