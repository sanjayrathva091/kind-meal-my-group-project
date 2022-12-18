
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

import * as types from "./authActionTypes";

const postRegisterRequest = () => {
    return {
        type: types.POST_REGISTER_REQUEST
    }
};

const postRegisterSuccess = (payload) => {
    return {
        type: types.POST_REGISTER_SUCCESS,
        payload
    }
}

const postRegisterFailure = () => {
    return {
        type: types.POST_REGISTER_FAILURE
    }
}

// const register = async (auth, email, password) => {
//     try {
//         const response = await createUserWithEmailAndPassword(auth, email, password);

//         alert(`${response.user?.email}`);
//         sessionStorage.setItem(
//             "Auth Token",
//             response._tokenResponse.refreshToken
//         );

//     } catch (error) {
//         console.log('Failed:', error.message)
//     }
// }

const register = (auth, email, password, user) => (dispatch) => {
    return createUserWithEmailAndPassword(auth, email, password).then((response) => {

        dispatch(postRegisterSuccess(user));
    }).catch((error) => { console.log('Registration Failed: ', error) })
}

const login = (auth, email, password, userType) => (dispatch) => {
    dispatch({ type: types.POST_LOGIN_REQUEST });
    return signInWithEmailAndPassword(auth, email, password).then((response) => {

        dispatch({ type: types.POST_LOGIN_SUCCESS, payload: userType });
        return 'Login Successful';
    }).catch((error) => { console.log('Login Failed: ', error) });
}

const logout = (Auth) => (dispatch) => {
    dispatch({ type: types.POST_LOGOUT_REQUEST });
    return signOut(Auth)
        .then((response) => { dispatch({ type: types.POST_LOGOUT_SUCCESS }) })
        .catch((error) => { console.log('Log out Failed', error) });
}

export {
    login,
    logout,
    postRegisterFailure,
    postRegisterRequest,
    postRegisterSuccess,
    register
}