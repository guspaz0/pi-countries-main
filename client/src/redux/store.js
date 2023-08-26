import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from "./reducer";

const composed = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(
    reducer,
    //persistedStore,
    composed);

export default store;