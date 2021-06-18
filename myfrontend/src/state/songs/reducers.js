import types from './types';

const songs = (state = [], action) => {
    switch (action.type) {
        case types.ADD_SONG:
            return [
                ...state,
                {...action.payload}
            ];
        case types.SONGS_SUCCESS:
            return [
                ...action.payload
            ];
        case types.DEL_SONG:
            return state.filter(song => song._id !== action.payload);
        case types.EDIT_SONG:
            return state.map(song => song._id === action.payload ? action.payload : song);
        default:
            return state;
    }
};

const songsReducers = { songs };

export default songsReducers;
