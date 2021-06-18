import { createAction } from 'redux-api-middleware';
import types from './types';
import { SONGS_REQUEST, SONGS_SUCCESS, SONGS_FAILURE } from './types';

const getSongs = () => (dispatch) => dispatch(createAction({
    endpoint: 'http://prod.127-0-0-1.sslip.io/api/songs',
    method: 'GET',
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    types: [
        SONGS_REQUEST,
        SONGS_SUCCESS,
        SONGS_FAILURE
    ]
}));

const addSong = (title, artist, album, date) => (dispatch) => dispatch(createAction({
    endpoint: 'http://prod.127-0-0-1.sslip.io/api/songs',
    method: 'POST',
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        title: title,
        artist: artist,
        album: album,
        release_date: new Date(date)
    }),
    types: [
        SONGS_REQUEST,
        types.ADD_SONG,
        SONGS_FAILURE
    ]
}));

const deleteSong = (id) => (dispatch) => dispatch(createAction({
    endpoint: `http://prod.127-0-0-1.sslip.io/api/songs/${id}`,
    method: 'DELETE',
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
    types: [
        SONGS_REQUEST,
        {type: types.DEL_SONG, payload: id},
        SONGS_FAILURE
    ]
}));

const editSong = (id, title, artist, album, date) => (dispatch) => dispatch(createAction({
    endpoint: `http://prod.127-0-0-1.sslip.io/api/songs/${id}`,
    method: 'PATCH',
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        title: title,
        artist: artist,
        album: album,
        release_date: new Date(date)
    }),
    types: [
        SONGS_REQUEST,
        types.EDIT_SONG,
        SONGS_FAILURE
    ]
}));

const operations = {
    getSongs,
    addSong,
    deleteSong,
    editSong
};

export default operations;
