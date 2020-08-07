import React, { useState } from 'react';
import { connect } from "react-redux";
import { addTodo } from '../redux/actions';

const AddTodo = (props) => {
    const [ input, setValue ] = useState('');

    const handleClick = () => {
        if (input) {
            props.addTodo(input);
            setValue('');
        }
    };

    return (
        <div>
            <input value={input} onChange={(e) => setValue(e.target.value)} />
            <button onClick={handleClick}>Add Todo</button>
        </div>    
    );
}

export default connect(
    null,
    { addTodo, },
)(AddTodo);