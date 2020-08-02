import React, { Fragment } from 'react';
import Header from '../components/layout/main/Header';
import HomeTop from '../components/layout/main/HomeTop';
import HomeAsia from '../components/layout/main/HomeAsia';


const MainSection = (props) => {
    return(
        <React.Fragment>
            <div className="fragment-default-style">
                <Header />
                <HomeTop />
            </div>
            <div className="fragment-default-style">
                <HomeAsia />
            </div>
        </React.Fragment>
        
    );
};

export default MainSection;