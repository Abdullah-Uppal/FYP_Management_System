import React from "react";
import List from "./list";

const Model = ({ members,handleClick, handleAdd, handleCancel, fetch }) => {
  return (
    <div>
      <label htmlFor="my-modal" className="btn">
        Create Committee
      </label>

      <input type="checkbox" id="my-modal" className="modal-toggle" onClick={fetch}/>
      <div className="modal">
        <div className="modal-box">
          <p className="py-4 px-2">Add members:</p>
          <div className="h-50 border-2 overflow-y-scroll  rounded-xl">
            <List members={members}  handleClick={handleClick} />
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal"  className="btn" onClick={handleCancel}>
              Cancel
            </label>
            <label htmlFor="my-modal"  className="btn" onClick={handleAdd}>
              Done
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
