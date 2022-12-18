import * as types from "./actionTypes";

const initialState = {
    vegRes: [],
    totalShop: 0,
    perPageLimit: 4,
    isLoading: false,
    isError: false,
};

const AppReducer = (state = initialState, actions) => {
    const { type, payload } = actions;

    switch (type) {
        case types.GET_SHOP_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.GET_SHOP_SUCCESS:

            return {
                ...state,
                vegRes: payload.data,
                totalShop: payload.headers["x-total-count"],
                isLoading: false,
            }
        case types.GET_SHOP_FAILURE:
            return {
                ...state,
                isError: false,
            }
        default:
            return state;
    }

};

export { AppReducer };