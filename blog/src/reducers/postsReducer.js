const initialState = { userPosts: [], recentPosts: [] };

export default function (state = initialState, action) {
    switch (action.type) {
        case 'GET_ALL_USER_POSTS_SUCCESS':
            return action.payload;
        case 'GET_ALL_USER_POSTS_FAILURE':
            return state;
        default:
            return state;
    }
}