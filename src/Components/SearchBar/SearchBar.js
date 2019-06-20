import React from 'react';
import './searchBar.css';

const SearchBar = props => {

  const cleanInput = e => {
    if(e.target.value !== ''){
      switch (e.target.name) {
        case "location":
          props.setLocation('')
        break;
        case "description":
          props.setDescription('')
        break;
        default:
        break;
      }
    }
  }

  return (
      <div className="searchBar">
        <input
          className="inputField"
          name="location"
          type="text"
          value={props.search.location}
          onClick={cleanInput}
          onChange={e => props.setLocation(e.target.value)}
          placeholder="Location"
        />
        <input
          className="inputField"
          name="description"
          type="text"
          value={props.search.description}
          onClick={cleanInput}
          onChange={e => props.setDescription(e.target.value)}
          placeholder="Job Description"
        />
        <input
          className="inputField"
          name="interestedTerm"
          type="text"
          value={props.search.interestedTerm}
          onClick={cleanInput}
          onChange={e => props.setInterestedTerm(e.target.value)}
          placeholder="Interested Term"
        />
        <label className="labelField">
          Full Time
          <input
            name="isFullTime"
            type="checkbox"
            value={props.search.fullTime}
            onSubmit={e => props.setFullTime(e.target.checked)}
          /> 
        </label>
        <input
          className="searchButton"
          name="submit"
          type="submit"
          value="Search"
          onClick={() => props.searchRequest(props.search)}
        />
      </div>
  )
}

export default SearchBar;
