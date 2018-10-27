var initialState = {};

export default function(state = initialState, action){
    console.log(action);
    switch (action.type) {
        case 'GET_POST_SUCCESS':
            return action.payload;
        case 'GET_POST_FAILURE':
            return initialState;
        default:
            return state;
    }
}