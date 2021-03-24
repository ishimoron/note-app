import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {CLEAR_SEARCH, SEARCH_NOTE} from "../redux/types";

const Search = () => {

    const dispatch = useDispatch()
    const [search, setSearch] = useState('');


    return (
        <div className="container mx-auto my-4 p-4">
            <form className="relative my-2" onSubmit={(e) => {
                e.preventDefault()
                dispatch({type: SEARCH_NOTE, payload: search})
            }}>
                <div className="flex">
                    <input
                        type="search"
                        className="p-3 w-full border-0 rounded shadow focus:border-green-600"
                        placeholder="Search Note"
                        onChange={e => setSearch(e.target.value)}
                    />
                    <button
                        type="button"
                        onClick={()=> dispatch({type: CLEAR_SEARCH})}
                        className="border border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
                    >
                        Clear
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Search;