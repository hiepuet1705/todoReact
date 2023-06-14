import axios from 'axios'
import { ADDNEW_TODO,GETALL_TODO } from './type'
const API_URL ='http://localhost:8000'
export const addNewToDo = (data) => async(dispatch)=>{
    try {
       const res = await axios.post(`${API_URL}/todos`,{data})
       dispatch({type:ADDNEW_TODO,payload:res.data})
    } catch (error) {
        console.log('Error while calling addNewToDo API',error.message)
    }   
}
export const getAllToDos = () => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos`)
        // phóng sang reducer
        dispatch({type:GETALL_TODO,payload:res.data})
     } catch (error) {
         console.log('Error while calling getAllToDos API',error.message)
     }   
} 
