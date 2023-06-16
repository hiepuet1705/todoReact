import React from 'react'
import { deleteTodo, getAllToDos } from '../redux/actions'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SingleToDo from './SingleToDo'
import { ALL_TODOS, DONE_TODO, ACTIVE_TODO } from '../redux/actions/type'


import Tabs from './Tabs'
const ToDo = () => {



    const dispatch = useDispatch();

    // chon ra todos cua state redux store
    const todos = useSelector(state => state.todos)
    const currentTab = useSelector(state => state.currentTab)
    const removeDoneTodo = () => {
            todos.forEach(todo => {
                if(todo.done){
                    dispatch(deleteTodo(todo._id))
                }
            })
    }
    useEffect(() => {
        // Khai hỏa 1 action sang reducer
        dispatch(getAllToDos())
    }, [dispatch])

    const getTodos = () => {
        if (currentTab === ALL_TODOS) {
            return todos
        } else if (currentTab === DONE_TODO) {
            return todos.filter(todo => todo.done)
        } else if (currentTab === ACTIVE_TODO) {
            return todos.filter(todo => !todo.done)
        }
    }
    return (
        <article>
            <div>
                <Tabs currentTab={currentTab} />
                {todos.some(todo => todo.done) ? <button
                    className='remove-btn'
                    onClick={()=>removeDoneTodo()}
                    >Remove Done Todos</button> : null}
            </div>
            <ul>
                {getTodos() && getTodos().length > 0 && getTodos().map((item, index) => <SingleToDo key={item._id} item={item} />)}
                {/* <li key={index}>{item.data}</li> */}

            </ul>
        </article>
    )
}

export default ToDo
