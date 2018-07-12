import React, { Component } from 'react';
import GenreDropdown from './GenreDropdown';

export default class GameForm extends Component {
  state = {
    name: "",
    genre: {
      id: "",
      name: "",
    }
  }

  selectGenre = (event) => {
    const genre = this.props.genres.find(genre => genre.id == event.target.value);
    this.setState({ genre });
  }

  handleGameFormChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({
          name: this.state.name,
          genre: { id: this.state.genre.id, name: this.state.genre.name }
          })
    }

    fetch('http://localhost:3000/boardgames', config)
      .then(this.props.fetchGames())

    }


  render() {
    return (
      <div className="gameform">
        <form className="create" onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              onChange={this.handleGameFormChange}
              value={this.state.name}
              type="text"
              name="name"
              placeholder="Filter board games by name"
            />
          </label>
          <GenreDropdown
            genres={this.props.genres}
            currentGenre={this.state.genre}
            handleDropdown={this.selectGenre}
          />
          <input type="submit" value="Add Game" />
        </form>
      </div>
    )
  }
}
