import React, {useState} from 'react';
import TagInput from "./TagInput";
import {useDispatch, useSelector} from "react-redux";

import {CREATE_NOTE, HIDE_ALERT, SHOW_ALERT} from "../redux/types";
import {Link, Redirect} from "react-router-dom";
import Alert from "./Alert";


const CreateNote = () => {

    const id = `f${(~~(Math.random() * 1e8)).toString(16)}`;

    const [tagsValue, setTagsValue] = useState([]);
    const [success, setSuccess] = useState(false)
    const [data, setData] = useState({
        title: '',
        subTitle: '',
        noteText: '',
        tags: [],
        id
    });

    const dispatch = useDispatch()
    const alert = useSelector(state => state.app.alert)

    const changeInputHandler = event => {
        event.persist()
        setData(prev => ({
            ...prev, ...{
                [event.target.name]: event.target.value
            }
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (data.title.trim() && data.subTitle.trim() && data.noteText.trim() && data.tags.length) {
            dispatch({type: CREATE_NOTE, payload: data})
            setData('')
            setSuccess(true)
        } else {
            dispatch({type: SHOW_ALERT})

            setTimeout(() => {
                dispatch({type: HIDE_ALERT})
            }, 3000)
        }

    }

    if (success) {
        return <Redirect to="/"/>
    }

    return (
        <div className="leading-loose mx-auto">
            {alert && <Alert/>}
            <form className="max-w-xl m-4 p-10 bg-white rounded shadow-xl mx-auto">
                <p className="text-gray-800 font-medium text-center text-xl">Create Note</p>
                <div>
                    <label className="block text-sm text-gray-00" htmlFor="title">Title</label>
                    <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                           id="title"
                           name="title"
                           type="text" placeholder="Your Name"
                           aria-label="Name"
                           onChange={changeInputHandler}
                    />
                </div>
                <div className="mt-2">
                    <label className="block text-sm text-gray-600" htmlFor="subtitle">SubTitle</label>
                    <input className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
                           id="subTitle"
                           name="subTitle"
                           type="text"
                           placeholder="Your Subtitle"
                           aria-label="Subtitle"
                           onChange={changeInputHandler}
                    />
                </div>
                <div className="mt-2">
                    <label className="block text-sm text-gray-600" htmlFor="noteText">Note Text</label>
                    <textarea className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
                              id="noteText"
                              name="noteText"
                              type="text"
                              placeholder="Note Text"
                              aria-label="noteText"
                              onChange={changeInputHandler}
                    />
                </div>
                <div className="mt-2">
                    <div className="section container">
                        <div className="field has-addons">
                            <div className="control is-expanded">
                                <TagInput
                                    value={tagsValue}
                                    onChange={setTagsValue}
                                />
                                <button
                                    type="submit"
                                    className="hidden"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setData({
                                            ...data,
                                            tags: tagsValue
                                        })
                                    }}>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-700 rounded w-full"
                            type="submit"
                            onClick={handleSubmit}
                    >
                        Add
                    </button>
                </div>
            </form>
            <div className="w-full flex justify-center text-center">
                <Link to="/" className="px-4 py-1 text-white font-light tracking-wider bg-blue-600 rounded w-6/12 hover:bg-blue-700">
                    Back
                </Link>
            </div>
        </div>
    );
};


export default CreateNote;