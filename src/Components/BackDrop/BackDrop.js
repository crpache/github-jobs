import React from 'react';

import './BackDrop.css';

const backdrop = props => <div className="backdrop" onClick={props.onClick}></div>;

export default backdrop;