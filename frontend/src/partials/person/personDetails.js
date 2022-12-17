import React from 'react'
import { NavLink } from "react-router-dom";

import { FiEdit } from 'react-icons/fi';
import { FaTrash } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import axios from 'axios';



const PersonDetails = ({type}) => {
    

    const name = type[0].toUpperCase()+type.slice(1)
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        getPersons().then((data) => {
            setPersons(data.person);
        });
    }, []);

    const url = "http://localhost:3000/person/getPerson";
    const getPersons = async () => {
        console.log('data fetch first')
        try {
            return await axios.get(url).then((res) =>
                res.data
            );


        } catch
        (error) {
            console.log(error)
        }
    };
    const handleDelete = async (id) => {
      const url = "http://localhost:3000/person/" + id; 
      await axios.delete(url).then(res => { 
        setPersons(persons.filter((value, index, arr) => { return value._id !== id }));
      });
    }

    return (
        <div>
            <div className="w-full bg-gray-100 py-10 px-5 md:px-0">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex flex-col">
                        <div className="my-4">
                            <h1 className="text-3xl font-bolder leading-tight text-gray-900">All {name}s</h1>
                        </div>
                        <div className="-mb-2 py-4 flex flex-wrap flex-grow justify-between">
                            <div className="flex items-center py-2">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-search" type="text" placeholder="Search" />
                            </div>
                            <div className="flex items-center py-2">
                                <NavLink to={'/person/'+type+'/new'} className="inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline">
                                    Create new {name}
                                </NavLink>

                            </div>
                        </div>
                        <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                            <div className="align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200">
                                <table className="table-auto w-full">

                                    <thead>
                                        <tr className="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
                                            <th className="p-2 md:px-6 md:py-3 text-left font-medium">
                                                No.
                                            </th>
                                            <th className="p-2 md:px-6 md:py-3 text-left font-medium">
                                                Name
                                            </th>
                                            <th className="p-2 md:px-6 md:py-3 text-left font-medium">
                                                Reg No
                                            </th>
                                            <th className="p-2 md:px-6 md:py-3 text-left font-medium">
                                                Contact
                                            </th>
                                            <th className="p-2 md:px-6 md:py-3 text-left font-medium">
                                                Gender
                                            </th>
                                            <th className="p-2 md:px-6 md:py-3 text-left font-medium">
                                                Email
                                            </th>

                                            <th className="p-2 md:px-6 md:py-3 text-left font-medium">
                                                Status
                                            </th>
                                            <th className=" md:px-0 md:py-0 text-left font-medium">
                                                Actions
                                            </th>
                                            <th></th>
                                        </tr>
                                    </thead>

                                    <tbody className="bg-white">
                                        {persons.map((person) => (
                                            <tr id={person._id} key={persons.indexOf(person) + 1}>
                                                <td className="p-2 md:px-6 md:py-4 whitespace-no-wrap border-b border-gray-200">
                                                    {persons.indexOf(person) + 1}
                                                </td>
                                                <td className="p-2 text-sm md:px-6 md:py-4 whitespace-no-wrap border-b border-gray-200">
                                                    {person.fname} {person.lname}
                                                </td>
                                                <td className="p-2 md:px-6 md:py-4 whitespace-no-wrap border-b border-gray-200">
                                                    {person.regno} 
                                                </td>
                                                <td className="p-2 md:px-6 md:py-4 whitespace-no-wrap border-b border-gray-200">
                                                    <div className="text-sm leading-5 text-gray-900">
                                                        {person.contact}
                                                    </div>
                                                </td>
                                                <td className="p-2 md:px-6 md:py-4 whitespace-no-wrap border-b border-gray-200">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-green-800">
                                                        {person.gender}
                                                    </span>
                                                </td>
                                                <td className="p-2 md:px-6 md:py-4 whitespace-no-wrap border-b border-gray-200">
                                                    <div className="text-sm leading-5 text-gray-900">
                                                        {person.email}
                                                    </div>
                                                </td>
                                                <td className="p-2 md:px-6 md:py-4 whitespace-no-wrap border-b border-gray-200">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                        active
                                                    </span>
                                                </td>


                                                <td className=" whitespace-no-wrap border-b border-gray-200">
                                                    <NavLink to={"/person/"+type+"/update/" + person._id}
                                                        className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline text-lg" >
                                                        <FiEdit />
                                                    </NavLink>
                                                </td>
                                                <td className="ml-4  pr-2 md:pr-3 whitespace-no-wrap border-b border-gray-200">
                                                    <NavLink to="#"
                                                        className="text-indigo-600 hover:text-indigo-900 focus:outline-none  text-lg focus:underline" >
                                                        <FaTrash onClick={() => handleDelete(person._id)}/>
                                                    </NavLink>
                                                </td>


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

export default PersonDetails
