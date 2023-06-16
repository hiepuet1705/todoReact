import * as actionTypes from '../actions/type'

export const tabsReducer = (state=actionTypes.ALL_TODOS,action) => {
    switch(action.type){
        case actionTypes.CHANGE_TABS:
            return action.selected
        default:
            return state;
    }
}