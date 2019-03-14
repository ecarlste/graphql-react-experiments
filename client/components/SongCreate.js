import React, { Component } from 'react';

export default class SongCreate extends Component {
  state = { title: '' };

  render() {
    const { title } = this.state;

    return (
      <div>
        <h3>Create a new song...</h3>
        <form>{title}</form>
      </div>
    );
  }
}
