import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios, * as others from 'axios';







const Persons = () => {


    const [availale, setavailale] = useState(false);
    const [Input, setPerson] = useState({
        fname: "",
        lname: "",
        email: "",
        contact: "",
        gender: "",
        password: ""



    });


    const addPersonHandler = async () => {

        // const options = {
        //     method: 'POST',
        //     body: '{"fname":"from react","lname":"gf-fav","email":"good ","contact":"32323","gender":"@gmail.com","password":"M"}'
        //   };
          
        //   fetch('http://localhost:5000/person/addPerson', options)
        //     .then(response => response.json())
        //     .then(response => console.log(response))
        //     .catch(err => console.error(err));
        await axios.post("http://localhost:8000/person/addPerson", {
            lanme: String(Input.lname),
            fname: String(Input.fname),
            email: String(Input.email),
            contact: String(Input.contact),
            gender: String(Input.gender),
            password: String(Input.password)
        }).then(res => res.data).then(data => {
            console.log(data);
        }).catch(err => {

            console.log(err);
        });

    }

    const handleChange = (e) => {
        setPerson((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
        console.log(e.target.value+'name'+e.target.name);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       // console.log(Input, "input");
        addPersonHandler();
        alert("person Added Successfully");
    }


    return (
        <div>

            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            First Name
                        </label>
                        <input value={Input.fname} onChange={handleChange} name='fname' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Last Name
                        </label>
                        <input value={Input.lname} onChange={handleChange} name='lname' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Password
                        </label>
                        <input value={Input.password} onChange={handleChange} name='password' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
                        <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Email
                        </label>
                        <input value={Input.email} onChange={handleChange} name="email" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="@uet.edu.pk" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Contact Number
                        </label>
                        <input value={Input.contact} onChange={handleChange} name='contact' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="contact" type="text" placeholder="+9232........" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">

                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                            Gender
                        </label>
                        <div className="relative">
                            <select value={Input.gender} onChange={handleChange} name='gender' className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>

                </div>
                <button onClick={handleSubmit}  type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Register a user</button>
            </form>



        </div>
    )
}

export default Persons