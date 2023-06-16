import React from 'react'
import '../styles/SingleToDo.css'
import { toogleToDo,updateTodo,deleteTodo } from '../redux/actions'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

const SingleToDo = ({ item }) => {

    const dispatch = useDispatch();
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(item.data)

    const handleClicked = (event) => {
        dispatch(toogleToDo(item._id))
    }
    const onFormSubmit = (e) => {
            e.preventDefault();
            setEditing(prevState => !prevState)
            dispatch(updateTodo(item._id,text))
    }

    return (
        <li className='task'
            onClick={(event) => {
                handleClicked(event)
            }
            }
            style={{
                textDecoration: item.done ? 'line-through' : '',
                color: item.done ? '#bdc3c7' : '#34495e'
            }}
        >
            <span style={{ display: editing ? 'none' : '' }}>{item.data}</span>


            <form

                style={{ display: editing ? 'inline' : 'none' }}
                onSubmit={(e)=> onFormSubmit(e) }
            >

                <input
                    type='text'
                    value={text}
                    className="edit-todo"

                    onChange={(e) => setText(e.target.value)}
                />

            </form>

            <span className='icon trash' onClick={(e)=> {
                dispatch(deleteTodo(item._id))
                e.stopPropagation();
            }}>
                <i className='fas fa-trash'></i>
            </span>
            <span className='icon pen' onClick={(e) => {
                setEditing(prevState => !prevState)
                e.stopPropagation();
                console.log('prevent')
            }} >
                <i className='fas fa-pen'></i>
            </span>
        </li>
    )
}

export default SingleToDo