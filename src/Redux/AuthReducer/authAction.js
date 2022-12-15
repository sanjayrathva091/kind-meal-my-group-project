
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
        console.log(response, 'and', user);
        dispatch(postRegisterSuccess(user));
    }).catch((error) => { console.log(error) })
}

const login = (auth, email, password) => (dispatch) => {
    dispatch({ type: types.POST_LOGIN_REQUEST });
    return signInWithEmailAndPassword(auth, email, password).then((response) => {
        console.log('LoginUserSuccess', response);
        dispatch({ type: types.POST_LOGIN_SUCCESS, payload: response });
    }).catch((error) => { console.log(error) });
}

const logout = async (Auth) => {
    try {
        const logOut = await signOut(Auth);
        console.log('LogOut Successfully:', logOut);
    } catch (error) {
        console.log('Log Out Failed:', error.message);
    }
}

export {
    login,
    logout,
    postRegisterFailure,
    postRegisterRequest,
    postRegisterSuccess,
    register
}