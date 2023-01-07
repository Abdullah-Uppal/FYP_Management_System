import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

const Model = ({ title, handleAdd, setTitle, children, value }) => {
    return (
        <div>
            <label htmlFor="my-modal" >
                {children}
            </label>
            
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className="w-full p-2 flex justify-between">
                        <h2>{title} Department</h2>
                        <label htmlFor="my-modal" className='cursor-pointer text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline text-lg' >
                            <AiFillCloseCircle size={20}/>
                        </label>
                    </div>
                    <div>
                        <input type="text" placeholder="Department..." value={value} className="w-full p-2 px-3 rounded-xl border-2 active:border-0 focus:border-0" onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="modal-action">

                        <label htmlFor="my-modal" className="inline-flex items-center gap-2 px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline justify-center " onClick={handleAdd}>
                            Done
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Model