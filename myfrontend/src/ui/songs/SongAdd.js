import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';

import operations from '../../state/songs/operations';

const SongAdd = ({ addSong }) => {

    const saveSong = (value) => {
        addSong(value.title, value.artist, value.album, value.date);
        return alert("Song added successfully!");
    };

    return (
        <div className={"content m-6"}>
            <Link to={'/'} className={"button is-danger mb-3 is-medium ml-3"}>
                Go back
            </Link>
            <div className={"field"}>
                <Formik
                    initialValues={{
                        title: '',
                        artist: '',
                        album: '',
                        date: ''
                    }}
                    onSubmit={saveSong}
                >
                    {({handleSubmit, handleReset}) => (
                        <Form onSubmit={handleSubmit} className={"column is-centered is-5"}>
                            <label className="label mt-5">Title</label>
                            <div className={"control"}>
                                <Field
                                    type='text'
                                    name={'title'}
                                    placeholder={'Type title'}
                                    className={"input"}
                                />
                            </div>

                            <label className="label mt-5">Artist</label>
                            <div className={"control"}>
                                <Field
                                    type='text'
                                    name={'artist'}
                                    placeholder={'Type artist'}
                                    className={"input"}
                                />
                            </div>

                            <label className="label mt-5">Album</label>
                            <div className={"control"}>
                                <Field
                                    type='text'
                                    name={'album'}
                                    placeholder={'Type album'}
                                    className={"input"}
                                />
                            </div>

                            <label className="label mt-5">Release date</label>
                            <div className={"control"}>
                                <Field
                                    type='date'
                                    name={'date'}
                                    className={"input"}
                                />
                            </div>

                            <button type='submit' className={"button mt-6 is-success is-medium mr-3"}>
                                Save
                            </button>

                            <button onClick={handleReset} className={"button mt-6 is-danger is-outlined is-medium"}>
                                Reset
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        addSong: (title, artist, album, date) => {
            dispatch(operations.addSong(title, artist, album, date));
        }
    }
};

export default connect(undefined, mapDispatchToProps)(SongAdd);
