import React from "react";
// import { FiEdit } from 'react-icons/fi';
import { FaTrash } from 'react-icons/fa';
import { MdOpenInNew } from 'react-icons/md';
import axios from "axios";
import { NavLink } from "react-router-dom";
import ShowModel from "../utils/showModel";

const IdeaList = () => {
    const [files, setFile] = React.useState([]);
    const statusList = ["Waiting", "Approved", "Rejected"];
    const [status, setStatus] = React.useState(statusList[0])
    // const [isShow, setIsShow] = React.useState(false);
    // const [filename, setFilename] = React.useState("");

    React.useEffect(() => {
        const fetchPdf = async () => {
            await axios
                .get("http://localhost:3000/project/getProjects/")
                .then((res) => {
                    setFile(res.data);
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        fetchPdf();
    }, []);
    const getFile = (file) => {
        try {
            return "http://localhost:3000/assets/" + file
        }
        catch (err) {
            alert('File not found');
        }
    }
    // const handleClick = (e) => {
    //     setFilename(e);
    //     setIsShow(true);
    // };
    // const Delete = async (file, url) => {
    //     await axios.delete(url + file)
    //         .then((res) => {
    //             console.log(res);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });

    // }
    const changeStatus = (s) => {
        console.log(s)
        setStatus(statusList[(statusList.indexOf(s) + 1) % 3])
    }
    // const handleDelete = (e, file) => {
    //     const url = "http://localhost:3000/project/deleteProject/";
    //     // Delete(e, url);
    //     // const url1 = "http://localhost:3000/format/removefile/";
    //     // Delete(file, url1);
    //     // setFile(files.filter((file) => file._id !== e));
    // }
    return (
        <div>
            <div className="w-full bg-gray-100 py-10 px-5 md:px-0">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex flex-col">
                        <div className="my-4">
                            <h1 className="text-3xl font-bolder leading-tight text-gray-900">Project Ideas</h1>
                        </div>
                        <div className="-mb-2 py-4 flex flex-wrap flex-grow justify-between">
                            <div className="flex items-center py-2">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-search" type="text" placeholder="Search" />
                            </div>
                            <div className="flex items-center py-2">
                                <NavLink to={"/project/new/"} className="inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline">
                                    Post new idea
                                </NavLink>

                            </div>
                        </div>
                        <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                            <div className="align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200">
                                <table className="table-auto w-full">

                                    <thead>
                                        <tr className="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
                                            <th className="p-2 md:px-6 md:py-3 text-left font-medium">
                                                Title
                                            </th>
                                            <th className="p-2 md:px-6 md:py-3 text-left font-medium">
                                                Description
                                            </th>
                                            <th className="p-2 md:px-6 md:py-3 text-left font-medium">
                                                Date Posted
                                            </th>
                                            <th className="p-2 md:px-6 md:py-3 text-left font-medium">
                                                Status
                                            </th>
                                            <th className=" md:px-0 md:py-0 text-left font-medium">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="bg-white">
                                        {files.map((file) => (
                                            <tr id={file._id} key={files.indexOf(file) + 1}>
                                                <td className="p-2 text-sm md:px-6 md:py-4 whitespace-no-wrap border-b border-gray-200">
                                                    {file.title}
                                                </td>
                                                <td className="p-2 md:px-6 md:py-4 whitespace-no-wrap border-b border-gray-200">
                                                    {file.description.length >= 30 ? file.description.slice(0, 30) + '...' : file.description}
                                                </td>
                                                <td className="p-2 md:px-6 md:py-4 whitespace-no-wrap border-b border-gray-200">
                                                    <div className="text-sm leading-5 text-gray-900">
                                                        {new Date(file.date.toString()).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                                                    </div>
                                                </td>
                                                <td className="p-2 md:px-6 md:py-4 whitespace-no-wrap border-b border-gray-200">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-green-800 hover:cursor-pointer" onClick={() => changeStatus(status)}>
                                                        {status}
                                                    </span>
                                                </td>


                                                <td className=" whitespace-no-wrap border-b border-gray-200">
                                                    <div style={{
                                                        display: "flex",
                                                        gap: "1rem"
                                                    }}>
                                                        {/* <NavLink to={"#"}
                                                            className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline text-lg" >
                                                            <FiEdit />
                                                        </NavLink> */}
                                                        <div className="text-indigo-600 hover:text-indigo-900 focus:outline-none  text-lg focus:underline">
                                                            <ShowModel title={file.title} description={file.description} />
                                                        </div>
                                                        <NavLink to="#"
                                                            className="text-indigo-600 hover:text-indigo-900 focus:outline-none  text-lg focus:underline" >
                                                            <FaTrash onClick={async () => {
                                                                await axios.delete("http://localhost:3000/project/deleteProject/" + file._id)
                                                                    .then(res => {
                                                                        console.log(res);
                                                                        setFile(files.filter((f) => f._id !== file._id));
                                                                    }).catch(err => console.log(err));
                                                            }} />
                                                        </NavLink>

                                                        <a href={getFile(file.proposalDocument)} target="_blank" rel="noopener noreferrer"
                                                            className="text-indigo-600 hover:text-indigo-900 focus:outline-none  text-lg focus:underline" >
                                                            <MdOpenInNew />
                                                        </a>
                                                    </div>
                                                </td>
                                                {/* <td className="ml-4  pr-2 md:pr-3 whitespace-no-wrap border-b border-gray-200">
                                                </td> */}


                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
    /*
    return (
        <div className="container w-full ">
            {files && files.length > 0 ? (
                <div className="flex flex-col gap-3 justify-center w-full h-full p-5">
                    <div className="absolute left-0 z-[10000]"></div>
                    <div className="absolute right-0 z-[10000] "></div>
                    <div
                        className={
                            files.length === 1
                                ?
                                "main-container relative grid grid-flow-col justify-items-start  py-2 overflow-hidden"
                                :
                                files.length === 2
                                    ? "main-container relative grid grid-flow-col justify-items-center  py-2 overflow-hidden overflow-x-scroll gap-3 md:overflow-none md:gap-0 lg:gap-3"
                                    : "main-container relative grid grid-flow-col justify-items-center py-2 gap-3 overflow-x-scroll scroll-smooth"
                        }
                    >
                        {files.map((file) => {
                            return (
                                <Card
                                    id={file._id}
                                    title={file.title}
                                    description={file.description}
                                    url={file.proposalDocument}
                                    date={file.date}
                                    handleClick={handleClick}
                                    handleDelete={handleDelete}
                                    key={file._id}
                                />
                            );
                        })}
                    </div>
                    <ShowPdf file={filename} showFile={isShow} setShowFile={setIsShow} />
                    <div className="flex py-2 self-end">
                        <NavLink
                            to={"/project/new"}
                            className="inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
                        >
                            Create
                        </NavLink>
                    </div>
                </div>
            ) : (
                <div className="flex w-full flex-col">
                    <h1>No Format available</h1>
                    <div className="flex py-2 self-end">
                        <NavLink
                            to={"/project/new"}
                            className="inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
                        >
                            Create
                        </NavLink>
                    </div>
                </div>
            )}
        </div>
    )
    */
}

export default IdeaList
