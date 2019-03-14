import React, { Component } from 'react';

export class LyricsList extends Component {
  renderLyrics() {
    return this.props.lyrics.map(({ id, content }) => {
      return (
        <li className="collection-item" key={id}>
          {content}
        </li>
      );
    });
  }

  render() {
    return <div className="collection">{this.renderLyrics()}</div>;
  }
}

export default LyricsList;
