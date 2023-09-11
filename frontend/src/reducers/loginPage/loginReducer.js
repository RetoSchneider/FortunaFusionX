const initialState = {
    user: null,
    isAuthenticated: false
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true
            };
        case 'LOGOUT_USER':
            return initialState;
        default:
            return state;
    }
};

export default loginReducer;
