import React, { Component } from 'react';

const NameFilter = (props) => {
  return (
    <div className="filter">
      <form className="search" onSubmit={props.handlefilterSubmit}>
        <label>
          Name Filter:
          <input
            onChange={props.handleChange}
            type="text"
            value={props.nameValue}
            name="filter"
            placeholder="Filter board games by name"
          />
        </label>
        <input type="submit" value="Filter" />
      </form>
    </div>
  )
}

export default NameFilter;
