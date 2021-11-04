import { applyMiddleware, createStore } from "redux";
import rootReducers from './reducers/rootReducers';
import thunk from 'redux-thunk';

// const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(
//     applyMiddleware(thunk)
// ));

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;