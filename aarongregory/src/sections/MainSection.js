import React, { Fragment } from 'react';
import Header from '../components/layout/main/Header';
import Body from '../components/layout/main/Body';


const MainSection = (props) => {
    return(
        <React.Fragment>
            <div style={maxWidthAndHeight}>
                <Header />
                <Body />
            </div>
        </React.Fragment>
        
    );
};

const maxWidthAndHeight = {
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgb(248, 248, 248)'
}



export default MainSection;