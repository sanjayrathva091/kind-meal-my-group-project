
import * as types from './authActionTypes';

export const initialUserState = {
    isAuth: false,
    isLoading: false,
    isError: false,
    user: {}
}

const AuthReducer = (state = initialUserState, actions) => {
    const { type, payload } = actions;

    switch (type) {
        case types.POST_REGISTER_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.POST_REGISTER_SUCCESS:
            console.log('Ath', payload);
            return {
                ...state,
                isLoading: false,
                user: payload
            }
        case types.POST_REGISTER_FAILURE:
            return {
                ...state,
                isError: true
            }
        case types.POST_LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.POST_LOGIN_SUCCESS:
            console.log('logIn', payload);
            return {
                ...state,
                isLoading: false,
            }
        case types.POST_LOGIN_FAILURE:
            return {
                ...state,
                isError: true,
            }
        default:
            return state;
    }

}

export { AuthReducer };