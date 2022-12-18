import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ShowPdf = () => {
    const { file } = useParams();
    const [isFound, setIsFound] = useState(false);
    const [src, setSrc] = useState('')
    const [input, setInput] = useState({})
    const [showFile, setShowFile] = useState(false)
    const url = 'http://localhost:3000/format/getFormat/';
    useEffect(() => {
        axios.get(url + file).then(res => {
            console.log(res.status);
            if (res.status === 200) {
                setInput(res.data);
                setIsFound(true);
                setSrc("http://localhost:3000/static/" + file);
            }
        }).catch(err => {
            console.log(err.message);
        })
    }, [file])

    return (
        <div>
            {!isFound ? <h1>File Not Found</h1> :
                <div className='flex flex-col gap-5'>
                    <div className="text-black bg-slate-800  grid grid-cols-3 place-items-center divide-x shadow-2xl shadow-slate-800 p-4 rounded-lg">
                        <div>{input.title}</div>
                        <div><button className='text-white' onClick={()=>setShowFile(true)}>{file.split('.')[0]}</button></div>
                        <div>{input.description}</div>
                    </div>
                    <embed src={src} type="application/pdf" className={showFile ? "block" : "hidden"}
                        width="100%"
                        height="600px" />
                </div>

            }
        </div>

    )
}

export default ShowPdf