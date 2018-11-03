const initialState = { userPosts: []};

export default function (state = initialState, action) {
    console.log(action.payload, state.userPosts);
    switch (action.type) {
        case 'GET_ALL_USER_POSTS_SUCCESS':
            return action.payload;
        case 'GET_ALL_USER_POSTS_FAILURE':
            return state;
        case 'DELETE_POST_SUCCESS':
            var posts = state.userPosts.slice();
            for(var i = 0; i < posts.length; i++)
                if(posts[i].pid == action.payload.pid)
                    posts.splice(i);
            return {userPosts:posts};
        default:
            return state;
    }
}