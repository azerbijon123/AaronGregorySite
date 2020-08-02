import React from 'react';
import HomeAsiaBackgroundImage from '../../../images/asiaNewTest.jpg'
import {Link} from 'react-router-dom';

const HomeAsia = (props) => {
    return(
        <div style={homeAsiaBackground}>
            <div style={imageHolder}>

            </div>
            <div style={roadToAsia}>
                <div style={roadToAsiaTitle}>
                    <h1>The Road to Asia</h1>
                    <p><Link to="/mf">Click Here</Link> to read about my first trip to Laos.</p>
                </div>
            </div>
        </div>
    );
}

const homeAsiaBackground = {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
};

const imageHolder = {
    flex: '1',
    height: '100%',
    backgroundImage: `url(${HomeAsiaBackgroundImage})`,
    backgroundRepeat: 'no-repeat'
};

const roadToAsia = {
    display: 'flex',
    flex: '1',
    justifyContent: 'center',
    alignItems: 'center'
};

const roadToAsiaTitle = {
    textAlign: 'center'
};

export default HomeAsia;