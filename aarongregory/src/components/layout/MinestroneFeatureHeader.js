import React from 'react';
import './MinestroneFeatures.css'

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
            
            <div className="body-main">
                <div className="whats-new-panel">
                    What's new
                </div>
                <div className="whats-new-details-panel">
                    Whats new details panel
                </div>
            </div>

        </div>
    );
}

export default MinestroneFeatureHeader;