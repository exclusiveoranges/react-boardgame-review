import React, { Component } from 'react';
import GameFilters from './GameFilters';
import GenreDropdown from '../components/GenreDropdown';
import GamesTable from '../components/GamesTable';
import GameForm from '../components/GameForm';

export default class BoardGameContainer extends Component {
  state = {
    games: [],
    filteredGames: [],
    genres: [],
    currentGenre: {
      id: "",
      name: "",
    },
    nameValue: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/genres')
      .then( r=>r.json() )
      .then( data => this.setState({
        genres: data
      })
    )
    this.fetchGames()
}

  fetchGames = () => {
    fetch('http://localhost:3000/boardgames')
      .then( r=>r.json() )
      .then( data => this.setState({
        games: data,
        filteredGames: data
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
    }, this.filterGames)


  }

  handleChange = (event) => {
    this.setState({
      nameValue: event.target.value
    })
  }

  filterGames = () => {
    // const filteredGames = this.state.games.filter( game => game.genre.name.includes(event.target.filter.value))
    //   this.setState({
    //     filteredGames
    //   })
  }

  handlefilterSubmit = (event) => {
    event.preventDefault()

    const filteredGames = this.state.games.filter( game => {
      console.log(game.name, event.target.filter.value)
      // console.log(game.genre.name.toLowerCase().includes(event.target.filter.value.toLowerCase()))
      return game.name.toLowerCase().includes(event.target.filter.value.toLowerCase())})

      this.setState({
        filteredGames
      })
  }



  render() {
    return (
      <div className="board-game-container">
        <GameFilters
          genres={this.state.genres}
          currentGenre={this.state.currentGenre}
          handleGenreFilter={this.genreFilter}
          handleChange={this.handleChange}
          nameValue={this.state.nameValue}
          handlefilterSubmit={this.handlefilterSubmit}
        />
        <GameForm
          fetchGames={this.fetchGames}
          genres={this.state.genres}
          handleSubmit={this.handleSubmit}
        />
      <GamesTable games={this.state.filteredGames} />
      </div>
    )
  }
}
