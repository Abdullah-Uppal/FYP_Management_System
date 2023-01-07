import React, { useState } from 'react'
import Alert from '../utils/alert';
import axios from 'axios';

const PostIdea = () => {

    
    const [alert, setAlert] = useState({});
    const [isAlert, setIsAlert] = useState(false);
    const [file,setFile] = useState(null);
    const id = JSON.parse(localStorage.getItem('user')).id
    const [Input, setPerson] = useState(
        {
            title: "",
            description: "",
            modelType: JSON.parse(localStorage.getItem('user')).model,
            postedBy: ""
            
        }
    );
    React.useEffect(() => {
        getStudentId();
    },[])

    //axios call to backend to upload file
    const uploadFile = async (data,url) => {

        try {
            await axios.post(url, data)
            .then((res) => {
                if(res.status === 200){
                    console.log('Project idea Uploaded Successfully')
                }
            });
        } catch (err) {
            if (err.response.status === 500) {
                console.log('There was a problem with the server');
            } else {
                console.log(err.response.data.msg);
            }
        }
    };

        
    const getStudentId = async () => {
        try {
            await axios.get('http://localhost:3000/person/getPerson').then((res) => {
               
            }).catch((err) => {
                console.log(err)
                });
        } catch (err) {
            if (err.response.status === 500) {
                console.log('There was a problem with the server');
            } else {
                console.log(err.response.data.msg);
            }
        }
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        setPerson((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
            
            const d = {
            title: Input.title,
            description: Input.description,
            proposalDocument:file.name,
            modelType: Input.modelType,
            postedBy: id,
             
        }
        
        const formData = new FormData();
        formData.append('file',file);
        formData.append('name','file');
        const url = 'http://localhost:3000/project/uploadfile'
        uploadFile(formData,url)
        const url1  = 'http://localhost:3000/project/addProject'
        uploadFile(d,url1)
        setAlert({ redirect: '/project/all', message: 'project idea Updated Successfully'});
        setIsAlert(true);
    }

    return (
        <div>
            {isAlert && <Alert redirect={alert.redirect} message={alert.message} />}
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Title
                        </label>
                        <input value={Input.title} onChange={handleChange} name='title' className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-title" type="text" placeholder="Title" required/>

                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">
                            description
                        </label>
                        <textarea value={Input.description} onChange={handleChange} name='description' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="description" placeholder="Description........" required />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full px-3">

                        <input type="file" className="file-input file-input-bordered file-input-dark w-full max-w-xs"  onChange={(e)=>setFile(e.target.files[0])}/>

                    </div>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2 md:mt-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">{'Upload'}</button>
            </form>

            

        </div>
    )
}

export default PostIdea