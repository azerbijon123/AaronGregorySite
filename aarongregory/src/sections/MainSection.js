import React, { Fragment } from 'react';
import Header from '../components/layout/main/Header';
import HomeTop from '../components/layout/main/HomeTop';
import HomeAsia from '../components/layout/main/HomeAsia';


const MainSection = (props) => {
    return(
        <React.Fragment>
            <div style={fragmentDefaultStyle}>
                <Header />
                <HomeTop />
            </div>
            <div style={fragmentDefaultStyle}>
                <HomeAsia />
            </div>
        </React.Fragment>
        
    );
};

const fragmentDefaultStyle = {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(248, 248, 248)'
}



export default MainSection;