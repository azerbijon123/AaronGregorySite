import React, { useEffect, useState } from 'react';
import './style/common/common.css'

const HomeSearch = (props) => {

    const[homeSearchBox, setHomeSearchBox] = useState(React.createRef());

    useEffect(() => {
        homeSearchBox.current.focus();
    });

    const searchTermFromList = (e) => {
        // for (var searchItem in props.searchItems)
        // {
        //     console.log(searchItem);
        // }
        props.searchItems.forEach(item => {
                    // if(item.term.startsWith(e.target.value.toLowerCase())){
                    //     console.log(item);
                    // }
                    console.log(item.term.startsWith(e.target.value.toLowerCase()));
                    //console.log(e.target.value.toLowerCase());
                }
            );
    };

    return(
        <div>
            <input onChange={ searchTermFromList } ref={homeSearchBox} style={ homeSearchStyle } className="homeSearchBox" type="text" placeholder="Welcome..."></input>
        </div>
    );
}

const homeSearchStyle = {
    height: '60px',
    backgroundColor: 'transparent',
    fontSize: '50px',
    border: 'none',
    color: '#fff',
    textAlign: 'center'
}

export default HomeSearch