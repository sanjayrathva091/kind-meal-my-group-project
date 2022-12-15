import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';

import { AppReducer } from './AppReducer/AppReducer';
import { AuthReducer } from './AuthReducer/AuthReducer';

const rootReducer = combineReducers({ AppReducer, AuthReducer });

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };