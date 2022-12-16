import React, { useState } from 'react'
import Delete from '../partials/buttons/Delete'
import Edit from '../partials/buttons/Edit.js'

const SupervisorAllocation = () => {
  const [sup,setsupervisor] = useState(0)
  const [group,setgroups] = useState(0)
  const [cosupervisor,setcosupervisor] = useState(0)

  
    const heading = [{
        Advisor_Name: "Advisor Name",
        Project_Title :"Project Title",
        Project_Description :"Project Description" ,
        AssignmentDate :"Assignment Date",
        Edit : "Edit",
        Delete : "Delete",
    }]

    const data = [
        {
            Name : "Ali Ahemd",
            Project_Title : "Web Application",
            Project_Description :"Describe you project",
            AssignmentDate : "2022-12-12",
            Edit :Edit,
            delete : Delete
        }
    ]
    const Supervisor = [
      {
          id:1,
      },
      {
          id:2,
      },
      // {
      //     id:3,
      // },
      // {
      //     id:4,
      // },
  ]
  const Groups= [
    {
        id:1,
    },
    {
        id:2,
    },
    // {
    //     id:3,
    // },
    // {
    //     id:4,
    // },
]
const CoSupervisors= [
  {
      id:1,
  },
  {
      id:2,
  },
  {
      id:3,
  },
  {
      id:4,
  },
]


const Supervisors= ({supervisor}) =>{
  return (
    <>
      <select className='select select-info w-full min-w-[10rem]  mt-5  border-zinc-700' onChange={onChangeSupervisor}>
      <option value="0">Select the Supervisor</option>
        {
          supervisor.map((supervisor,index) =>{
            return <option key={index+1} value ={index+1}>{supervisor.id}</option>
          })
        }
      </select>
    </>
  )
}
const onChangeSupervisor = (e) =>{
  setsupervisor(e.target.value)
}

const onChangeGroups = (e) =>{
  setgroups(e.target.value)
}

const onChangeCoSupervisor = (e) =>{
  setcosupervisor(e.target.value)
}
const StudentGroups = ({groups}) =>{
  return(
  <>
      <select className='select select-info w-full min-w-[10rem] mt-5  border-zinc-700' onChange={onChangeGroups}>
      <option value={0}>Select the Groups</option>
        {
          groups.map((group,index) =>{
            return <option key={index+1} value ={index+1} className='md:w-auto sm:w-auto'>{group.id}</option>
          })
        }
      </select>
    </>
    )
}

const CoSupervisor = ({cosupervisor} )=>{
  return(
      <>
        <select className='select select-info w-full min-w-[10rem] mt-5  border-zinc-700' onChange={onChangeCoSupervisor}>
      <option value={0}>Select the CoSupervisor</option>
        {
          cosupervisor.map((cosupervisor,index) =>{
            return <option key={index+1} value ={index+1} className='md:w-auto sm:w-auto'>{cosupervisor.id}</option>
          })
        }
      </select>
      </>
  )
}
const onClick = () =>{
  if(sup !== 0 & group !== 0 & cosupervisor !== 0)
  {
    alert("Welldone") 
    // Query 
    setgroups(0)
    setcosupervisor(0)
    setsupervisor(0)
  
  }
  else{
    alert("Oops sorry")
    setgroups(0)
    setcosupervisor(0)
    setsupervisor(0)
  }
}
  return (
    <div className='h-auto w-auto bg-white-200'>
    <Supervisors supervisor={Supervisor}/>
    <StudentGroups groups={Groups}/>
    <CoSupervisor cosupervisor={CoSupervisors}/>
    <button className="btn mt-5 rounded-md  text-white bg-indigo-600 hover:bg-indigo-500 w-40" onClick={onClick}>Submit</button>
    <div className="overflow-x-auto mt-10 ">
  <table className="table table-compact w-full">
    <thead>
     
      {heading.map(head =>{
        return(
       <tr>
        <th>{head.Advisor_Name}</th> 
        <th>{head.Project_Title}</th> 
        <th>{head.Project_Description}</th> 
        <th>{head.AssignmentDate}</th> 
        <th>{head.Edit}</th> 
        <th>{head.Delete}</th> 
        </tr>
        )
      })}
      
    </thead> 
    <tbody>
      
      {data.map(data =>{
        return(
           <tr key={data.id}>
            
            <td>{data.Name}</td> 
            <td>{data.Project_Title}</td> 
            <td>{data.Project_Description}</td> 
            <td>{data.AssignmentDate}</td> 
            <td>{<Edit/>}</td> 
            <td>{<Delete/>}</td>
            </tr>
        )
      })}
    </tbody> 
  </table>
</div>
</div>
  )
}

export default SupervisorAllocation
