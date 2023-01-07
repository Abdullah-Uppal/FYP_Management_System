import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import List from "./list";

const Model = ({ min, max, members, count, handleClick, addGroup, setTitle }) => {

    return (
        <div>
            <label htmlFor="my-modal" className="btn">
                Create Group
            </label>

            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className="w-full p-2 flex justify-between">
                        <div className="flex gap-1">
                            <h3>Group Members: </h3>
                            <h3>{count}</h3>
                        </div>
                        <div className="flex gap-2">
                            <h3>min: </h3>
                            <h3>{min}</h3>
                            <h3>max: </h3>
                            <h3>{max}</h3>
                        </div>
                        <label htmlFor="my-modal" className='cursor-pointer text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline text-lg' >
                            <AiFillCloseCircle size={20} />
                        </label>
                    </div>
                    <div>
                        <input type="text" placeholder="Group Name" className="w-full p-2 px-3 rounded-xl border-2 active:border-0 focus:border-0" onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <p className="py-4 px-2">Add members:</p>
                    <div className="h-32 border-2 overflow-y-scroll  rounded-xl">
                        {members.length > 0 ? <List members={members} max={max} count={count} handleClick={handleClick} /> : <p className="text-center">No student found <NavLink className='underline text-indigo-500' to={'/user/person/new'}>Add new</NavLink></p>}
                    </div>
                    <div className="modal-action">
                        {
                            count < min || members.length === 0 ? <label htmlFor="my-modal" className="btn" disabled> Done </label> : <label htmlFor="my-modal" className="btn" onClick={addGroup}> Done </label>
                        }
                        {/* <label htmlFor="my-modal"  className="btn" onClick={addGroup}>
              Done
            </label> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Model;
