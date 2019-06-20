import React from 'react';

//Components
import JobCard from '../JobCard/JobCard';
import JobApply from '../JobApply/JobApply';

//styles
import './jobDetails.css';

const JobDetails = props => {
  return (
    <div className="jobContent">
      <i class="material-icons detail-icon" onClick={props.unselectJob}>close</i>
      <div className = "jobDetails">
        <h2 >{props.job.title}</h2>
        <p>{props.job.type} - {props.job.location}</p>
        <p dangerouslySetInnerHTML={{ __html: props.job.description }}></p>
      </div>
      <div className="jobSubdetail">
        <JobCard
          company = {props.job.company}
          company_logo = {props.job.company_logo}
          company_url = {props.job.company_url}
        />
        <JobApply 
          company_url = {props.job.company_url}
          how_to_apply = {props.job.how_to_apply}
          url = {props.job.url}
        />
      </div>
    </div>
  )
}

export default JobDetails;
