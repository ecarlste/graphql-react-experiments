/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';

export default class SongCreate extends Component {
  state = { title: '' };

  onSubmit = event => {
    event.preventDefault();
  };

  render() {
    const { title, id } = this.state;

    return (
      <div>
        <h3>Create a new song...</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title:</label>
          <input onChange={event => this.setState({ title: event.target.value })} value={title} />
        </form>
      </div>
    );
  }
}
