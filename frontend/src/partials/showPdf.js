import React from 'react'
import { GrClose } from 'react-icons/gr'

const ShowPdf = ({ file, showFile, setShowFile }) => {

    const src = "http://localhost:3000/assets/" + file

    return (
        <div className={showFile ? "block" : "hidden"}>

            <div className='flex flex-col gap-5'>
                <GrClose className=' self-end mr-5 cursor-pointer' onClick={() => setShowFile(false)} />

                <embed src={src} type="application/pdf"
                    width="100%"
                    height="600px" />


            </div>
        </div>

    )
}

export default ShowPdf