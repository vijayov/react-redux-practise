import { combineReducers } from 'redux';
import postListreducers from './postListreducers';
import userListReducer from './userListReducer';

export default combineReducers({
    posts : postListreducers,
    users : userListReducer
})