import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Model from '../partials/group/components/model'
import GroupCard from '../partials/group/groupCard';

const StudentGroup = () => {
  const [members,setMembers] =useState([]);
  const [myGroup,setMyGroup] = useState({})
  const id = JSON.parse(localStorage.getItem('user')).id
  useEffect(() => {
    getPersons().then((data) => {
        setMembers(data);
    });
    getMyGroup().then((d)=>{
      console.log(d)
      if (d) {
        d.students = d.students.map(student => student.regno);
      }
      
      console.log('myGroup',d)
      setMyGroup(d)
    })
}, []);

  const [count, setCount] = useState(0);
  const [group, setGroup] = useState([]);

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

  const url1 = "http://localhost:3000/group/getStudentGroup/"+id;
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

  const handleClick = (e) => {
    console.log('e',e);
    setCount(count + 1);
    setGroup([...group, members[count]]);
    console.log(members.length,members.filter((member) => member.id !== e.id));
    setMembers(members.filter((member) => member.id !== e.id));
    console.log(members.length);
  };
  const addGroup = () =>{
    console.log('group',group);
  }
  console.log(myGroup)
  return(
    <>
   { myGroup ?  <Model min={2} max={4} members={members} count={count} handleClick={handleClick} addGroup={addGroup} /> : <GroupCard group = {myGroup}/>}
   </>
  )
  
}

export default StudentGroup