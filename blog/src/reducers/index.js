import { combineReducers } from 'redux';
import userData from './SigninReducer';
import posts from './postsReducer';

export default combineReducers({
   userData,
   posts
});