import { createStore, applyMiddleware, compose,combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { postReducers } from './reducers/posts'; 

const rootReducers = combineReducers({
    posts:postReducers,
});

const store = createStore(rootReducers, compose(applyMiddleware(thunk)));
export default store;
