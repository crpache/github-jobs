import React from 'react';
import './jobRow.css';

const jobRow = props => {
    let favIcon = 'favorite_border';
    let componentClass = "jobRow";

    if(props.job.isFav === true) {
      favIcon = 'favorite';
    }

    if(props.job.description.toUpperCase().includes(props.interestedTerm) 
      && props.interestedTerm !== ''){
      componentClass += " jobInterestedTerm";
    }

    const selectJob = job => {
      props.selectJob(job)
      console.log(job.description.includes("for"));
    }

    const toggleFavoriteHandler = () => {
      if (!props.job.isFav) {
        props.addFavoriteJob()
      } else {
        props.removeFavoriteJob()
      }
    }
  
    return(
      <div className={componentClass}>
        <p className="pLink jobTitle"
          onClick={() => selectJob(props.job)}
          href="">
          {props.job.title}
        </p>
        <h4 className = "location">{props.job.location}</h4>
        <p className = "company">{props.job.company} - {props.job.type}</p>
        <i className ="material-icons" onClick={toggleFavoriteHandler}> {favIcon} </i>
      </div>
    )
}

export default jobRow;
