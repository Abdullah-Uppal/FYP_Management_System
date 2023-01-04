import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
import axios from "axios";
import UiTable from "./uiTable";
import Model from "./model";

const Committee = () => {
  const [committees, setCommittees] = useState([]);
  // const [committee, setCommittee] = useState([]);
  //   let arr = [];

  useEffect(() => {
    // getAdvisors().then((data) => {
    //   getCommittee(data.supervisor);
    // });
    getCommittees().then(res => {
      console.log(res.data);
      setCommittees(res.data);
      getAdvisors();
    })
  }, []);


  // const committee_url = "http://localhost:3000/committee/getCommittees";
  const getCommittees = async () => {
    // await getAdvisors();
    return await axios.get("http://localhost:3000/committee/getCommittees");
  }
  const deleteCommittee = async (id) => {
    await axios.delete("http://localhost:3000/committee/deleteCommittee/"+id)
      .then(res => {
        setCommittees(committees.filter(c => c._id.toString() !== id));
      }).catch(err => {
        console.log(err);
      });
  }
  // const getCommittee = async (advisors) => {
  //   axios.get(committee_url).then((res) => {
  //     // setAdvisors(advisors);
  //     setCommittee(res.data.members);
  //     // start filtering out members in committee
  //     res.data.members.forEach(element => {
  //         advisors = advisors.filter(each => each._id !== element._id)
  //     });
  //     setCommittees(advisors);
  //   }).catch(err => {
  //     console.log(err);
  //   });
  // };

  // const url = "http://localhost:3000/supervisor/getSupervisor";
  // const getAdvisors = async () => {
  //   try {
  //     return await axios.get(url).then((res) => res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // // const add_committee_url = "http://localhost:3000/committee/addMember";
  // const addCommittee = async (id) => {
  //   axios
  //     .post(add_committee_url, { id: id })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // const delete_committee_url = "http://localhost:3000/committee/deleteMember/";
  // const deleteCommittee = async (id) => {
  //   axios
  //     .delete(delete_committee_url + id)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const handleAdd = (id) => {
  //   setCommittee([
  //     ...committee,
  //     ...advisors.filter((advisor) => advisor._id === id),
  //   ]);
  //   setAdvisors(advisors.filter((advisor) => advisor._id !== id));
  //   console.log(id);
  //   addCommittee(id);
  // };
  // const handleDelete = (id) => {
  //   console.log(id);

  //   setAdvisors([...advisors, ...committee.filter((com) => com._id === id)]);

  //   //   setAdvisors(advisors.filter((advisor) => advisor._id !== id));
  //   setCommittee(committee.filter((com) => com._id !== id));
  //   deleteCommittee(id);
  // };

  const [advisors, setAdvisors] = useState([]);
  const [advisorsToAdd, setAdvisorsToAdd] = useState([]);
  const handleAddClick = (id) => {
    setAdvisorsToAdd([...advisorsToAdd, id]);
    setAdvisors(advisors.filter(a => a._id.toString() !== id));
  }
  const handleAddCommittee = async () => {
    console.log(advisorsToAdd);
    setAdvisorsToAdd([]);
    await axios.post('http://localhost:3000/committee/createCommittee', {
      members: advisorsToAdd,
    }).then(res => {
      console.log(res.data);
      getCommittees().then(res => {
        console.log(res.data);
        setCommittees(res.data);
        getAdvisors();
      })
    }).catch(err => {
      console.log(err);
    })

  }
  const handleCancel = () => {
    getAdvisors();
    setAdvisorsToAdd([]);
  }

  const getAdvisors = async () => {
    const url = "http://localhost:3000/supervisor/notInCommittee";
    await axios.get(url).then((res) => {
      setAdvisors(res.data);
    });
  }

  return (
    <div className="flex flex-col gap-5 p-3">
      <Model members={advisors} fetch={getAdvisors} handleClick={handleAddClick} handleCancel={handleCancel} handleAdd={handleAddCommittee}/>
        <UiTable
          title={"Committees"}
          objs={committees}
          handleEvent={deleteCommittee}
          btnTitle={"Delete"}
        />
    </div>
  );
};

export default Committee;
