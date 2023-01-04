import React from 'react'
import {MdPreview} from 'react-icons/md'

const ShowModel = ({ title, description }) => {
    return (
        <label htmlFor="my-modal" >
            <label htmlFor="my-modal">
                <MdPreview />
            </label>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className="w-full p-2 flex flex-wrap flex-col text-black">
                        <div className="flex gap-1 ">
                            <h1>{title} </h1>
                        </div>
                        <div className="flex gap-1">
                            <h2>{description}</h2>
                        </div>

                    </div>
                </div>
            </div></label>
    )
}

export default ShowModel