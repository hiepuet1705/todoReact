import React from 'react'
import '../styles/SingleToDo.css'
const SingleToDo = ({ item }) => {

    return (
        <li className='task'>
            <span>{item.data}</span>
            <span className='icon'> <i className='fas fa-trash'></i></span>
            <span className='icon'> <i className='fas fa-pen'></i></span>
        </li>
    )
}

export default SingleToDo