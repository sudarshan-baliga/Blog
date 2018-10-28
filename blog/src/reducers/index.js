import { combineReducers } from 'redux';
import userData from './SigninReducer';
import posts from './postsReducer';
import currentPost from './currentPostReducer';
import recentPosts from './recentPostsReducer';
import currentProfile from './currentProfileReducer';
export default combineReducers({
   userData,
   posts,
   currentPost,
   recentPosts,
   currentProfile
});