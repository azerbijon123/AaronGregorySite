import React, { useEffect, useState } from 'react';
import './style/common/common.css'

const HomeSearch = (props) => {

    const[homeSearchBox, setHomeSearchBox] = useState(React.createRef());
    const[autoComplete, setAutoComplete] = useState(React.createRef());
    const[autoCompleteValue, setAutoCompleteValue] = useState("");

    useEffect(() => {
        homeSearchBox.current.focus();
    });

    const searchTermFromList = (e) => {
        if (e.target.value === ""){
            setAutoCompleteValue("");
            autoComplete.current.value = "";
            return;
        }

            
        console.log(e.target.value);
        
        props.searchItems.forEach(item => {
                    if (item.term.startsWith(e.target.value.toLowerCase())) {
                        console.log(item.term);
                        setAutoCompleteValue(item.term);
                        autoComplete.current.value = item.term;
                    }
                });
    
        
    };

    const onInputKeyPress = (e) => {
        if (e.key === "Enter") {
            
        }
    };

    return(
        <div>
            <input 
                onChange={ searchTermFromList }
                onKeyPress={ onInputKeyPress }
                ref={ homeSearchBox } 
                style={ homeSearchStyle } 
                className="homeSearchBox" 
                type="text" 
                placeholder="Welcome..." 
            />

            <input ref={ autoComplete }></input>
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