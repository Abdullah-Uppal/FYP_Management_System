import React from 'react'
import Delete from './Delete'
import Edit from './Edit.js'

const SupervisorAllocation = () => {
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
      <select className='select select-info w-full min-w-[10rem]  mt-5 rounded-full border-zinc-700'>
      <option value={0}>Select the Supervisor</option>
        {
          supervisor.map((supervisor,index) =>{
            return <option key={index} value ={index}>{supervisor.id}</option>
          })
        }
      </select>
    </>
  )
}
const StudentGroups = ({groups}) =>{
  return(
  <>
      <select className='select select-info w-full min-w-[10rem] mt-5 rounded-full border-zinc-700'>
      <option value={0}>Select the Groups</option>
        {
          groups.map((group,index) =>{
            return <option key={index} value ={index} className='md:w-auto sm:w-auto'>{group.id}</option>
          })
        }
      </select>
    </>
    )
}

const CoSupervisor = ({cosupervisor} )=>{
  return(
      <>
        <select className='select select-info w-full min-w-[10rem] mt-5 rounded-full border-zinc-700'>
      <option value={0}>Select the CoSupervisor</option>
        {
          cosupervisor.map((cosupervisor,index) =>{
            return <option key={index} value ={index} className='md:w-auto sm:w-auto'>{cosupervisor.id}</option>
          })
        }
      </select>
      </>
  )
}
  return (
    <div className='h-auto w-auto bg-white-200'>
    <Supervisors supervisor={Supervisor}/>
    <StudentGroups groups={Groups}/>
    <CoSupervisor cosupervisor={CoSupervisors}/>
    <button className="btn ml-5 mt-5 rounded-md bg-blue-900 hover:bg-green-500 w-40">Submit</button>
    <div className="overflow-x-auto mt-10 ">
  <table className="table table-compact w-full">
    <thead>
      <tr>
      {heading.map(head =>{
        return(
          <>
        <th>{head.Advisor_Name}</th> 
        <th>{head.Project_Title}</th> 
        <th>{head.Project_Description}</th> 
        <th>{head.AssignmentDate}</th> 
        <th>{head.Edit}</th> 
        <th>{head.Delete}</th> 
        </>
        )
      })}
      </tr>
    </thead> 
    <tbody>
      <tr>
      {data.map(data =>{
        return(
            <>
            
            <td>{data.Name}</td> 
            <td>{data.Project_Title}</td> 
            <td>{data.Project_Description}</td> 
            <td>{data.AssignmentDate}</td> 
            <td>{<Edit/>}</td> 
            <td>{<Delete/>}</td>
            </>
        )
      })}
      </tr> 
    </tbody> 
  </table>
</div>
</div>
  )
}

export default SupervisorAllocation
