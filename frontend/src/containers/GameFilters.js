import React from 'react';
import GenreDropdown from '../components/GenreDropdown';
import NameFilter from '../components/NameFilter';

const GameFilters = (props) => {
  return (
    <div className="filterForm">
      <GenreDropdown
        genres={props.genres}
        currentGenre={props.currentGenre}
        handleDropdown={props.handleGenreFilter}
      />
    <NameFilter handleChange={props.handleChange} nameValue={props.nameValue} handlefilterSubmit={props.handlefilterSubmit} />
    </div>
  )
}

export default GameFilters;
