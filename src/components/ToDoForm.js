import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNewToDo } from '../redux/actions';
const ToDoForm = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch();
    const onFormSubmit = (e) => {
        e.preventDefault();
        if(!text){
            alert('Missing information')
            return;
        }
        dispatch(addNewToDo(text))
        setText('');
    }
    const onChangeInput = (event) => {
        setText(event.target.value)
    }
    return (
        <form className='form-todo' onSubmit={(e) => onFormSubmit(e)}>
            <input type='text'
                value={text}
                className='input'
                placeholder='Enter new todo...'
                onChange={(event) => onChangeInput(event)}
            />
        </form>
    )
}

export default ToDoForm