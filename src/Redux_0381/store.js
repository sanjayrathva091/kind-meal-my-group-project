import { Reducer1 } from "./reducer";
import {legacy_createStore,applyMiddleware, combineReducers} from "redux"
import thunk from "redux-thunk"
import { Reducer2 } from "./Reducer2";

const cobine_r = combineReducers({Reducer1,Reducer2})


const store =legacy_createStore(cobine_r,applyMiddleware(thunk))
// console.log(store)
export {store}