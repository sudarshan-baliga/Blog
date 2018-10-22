const initialState = { auth: "False", data: "" };

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNIN_SUCCESS':
            return {
                auth: 'True',
                userData: action.payload.userData,
                jwt: action.payload.jwt
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