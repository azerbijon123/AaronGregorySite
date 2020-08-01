import React from 'react'
import ElephantLogo from '../../../images/elephant.png';

const HomeTop = (props) => {
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
    //height: 'calc(100% - 60px)',
    //flex: '1 100',
    width: '100%',
    height: '100%',
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

export default HomeTop;