const initialState = { currentProfile : []};

export default function (state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case 'GET_PROFILE_SUCCESS':
            return action.payload;
        case 'GET_PROFILE_FAILURE':
            return state;
        default:
            return state;
    }
}