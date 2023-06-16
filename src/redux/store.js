import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { todosReducers } from './reducers/todoReducers'
import { tabsReducer} from './reducers/tabsReducer'
const reducer = combineReducers({
    todos: todosReducers,
    currentTab: tabsReducer
})
const middleware = [thunk]
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store