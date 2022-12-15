import * as types from "./actionTypes";

const initialState = {
    vegRes: [],
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
            console.log('success fully loaded data', payload);
            return {
                ...state,
                vegRes: payload,
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