import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Alert from '../utils/alert';

const Milestones = () => {


    const { id } = useParams();
    const [alert, setAlert] = useState({});
    const [isAlert, setIsAlert] = useState(false);
    const [file, setFile] = useState(null);
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState("");
    const [deadline, setDeadline] = useState('')
    const [send, setSend] = useState(false);
    var [isUpdate, setIsUpdate] = useState(false);
    useEffect(() => {
        id && axios
            .get("http://localhost:3000/person/getOnePerson/" + id)
            .then((res) => {
                setInput(res.data);
                setIsUpdate(true);
            });
    }, [id])

    const [Input, setInput] = useState(
        {
            _id: "",
            title: "",
            description: "",
        }
    );


    React.useEffect(() => {
        const fetchProjects = async () => {
            await axios
                .get("http://localhost:3000/project/getProjects")
                .then((res) => {

                    setProjects(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        fetchProjects();
    }, []);

    const upload = async (data, url) => {

        try {
            await axios.post(url, data)
                .then((res) => {
                    if (res.status === 200) {
                        console.log('File Uploaded Successfully')
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

    const update = async (data, url) => {

        try {
            await axios.put(url, data).then((res) => {
                if (res.status === 200) {
                    console.log('Milestone Updated Successfully')
                }
            }).catch((err) => {
                console.log(err)
            })
        }
        catch (err) {
            if (err.response.status === 500) {
                console.log('There was a problem with the server');
            } else {
                console.log(err.response.data.msg);
            }
        }



    }
    const handleChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };


    const handleDateChange = (e) => {
        console.log(e.target.value)
        setDeadline(e.target.value)
    }
    const handleProjectChange = (e) => {
        console.log(e.target.value)
        setSelectedProject(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const d = {
            title: Input.title,
            description: Input.description,
            deadline: deadline,
            attachement: file.name,
            project: selectedProject,
            sendToAll:send
        }
        const formData = new FormData();
        formData.append('file', file);
        const url = 'http://localhost:3000/milestone/uploadfile'
        upload(formData, url)
        if (isUpdate) {
            const url1 = 'http://localhost:3000/milestone/addMilestone'
            update(d, url1)
        } else {
            const url1 = 'http://localhost:3000/milestone/addMilestone'
            upload(d, url1)
        }

        setAlert({ redirect: '/milestone', message: 'Milestone Updated Successfully' });
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
                        <input value={Input.title} onChange={handleChange} name='title' className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-title" type="text" placeholder="Title" required />

                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">
                            description
                        </label>
                        <textarea value={Input.description} onChange={handleChange} name='description' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="description" placeholder="Description........" required />
                    </div>
                </div>
                <div className="flex flex-wrap  mb-6">
                    <div className="datepicker relative form-floating mb-3 xl:w-96">
                        <input datepicker type="date" value={deadline} onChange={handleDateChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select deadline" />
                    </div>
                </div>
                <div className="flex flex-wrap  mb-6">
                    <div className="mb-3 xl:w-96">
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={selectedProject} onChange={handleProjectChange} aria-label="Default select example">
                            <option value={''}>Open this to select Project</option>
                            {
                                projects.map((project) => {
                                    return (
                                        <option value={project._id}>{project.title}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="flex flex-wrap  mb-6 form-check">
                    <div className="form-control">
                        <label className="label cursor-pointer flex gap-2">
                            <input type="checkbox" className="checkbox checkbox-dark" onChange={(e)=>setSend(e.target.checked)} />
                            <span className="label-text">send to all</span>
                        </label>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">

                        <input type="file" className="file-input file-input-bordered file-input-dark w-full max-w-xs" onChange={(e) => setFile(e.target.files[0])} />

                    </div>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2 md:mt-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">{isUpdate ? 'Update' : 'Register'}</button>
            </form>



        </div>
    )
}

export default Milestones