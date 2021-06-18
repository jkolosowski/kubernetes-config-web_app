import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createMiddleware } from 'redux-api-middleware';
import songsReducers from './songs/reducers';

const rootReducer = combineReducers({ ...songsReducers });
const store = createStore(rootReducer, applyMiddleware(thunk, createMiddleware()));

export default store;
