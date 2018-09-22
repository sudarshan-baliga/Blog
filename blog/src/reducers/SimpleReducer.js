export default (state = {'name':"sudarshan2"}, action) => {
    switch (action.type) {
        case 'TEST':
            return {
                name: action.name
            }
        default:
            return state;
    }
}