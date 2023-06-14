import React from 'react'
import { getAllToDos } from '../redux/actions'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SingleToDo from './SingleToDo'
const ToDo = () => {



    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos)

    useEffect(() => {
        // Khai hỏa 1 action sang reducer
        dispatch(getAllToDos())
    }, [dispatch])
    return (
        <article>
            <ul>
                {todos && todos.length > 0 && todos.map((item, index) => <SingleToDo key={item._id} item={item}/> )}
                {/* <li key={index}>{item.data}</li> */}
                
            </ul>
        </article>
    )
}

export default ToDo
