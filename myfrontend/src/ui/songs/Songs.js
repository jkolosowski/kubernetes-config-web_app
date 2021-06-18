import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import Heart from 'react-heart';

import operations from '../../state/songs/operations';

const Songs = ({ songs, getSongs, deleteSong, editSong }) => {

    const [ id, setId ] = useState(null);
    const [active, setActive] = useState(false);

    const saveSong = (value) => {
        setId(null);
        editSong(id, value.title, value.artist, value.album, value.date);
    }

    useEffect(() => {
        getSongs()
    }, [songs]);

    return (
        <div className={"content m-6"}>
            <Link to={"/add"} className={"button is-success mb-3 is-medium"}>
                Add song
            </Link>
            {songs && songs.map(song =>
                <div key={song._id} className={"message is-info has-text-centered"}>
                    <div className={"message-header"}>
                        <b>{new Date(song.release_date).toLocaleDateString()}</b>
                        <button className={"delete"} onClick={() => {
                            if (window.confirm("Are you sure?")){
                                deleteSong(song._id);
                            }
                        }}>
                            Delete
                        </button>
                    </div>
                    <Heart isActive={active} onClick={() => setActive(!active)} style={{ width: "4rem"}} className={"mt-2"}/>
                    <h4>Title: <b className={"has-text-link-dark"}>{song.title}</b></h4>
                    <h4>Artist: <b className={"has-text-info-dark"}>{song.artist}</b></h4>
                    <p>Album: <b className={"has-text-info"}>{song.album}</b></p>

                    <button
                        className={"button ml-3 is-primary mb-3"}
                        onClick={() => {
                            setId(song._id);
                    }}>
                        Edit
                    </button>
                    {song._id === id &&
                        <Formik
                            initialValues={{
                                title: song.title,
                                artist: song.artist,
                                album: song.album,
                                date: song.release_date
                            }}
                            onSubmit={saveSong}
                            className={"is-centered"}
                        >
                            {({handleSubmit, handleReset}) => (
                                <Form onSubmit={handleSubmit} className={"column is-centered has-text-centered ml-6 mr-6"} >
                                    <label className="label mt-5">Title</label>
                                    <div className={"control"} style={{margin: "auto", width: "33%"}}>
                                        <Field
                                            type='text'
                                            name={'title'}
                                            placeholder={'Type title'}
                                            className={"input"}
                                        />
                                    </div>

                                    <label className="label mt-5">Artist</label>
                                    <div className={"control"} style={{margin: "auto", width: "33%"}}>
                                        <Field
                                            type='text'
                                            name={'artist'}
                                            placeholder={'Type artist'}
                                            className={"input"}
                                        />
                                    </div>

                                    <label className="label mt-5">Album</label>
                                    <div className={"control"} style={{margin: "auto", width: "33%"}}>
                                        <Field
                                            type='text'
                                            name={'album'}
                                            placeholder={'Type album'}
                                            className={"input"}
                                        />
                                    </div>

                                    <button type='submit' className={"button mt-6 is-success mr-3"}>
                                        Save
                                    </button>

                                    <button onClick={handleReset} className={"button mt-6 is-danger is-outlined"}>
                                        Reset
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    }

                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        songs: state.songs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSongs: () => {
            dispatch(operations.getSongs());
        },
        deleteSong: (id) => dispatch(operations.deleteSong(id)),
        editSong: (id, title, artist, album, date) =>
            dispatch(operations.editSong(id, title, artist, album, date))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Songs);
