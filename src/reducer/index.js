import toDoReducer from './todoReducers';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    toDoReducer, 
})

export default rootReducer;