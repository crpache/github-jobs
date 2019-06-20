import React from 'react';
import JobRow from '../JobRow/JobRow';
import './jobList.css';

const JobList = props =>{
  let noResultsMessage;
  let loadingSpinner;
  let results;

  if(props.type === "results" && props.jobs.length === 0){
    noResultsMessage = (
      <p className="no-results">No results found :(</p>
    )
  }

  if(props.isLoading){
    loadingSpinner = (
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    )
    results = null;
    noResultsMessage = null;
  } else {
    results = props.jobs.map(job =>{
      return <JobRow
        key={job.id}
        job={job}
        selectJob={props.selectJob}
        addFavoriteJob={() => props.addFavoriteJob(job.id)}
        removeFavoriteJob={() => props.removeFavoriteJob(job.id)}
        interestedTerm={props.interestedTerm}
      />
    })
  }

  return(
    <div className="JobList">
      {noResultsMessage}
      {loadingSpinner}
      {results}
    </div>
  )
}

export default JobList;
