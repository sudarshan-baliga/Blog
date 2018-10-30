const initialState = {recentPosts: [] };


export default function (state = initialState, action) {
    switch (action.type) {
        case 'GET_RECENT_POSTS_SUCCESS':
            return action.payload;
        case 'GET_RECENT_POSTS_FAILURE':
            return state;
        default:
            return state;
    }
}