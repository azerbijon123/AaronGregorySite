import React from 'react';
import './MinestroneFeatures.css'

const MinestroneFeatureHeader = (props) => {
    return(
        <header className="header-style">
            <div className="header-container">
                <div className="header-left-container">
                    <div className="minestrone-header-text">Minestrone</div>
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
    );
}

export default MinestroneFeatureHeader;