import axios from 'axios'
import { ADDNEW_TODO, GETALL_TODO, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO, CHANGE_TABS } from './type'
const API_URL = 'http://localhost:8000'
export const addNewToDo = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${API_URL}/todos`, { data })
        dispatch({ type: ADDNEW_TODO, payload: res.data })
    } catch (error) {
        console.log('Error while calling addNewToDo API', error.message)
    }
}
export const getAllToDos = () => async (dispatch) => {
    try {
        console.log(dispatch)
        const res = await axios.get(`${API_URL}/todos`)
        // phóng sang reducer
        dispatch({ type: GETALL_TODO, payload: res.data })
    } catch (error) {
        console.log('Error while calling getAllToDos API', error.message)
    }
}
export const toogleToDo = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos/${id}`)
        // phóng sang reducer
        dispatch({ type: TOGGLE_TODO, payload: res.data })
    } catch (error) {
        console.log('Error while calling toggle API', error.message)
    }
}
export const updateTodo = (id, data) => async (dispatch) => {
    try {
        // goi API
        const res = await axios.put(`${API_URL}/todos/${id}`, { data })
        // phóng sang reducer (de luu o redux)
        dispatch({ type: UPDATE_TODO, payload: res.data })
    } catch (error) {
        console.log('Error while calling update API', error.message)
    }
}
export const deleteTodo = (id) => async (dispatch) => {
    try {
        // goi API
        const res = await axios.delete(`${API_URL}/todos/${id}`)
        // phóng sang reducer (de luu o redux)
        dispatch({ type: DELETE_TODO, payload: res.data })
    } catch (error) {
        console.log('Error while calling update API', error.message)
    }
}
export const changeTabs = (tab) => async (dispatch) => {

    dispatch({ type: CHANGE_TABS, selected: tab })

}

