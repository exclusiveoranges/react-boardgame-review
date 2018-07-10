import React, { Component } from 'react';
import GameFilters from './GameFilters';
import GenreDropdown from '../components/GenreDropdown';
import GamesTable from '../components/GamesTable';
import GameForm from '../components/GameForm';

export default class BoardGameContainer extends Component {
  state = {
    games: [],
    genres: [],
    currentGenre: {
      id: "",
      name: "",
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/genres')
      .then( r=>r.json() )
      .then( data => this.setState({
        genres: data
      }, () => console.log(this.state.genres)))

      fetch('http://localhost:3000/boardgames')
        .then( r=>r.json() )
        .then( data => this.setState({
          games: data
        })
      )
  }


  genreFilter = (event) => {

    const findGenre = this.state.genres.find( genre => genre.id == event.target.value)

    this.setState({
      currentGenre: {
        id: findGenre.id,
        name: findGenre.name,
      }
    })

    const currentGenre = this.state.genres.find(genre => genre.id == event.target.value);
    this.setState({ currentGenre });

    // Option 1: match by name === value
    // const currentGenre = this.state.genres.find(genre => genre.name === event.target.value);
    // Option 2: change value to id in <option> and for controlled value in <select> and match by id === value
    //           Remember: The content of this attribute represents the value to be submitted with the form.
    //                     There's no rule about it having to match the name displayed.
    // const currentGenre = this.state.genres.find(genre => genre.id == event.target.value);
    // Option 3: pull id out using index + data attribute, then match on id
    // const id = event.target.options[event.target.selectedIndex].dataset.value;
    // const currentGenre = this.state.genres.find(genre => genre.id == id);
    // Option 4: same as option 3 but use getAttribute
    // const id = event.target.options[event.target.selectedIndex].getAttribute('data-value');
    // const currentGenre = this.state.genres.find(genre => genre.id == id);

    // this.setState({ currentGenre });
  }

  render() {
    return (
      <div className="board-game-container">
        <GameFilters
          genres={this.state.genres}
          currentGenre={this.state.currentGenre}
          handleGenreFilter={this.genreFilter}
        />
        <GameForm
          genres={this.state.genres}
          handleSubmit={this.handleSubmit}
        />
      <GamesTable games={this.state.games} />
      </div>
    )
  }
}
