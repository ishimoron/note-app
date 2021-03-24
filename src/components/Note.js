import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {DELETE_NOTE, NOTE_ID} from "../redux/types";
import {Link} from "react-router-dom";


const Note = () => {

        const dispatch = useDispatch()

        const notes = useSelector(state => state.notes.notes)
        const filterNotes = useSelector(state => state.notes.filterNotes)

        const filteredNotes = filterNotes ? notes.filter(note => note.title.includes(filterNotes)) : notes

        if (!notes.length) {
            return <p className="text-center text-red-600 text-3xl font-bold">Nothing create yet</p>
        }

        if (!filteredNotes.length) {
            return <p className="text-center text-red-600 text-3xl font-bold">Nothing found</p>
        }


        return (
            <div className="grid grid-cols-4 gap-6 p-4">
                {filteredNotes.map(note => {
                    return (
                        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mx-aut" key={note.id}>
                            <img className="w-full"
                                 src="https://picsum.photos/300/200"
                                 alt="Sunset in the mountains"
                            />
                            <div className="px-6 py-4">
                                <h1 className="font-bold text-xl mb-2 leading-normal text-4xl">{note.title}</h1>
                                <p className="text-grey-darker text-base leading-normal">
                                    {note.subTitle}
                                </p>
                            </div>
                            <div className="px-6 py-4">
                                <p className="text-grey-darker text-base leading-normal">
                                    {note.noteText}
                                </p>
                            </div>
                            <div className='my-3 flex flex-wrap m-4'>
                                {note.tags.map((tag, i) => <span
                                    className="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer"
                                    key={i}>#{tag}</span>)}
                            </div>
                            <div className="flex justify-center">
                                <Link
                                    to={`/edit/${note.id}`}
                                    onClick={() => dispatch({type: NOTE_ID, payload: note.id})}
                                    className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
                                >Edit</Link>
                                <button
                                    type="button"
                                    className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
                                    onClick={() => dispatch({type: DELETE_NOTE, payload: note.id})}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    )
                })}


            </div>
        );
    }
;

export default Note;