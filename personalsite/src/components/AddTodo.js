import React, { Component, useState } from 'react'

const AddTodo = props => {

    const [title, setTitle] = useState('');

    const onChange = (e) => {
        setTitle(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        props.addTodo(title);
        setTitle('');
    };

    return(
        <form onSubmit={onSubmit} style={{ display: 'flex' }}>
            <input 
                type="text" 
                name="title" 
                placeholder="Add Todo" 
                style={{ flex: '10', padding: '5px' }}
                onChange={onChange}
                value={title}
            />
            <input 
                type="submit" 
                value="Submit"
                className="btn"
                style={{flex: '1'}} 
            />
        </form>
    );
}

export default AddTodo
