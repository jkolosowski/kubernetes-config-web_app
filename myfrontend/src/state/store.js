import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createMiddleware } from 'redux-api-middleware';
import songsReducers from './songs/reducers';
import heartsReducers from './hearts/reducers';

const rootReducer = combineReducers({ ...songsReducers, ...heartsReducers });
const store = createStore(rootReducer, applyMiddleware(thunk, createMiddleware()));

export default store;
