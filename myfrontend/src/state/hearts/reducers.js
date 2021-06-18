import types from './types';

const hearts = (state = [], action) => {
    switch (action.type) {
        case types.ADD_HEART:
            return [
                ...state,
                {...action.payload}
            ];
        case types.HEARTS_SUCCESS:
            return [
                ...action.payload
            ];
        case types.DEL_HEART:
            return state.filter(heart => heart !== `heart:${action.payload}`);
        default:
            return state;
    }
};

const heartsReducers = { hearts };

export default heartsReducers;
