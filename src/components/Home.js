import React from 'react';
import Note from "./Note";
import Search from "./Search";
import CreateButton from "./CreateButton";

const Home = () => {
    return (
        <div className="container mx-auto pt-4 flex">
            <div className="container">
                <div className="w-6/12 mx-auto">
                    <Search/>
                </div>
                <div>
                    <Note/>
                </div>
                <div>
                    <CreateButton/>
                </div>

            </div>
        </div>
    );
};

export default Home;