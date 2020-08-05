import React from 'react';
import './MinestroneFeatures.css'
import FeatureContainer from './FeatureContainer';

const MinestroneFeatureHeader = (props) => {

    

    return(
        <div className="main-container">
            <header className="header-style header-style-custom">
                <div className="header-container">
                    <div className="header-left-container">
                        <div className="minestrone-header-text">Minestrone |</div>
                        <div className="whats-new">What's New</div>
                    </div>
                    <div className="header-menu-container">
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </header>
            
            <FeatureContainer />

        </div>
    );
}

export default MinestroneFeatureHeader;