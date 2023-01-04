import React from 'react'
import { FiEdit } from 'react-icons/fi';
// import { FaTrash } from 'react-icons/fa';
import axios from "axios";
import { NavLink } from "react-router-dom";

const StudentsUnderAdvisor = () => {


    const [students, setStudents] = React.useState([]);
    React.useEffect(() => {
        const fetchStudents = async () => {
            await axios
                .get("http://localhost:3000/person/getPerson")
                .then((res) => {
                    setStudents(res.data);
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        fetchStudents();
    }, []);
   


  return (
    <div>
    <div className="w-full bg-gray-100 py-10 px-5 md:px-0">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="flex flex-col">
                <div className="my-4">
                    <h1 className="text-3xl font-bolder leading-tight text-gray-900">Meetings</h1>
                </div>
                <div className="-mb-2 py-4 flex flex-wrap flex-grow justify-between">
                    <div className="flex items-center py-2">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-search" type="text" placeholder="Search" />
                    </div>
                    <div className="flex items-center py-2">
                        <NavLink to={"/meeting/new/"} className="inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline">
                            Create New Meeting
                        </NavLink>

                    </div>
                </div>
                <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div className="align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200">
                        <table className="table-auto w-full">

                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
                                    <th className="p-2 md:px-6 md:py-3 text-left font-medium">
                                        Registration Number
                                    </th>
                                    <th className="p-2 md:px-6 md:py-3 text-left font-medium">
                                        Name
                                    </th>
                                    <th className=" md:px-0 md:py-0 text-left font-medium">
                                        Assign Task
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="bg-white">
                                {students.length >0 && students.map((m) => (
                                    <tr id={m._id} key={students.indexOf(m) + 1}>
                                        <td className="p-2 text-sm md:px-6 md:py-4 whitespace-no-wrap border-b border-gray-200">
                                        {m.regNo}
                                        </td>
                                        <td className="p-2 md:px-6 md:py-4 whitespace-no-wrap border-b border-gray-200">
                                            
                                            {m.fname + " " + m.lname}
                                        </td>
                                        <td className=" whitespace-no-wrap border-b border-gray-200">
                                            <div style={{
                                                display: "flex",
                                                gap: "1rem"
                                            }}>
                                                <NavLink to={"#"}
                                                    className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline text-lg" >
                                                    <FiEdit />
                                                </NavLink>
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
  )
}

export default StudentsUnderAdvisor