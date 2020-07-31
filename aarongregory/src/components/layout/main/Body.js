import React from 'react'
import ElephantLogo from '../../../images/elephant.png';

const Body = (props) => {
    return(
        <div style={mainSectionHeightAndWidth}>
            <div >
                <img src={ElephantLogo} style={elephantImageStyle} alt="Elephant logo" title="Credit for image: "></img>
                <div style={statementText}>Pause, think.</div>
            </div>
        </div>
    );
}

const mainSectionHeightAndWidth = { 
    height: 'calc(100% - 60px)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
};

const elephantImageStyle = {
    width: '30em'
}

const statementText = {
    textAlign: 'center',
    padding: '5px',
    marginTop: '2em'
}

export default Body;