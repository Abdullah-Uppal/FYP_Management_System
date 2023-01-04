import React, { useState, useEffect } from 'react'
import Alert from '../utils/alert';
import axios from 'axios';

const Meeting = () => {


    const [alert, setAlert] = useState({});
    const [isAlert, setIsAlert] = useState(false);
    // const [id, setId] = useState(0);
    const [committee, setCommittee] = useState('');
    const [group, setGroup] = useState('');
    const [location, setLocation] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    const [committees, setCommittees] = useState([]);
    const [groups, setGroups] = useState([])
    useEffect(() => {
        // getAdvisors().then((data) => {
        //   getCommittee(data.supervisor);
        // }); 
        const getCommittees = async () => {
            // await getAdvisors();
            return await axios.get("http://localhost:3000/committee/getCommittees").then(res => {
                console.log(res.data);
                setCommittees(res.data);
    
    
            });
        }
        getCommittees()

    }, []);
    useEffect(() => {

        const url = "http://localhost:3000/group/getGroups";
        const getGroups = async () => {
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
        getGroups().then((data) => {
            console.log('data', data)
            setGroups(data);
        })
    }, []);
    // React.useEffect(() => {
    //     getStudentId();
    // }, [])

    //axios call to backend to upload file
    const scheduleMeeting = async (data, url) => {

        try {
            await axios.post(url, data)
                .then((res) => {
                    if (res.status === 200) {
                        console.log('Meeting Added Successfully')
                        setAlert({ redirect: '/meeting/all', message: 'Meeting Added Successfully' });
                        setIsAlert(true);
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




    // const getStudentId = async () => {
    //     try {
    //         await axios.get('http://localhost:3000/person/getPerson').then((res) => {
    //             setId(
    //                 res.data.person[Math.floor(Math.random() * res.data.person.length)]._id
    //             )
    //         }).catch((err) => {
    //             console.log(err)
    //         });
    //     } catch (err) {
    //         if (err.response.status === 500) {
    //             console.log('There was a problem with the server');
    //         } else {
    //             console.log(err.response.data.msg);
    //         }
    //     }
    // }

    const handleCommitteeChange = (e) => {
        console.log(e.target.value)
        setCommittee(e.target.value);
    };
    const handleGroupChange = (e) => {
        console.log(e.target.value)
        setGroup(e.target.value);
    };
    const handleDateChange = (e) => {
        console.log(e.target.value)
        setDate(e.target.value);
    };
    const handleTimeChange = (e) => {
        console.log(e.target.value)
        setTime(e.target.value);
    };
    const handleLocationChange = (e) => {
        console.log(e.target.value)
        setLocation(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const d = {
            group: group,
            committee: committee,
            location: location,
            time: date + ' ' + time,
            happened: false

        }
        console.log(d)

        const url = 'http://localhost:3000/meeting/addMeeting'
        scheduleMeeting(d, url)

    }


    return (
        <div>
            {isAlert && <Alert redirect={alert.redirect} message={alert.message} />}
            <form className="w-full max-w-lg bg-gray-100 rounded-lg py-10 px-5 " onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-3">
                    <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Groups
                        </label>
                        <div className="flex flex-wrap  mb-6">
                            <div className="mb-3 xl:w-96">
                                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={group} onChange={handleGroupChange} aria-label="Default select example">
                                    <option value={''}>Open this select Group</option>
                                    {
                                        groups.map((g) => {
                                            return (
                                                <option value={g._id}>{g.students.map(s => s.regno).join()}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>

                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            committees
                        </label>
                        <div className="flex flex-wrap  mb-6">
                            <div className="mb-3 xl:w-96">
                                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={committee} onChange={handleCommitteeChange} aria-label="Default select example">
                                    <option value={''}>Open this select committee</option>
                                    {
                                        committees.map((c) => {
                                            return (
                                                <option value={c._id}>{c.members.map(m=>m.name).join()}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">
                            Location
                        </label>
                        <input value={location} onChange={handleLocationChange} name='location' className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-location" type="text" placeholder="Location" required />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">
                            Date
                        </label>
                        <div className="flex flex-wrap  mb-3">
                            <div className="datepicker relative form-floating w-full">
                                <input datepicker type="date" value={date} onChange={handleDateChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select deadline" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">
                            Time
                        </label>
                        <div className="flex flex-wrap  mb-3">
                            <div className="datepicker relative form-floating w-full">
                                <input datepicker type="time" value={time} onChange={handleTimeChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select deadline" />
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2 md:mt-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Schedule Meeting</button>
            </form>



        </div>
    )
}

export default Meeting