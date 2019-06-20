import React from 'react';
import './jobApply.css';

const JobApply = (props) => {
    return(
        <div className="jobApply">
            <a className="url" target="_blank" href={props.url}> Apply </a>
        </div>
    )
}

export default JobApply;