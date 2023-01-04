import React from "react";
// import { FiEdit } from 'react-icons/fi';
import { FaTrash } from 'react-icons/fa';
import { MdOpenInNew } from 'react-icons/md';
// import Card from "../partials/card";
// import ShowPdf from "../partials/showPdf";
import axios from "axios";
import { NavLink } from "react-router-dom";
import ShowModel from "../utils/showModel";
// import {AiFillPlusCircle} from "react-icons/ai";
const Formats = () => {
    const [files, setFile] = React.useState(null);
    const role = JSON.parse(localStorage.getItem("user")).model;
    React.useEffect(() => {
        const fetchPdf = async () => {
            await axios
                .get("http://localhost:3000/format/all")
                .then((res) => {

                    setFile(res.data.reverse());
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        fetchPdf();
    }, []);

    // const handleClick = (e) => {
    //     setFilename(e);
    //     setIsShow(true);
    // };
    const Delete = async (file, url) => {
        await axios.delete(url + file)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });

    }
    const getFile = (file) => {
        try {
            return "http://localhost:3000/assets/" + file
        }
        catch (err) {
            alert('File not found');
        }
    }
    const handleDelete = (file) => {
        const url = "http://localhost:3000/format/";
        Delete(file._id, url);
        const url1 = "http://localhost:3000/format/removefile/";
        Delete(file.file, url1);
        setFile(files.filter((f) => f._id !== file._id));
    }
    return (
        <div>
            <div className="w-full bg-gray-100 py-10 px-5 md:px-0">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex flex-col">
                        <div className="my-4">
                            <h1 className="text-3xl font-bolder leading-tight text-gray-900">Formats</h1>
                        </div>
                        <div className="-mb-2 py-4 flex flex-wrap flex-grow justify-between">
                            <div className="flex items-center py-2">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-search" type="text" placeholder="Search" />
                            </div>
                            {role === "Admin" &&
                                <div className="flex items-center py-2">
                                    <NavLink to={"/formats/upload/"} className="inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline">
                                        Upload Format
                                    </NavLink>

                                </div>
                            }
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
                                            <th className=" md:px-0 md:py-0 text-left font-medium">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="bg-white">
                                        {files && files.map((file) => (
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

                                                <td className=" whitespace-no-wrap border-b border-gray-200">
                                                    <div style={{
                                                        display: "flex",
                                                        gap: "1rem"
                                                    }}>
                                                        <div className="text-indigo-600 hover:text-indigo-900 focus:outline-none  text-lg focus:underline">
                                                            <ShowModel title={file.title} description={file.description} />
                                                        </div>
                                                        {role === "Admin" &&
                                                            <NavLink to="#"
                                                                className="text-indigo-600 hover:text-indigo-900 focus:outline-none  text-lg focus:underline" >
                                                                <FaTrash onClick={
                                                                    //     async () => {
                                                                    //     await axios.delete("http://localhost:3000/project/deleteProject/" + file._id)
                                                                    //         .then(res => {
                                                                    //             console.log(res);
                                                                    //             setFile(files.filter((f) => f._id !== file._id));
                                                                    //         }).catch(err => console.log(err));
                                                                    // }
                                                                    () => handleDelete(file)
                                                                } />
                                                            </NavLink>
                                                        }
                                                        <a href={getFile(file.file)} target="_blank" rel="noopener noreferrer"
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
    // return (
    //     <div className="container w-full ">
    //         {files && files.length > 0 ? (
    //             <div className="flex flex-col gap-3 justify-center w-full h-full p-5">
    //                 <div className="absolute left-0 z-[10000]"></div>
    //                 <div className="absolute right-0 z-[10000] "></div>
    //                 <div
    //                     className={
    //                         files.length === 1
    //                         ?
    //                         "main-container  relative grid grid-flow-col justify-items-start  py-2 overflow-hidden"
    //                         :
    //                         files.length === 2
    //                             ? "main-container relative grid grid-flow-col justify-items-center  py-2 overflow-hidden overflow-x-scroll gap-3 md:overflow-none md:gap-0 lg:gap-3"
    //                             : "main-container relative grid grid-flow-col justify-items-center py-2 gap-3 overflow-x-scroll scroll-smooth"
    //                     }
    //                 >
    //                     {files.map((file) => {
    //                         return (
    //                             <Card
    //                                 id={file._id}
    //                                 title={file.title}
    //                                 description={file.description}
    //                                 url={file.file}
    //                                 date={file.date}
    //                                 handleClick={handleClick}
    //                                 handleDelete={handleDelete}
    //                                 key={file._id}
    //                             />
    //                         );
    //                     })}
    //                 </div>
    //                 <ShowPdf file={filename} showFile={isShow} setShowFile={setIsShow} />
    //                 <div className="absolute right-10 bottom-10">
    //                     <NavLink
    //                         to={"/formats/upload"}
    //                     >
    //                         <AiFillPlusCircle size={45} className='text-indigo-600'/>
    //                     </NavLink>
    //                 </div>
    //             </div>
    //         ) : (
    //             <div className="flex w-full flex-col">
    //                 <h1>No Format available</h1>
    //                 <div className="flex py-2 self-end">
    //                     <NavLink
    //                         to={"/formats/upload"}
    //                         className="inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
    //                     >
    //                         <AiFillPlusCircle/>
    //                     </NavLink>
    //                 </div>
    //             </div>
    //         )}
    //     </div>
    // );
};

export default Formats;
