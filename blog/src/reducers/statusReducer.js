var initialState = {sendPost: 0}; // 0 :normal 1: success 2: loading -1: failure

export default function(state = initialState, action){
    console.log(action)
    switch (action.type) {
        case 'SEND_POST_SUCCESS':
            return {sendPost: 2};
        case 'SEND_POST_FAILURE':
            return {...state, sendPost: -1};
        default:
            return state;
    }
}