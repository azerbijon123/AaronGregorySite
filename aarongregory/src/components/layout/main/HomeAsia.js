import React from 'react';
import HomeAsiaBackgroundImage from '../../../images/asia.jpg'

const HomeAsia = (props) => {
    return(
        <div style={homeAsiaBackground}>
            <div style={imageHolder}>

            </div>
        </div>
    );
}

const homeAsiaBackground = {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'red'
}

const imageHolder = {
    height: '100%',
    backgroundImage: `url(${HomeAsiaBackgroundImage})`,
}

export default HomeAsia;