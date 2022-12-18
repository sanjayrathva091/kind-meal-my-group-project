import { auth } from '../../firebase-config';
import * as types from './authActionTypes';

export const initialUserState = {
    isAuth: auth.currentUser ? true : false,
    isLoading: false,
    isError: false,
    user: {},
    userType: "User",
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

            return {
                ...state,
                isAuth: true,
                isLoading: false,
                userType: payload
            }
        case types.POST_LOGIN_FAILURE:
            return {
                ...state,
                isError: true,
            }
        case types.POST_LOGOUT_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.POST_LOGOUT_SUCCESS:
            return {
                ...state,
                isAuth: false,
                isLoading: false,
            }
        case types.POST_LOGOUT_FAILURE:
            return {
                ...state,
                isError: true,
            }
        default:
            return state;
    }

}

export { AuthReducer };