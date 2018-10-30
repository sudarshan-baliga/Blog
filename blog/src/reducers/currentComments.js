var initialState = {};

export default function(state = initialState, action){
    console.log(state);
    switch (action.type) {
        case 'GET_ALL_COMMENTS_SUCCESS':
            return action.payload;
        case 'GET_ALL_COMMENTS_FAILURE':
            return state;
        case 'WRITE_COMMENT_SUCCESS':
            let temp = state.userPosts.slice();
            console.log(temp.push(action.payload));
            return {userPosts:temp};
        default:
            return state;
    }
}