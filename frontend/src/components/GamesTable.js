import React from 'react';
import Game from './Game'

const GamesTable = (props) => {

  const mapGames = () => {
  return props.games.map( game => {
    return <Game game={game} key={game.id} />
    })
  }


  return (
    <table className="games">
      <tbody>
        <tr>
          <th>
            <h3 className="">Name</h3>
          </th>
          <th>
            <h3 className="">Genre</h3>
          </th>
        </tr>
      </tbody>
      {mapGames()}
    </table>

  )
}

export default GamesTable;
