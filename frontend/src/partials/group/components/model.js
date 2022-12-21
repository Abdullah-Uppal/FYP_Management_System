import React from 'react'
import List from './list'

const Model = () => {

    const handleClick = (e)=>{
        console.log(e)
    }
    return (
        <div>
            <label htmlFor="my-modal" className="btn">Create Group</label>
            
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className='w-full p-2 flex gap-1'>
                       <h3>Group Members: </h3><h3>20</h3>
                    </div>
                    <p className="py-4">Click on add to add member</p>
                    <div className='h-32 border-2 overflow-y-scroll  rounded-xl' >
                         <List handleClick={handleClick}/>   
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">Done</label>
                    </div>
                </div>
            </div></div>
    )
}

export default Model