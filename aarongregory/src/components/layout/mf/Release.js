import React from 'react';
import { Link } from 'react-router-dom';

const Release = (props) => {
    return(
        <Link to="#idHere">
            <div className="release-header-style">
                <div style={releaseStyle}>What's New {props.version}</div>
            </div>
        </Link>
        
    );
};

const releaseStyle = {
    padding: '10px 0',
    fontSize: '.8em'
}

export default Release;