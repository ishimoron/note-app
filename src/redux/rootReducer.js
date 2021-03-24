import {combineReducers} from "redux";
import {notesReducer} from "./reducers/notesReducer";
import {appReducer} from "./reducers/appReducer";


export const rootReducer = combineReducers({
    notes: notesReducer,
    app: appReducer
})