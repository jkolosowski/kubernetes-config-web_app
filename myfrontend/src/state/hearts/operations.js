import { createAction } from 'redux-api-middleware';
import types from './types';
import { HEARTS_FAILURE, HEARTS_REQUEST, HEARTS_SUCCESS } from './types';

const getHearts = () => (dispatch) => dispatch(createAction({
    endpoint: 'http://prod.127-0-0-1.sslip.io/api/hearts',
    method: 'GET',
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    types: [
        HEARTS_REQUEST,
        HEARTS_SUCCESS,
        HEARTS_FAILURE
    ]
}));

const addHeart = (id) => (dispatch) => dispatch(createAction({
    endpoint: 'http://prod.127-0-0-1.sslip.io/api/hearts',
    method: 'POST',
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        id: id
    }),
    types: [
        HEARTS_REQUEST,
        types.ADD_HEART,
        HEARTS_FAILURE
    ]
}));

const deleteHeart = (id) => (dispatch) => dispatch(createAction({
    endpoint: `http://prod.127-0-0-1.sslip.io/api/hearts/${id}`,
    method: 'DELETE',
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
    types: [
        HEARTS_REQUEST,
        {type: types.DEL_HEART, payload: id},
        HEARTS_FAILURE
    ]
}));

const heartOperations = {
    getHearts,
    addHeart,
    deleteHeart
}

export default heartOperations;
