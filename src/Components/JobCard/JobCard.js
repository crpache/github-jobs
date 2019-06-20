import React from 'react';
import './jobCard.css';

const JobCard = props => {
  return(
    <div className="jobCard">
      <img className="imageUrl" src={props.company_logo} alt=""/>
      <a className="companyUrl" target="_blank" href={props.company_url}> <span>Company </span> Site </a>
    </div>
  )
}

export default JobCard;