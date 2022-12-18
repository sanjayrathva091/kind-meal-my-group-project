import axios from 'axios';
import * as types from './actionTypes';

const getVegResRequest = () => {
    return {
        type: types.GET_SHOP_REQUEST
    }
}
const getVegResSuccess = (payload) => {
    return {
        type: types.GET_SHOP_SUCCESS,
        payload
    }
}
const getVegResFailure = () => {
    return {
        type: types.GET_SHOP_FAILURE
    }
}

const addShopRequest = () => {
    return {
        type: types.ADD_SHOP_REQUEST
    }
};

const addShopSuccess = (payload) => {
    return {
        type: types.ADD_SHOP_SUCCESS,
        payload
    }
};

const addShopFailure = () => {
    return {
        type: types.ADD_SHOP_FAILURE
    }
}

const getVegRes = (params) => (dispatch) => {
    dispatch(getVegResRequest());

    return axios
        .get(`https://kindmealmy-directory-page.onrender.com/vegetarian_directory`, params)
        .then((response) => {

            dispatch(getVegResSuccess(response))
        })
        .catch((err) => dispatch(getVegResFailure(err)))
};

const addShop = (payload) => (dispatch) => {
    dispatch(addShopRequest());
    return axios
        .post(`https://kindmealmy-directory-page.onrender.com/vegetarian_directory`, payload)
        .then((res) => dispatch({ type: types.ADD_SHOP_SUCCESS, payload: res.data }))
        .catch((err) => dispatch({ type: types.ADD_SHOP_FAILURE }));
};

export {
    addShop,
    addShopFailure,
    addShopRequest,
    addShopSuccess,
    getVegRes,
    getVegResFailure,
    getVegResRequest,
    getVegResSuccess,
}