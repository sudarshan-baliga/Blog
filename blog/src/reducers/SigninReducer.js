const initialState = { auth: "False", data: "" };

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNIN_SUCCESS':
            return {
                auth: 'True',
                data: action.payload
            };
        case 'SIGNIN_FAILURE':
            return state;
        case 'SIGNOUT':
            console.log(action);
            return initialState;
        default:
            return state;
    }
}