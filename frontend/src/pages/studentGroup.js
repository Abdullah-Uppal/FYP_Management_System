import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Model from '../partials/group/components/model'
import GroupCard from '../partials/group/groupCard';

const StudentGroup = () => {
    const [members, setMembers] = useState([]);
    const [myGroup, setMyGroup] = useState({})
    const id = JSON.parse(localStorage.getItem('user')).id
    const [show, setShow] = useState(false);

    const [count, setCount] = useState(0);
    const [group, setGroup] = useState([]);
    const [title, setTitle] = React.useState("");
    
    useEffect(() => {


        const url = "http://localhost:3000/person/ungroupedStudents";
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

        const url1 = "http://localhost:3000/group/getStudentGroup/" + id;
        const getMyGroup = async () => {
            console.log('data fetch first')
            try {
                return await axios.get(url1).then((res) =>
                    res.data
                );


            } catch
            (error) {
                console.log(error)
            }
        };




        getMyGroup().then((d) => {
            // console.log('data', d)

            if (d.length !== 0) {
                setShow(true);
                // d.students = d.students.map(student => student.regno);
            }
            else {
                getPersons().then((data) => {
                    console.log('data', data)
                    setMembers(data.filter((member) => member._id !== id));
                    setGroup([...group, ...data.filter((member) => member._id === id)]);
                    setCount(count + 1);

                });
            }
            // console.log('myGroup', d)
            setMyGroup(d)
        })
    }, [id]);




    const handleClick = (e) => {
        console.log('e', e);
        setGroup([...group, members[members.indexOf(e)]]);
        setCount(count + 1);

        console.log('members:', members.length, members.filter((member) => member._id !== e._id));
        setMembers(members.filter((member) => member._id !== e._id));
        console.log(members.length);
    };
    const addGroup = () => {
        console.log('title', title, 'group', group);
        const std = group.map((student) => student._id);
        const data = {
            id: title,
            students: std
        }
        AddGroup(data)
    }
    const url1 = "http://localhost:3000/group/addGroup/";
    const AddGroup = async (data) => {
        console.log('data fetch first')
        try {
            return await axios.post(url1, data).then((res) => {
                if (res.status === 200) {
                    alert('data is added')

                }
            });


        } catch
        (error) {
            console.log(error)
        }
    };
    return (
        <>
            {show ? <GroupCard group={myGroup} /> : <Model min={2} max={4} setTitle={setTitle} members={members} count={count} handleClick={handleClick} addGroup={addGroup} />}
        </>
    )

}

export default StudentGroup