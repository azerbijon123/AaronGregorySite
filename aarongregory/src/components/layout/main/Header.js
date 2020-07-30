import React from 'react';
import {BrowserRouter as Link} from 'react-router-dom';
import '../main/Header.css';



const Header = (props) => {
    return(
        <header className="header-style">
            <div className="header-container">
                <div className="header-left-container" style={headerLeftContainer}>Aaron</div>
                <div className="header-menu-container">
                    <ul>
                        <li><Link to="/mf">Home</Link></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Travel</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

// Style definitions inside of the component
const headerStyle = {
    display: 'flex',
    flexDirection: 'row',
    height: '60px',
};
const headerContainer = {
    width: '80%'
};
const headerLeftContainer = {
    textTransform: 'lowercase'
};
const headerMenuContainer = {

};

export default Header;