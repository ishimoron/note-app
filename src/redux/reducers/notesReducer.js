import {CLEAR_SEARCH, CREATE_NOTE, DELETE_NOTE, EDIT_NOTE, NOTE_ID, SEARCH_NOTE} from "../types";

const initialState = {
    notes: [],
    filterNotes: "",
    noteID: ''
}


export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_NOTE:
            return {...state, notes: [...state.notes, action.payload]}
        case SEARCH_NOTE:
            return {...state, filterNotes: action.payload}
        case NOTE_ID:
            return {...state, noteID: action.payload}
        case CLEAR_SEARCH:
            return {...state, filterNotes: ""}
        case DELETE_NOTE:
            const deleteNote = state.notes.filter(note => note.id !== action.payload)
            return {...state, notes: deleteNote}
        // case EDIT_NOTE:
        //     const editNote = state.notes.map(note => note.id === action.payload.id ? {
        //         ...note,
        //         notes: action.payload.data
        //     } : note)
        //     return {...state, notes: editNote}
        case EDIT_NOTE:
            const updatedNote = state.notes.map(note => {
                if (note.id === action.payload.id) {
                    return {...note, ...action.payload.data}
                }
                return note
            })
            return {...state, notes: updatedNote}
        default:
            return state
    }
}