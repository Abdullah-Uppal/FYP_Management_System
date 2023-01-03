import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
import axios from "axios";
import UiTable from "./uiTable";

const Committee = () => {
  const [advisors, setAdvisors] = useState([]);
  const [committee, setCommittee] = useState([]);
  //   let arr = [];

  useEffect(() => {
    getAdvisors().then((data) => {
      getCommittee(data.supervisor);
    });
  }, []);

  const committee_url = "http://localhost:3000/committee/getMembers";
  const getCommittee = async (advisors) => {
    axios.get(committee_url).then((res) => {
      // setAdvisors(advisors);
      setCommittee(res.data.members);
      // start filtering out members in committee
      res.data.members.forEach(element => {
          advisors = advisors.filter(each => each._id !== element._id)
      });
      setAdvisors(advisors);
    }).catch(err => {
      console.log(err);
    });
  };

  const url = "http://localhost:3000/supervisor/getSupervisor";
  const getAdvisors = async () => {
    try {
      return await axios.get(url).then((res) => res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const add_committee_url = "http://localhost:3000/committee/addMember";
  const addCommittee = async (id) => {
    axios
      .post(add_committee_url, { id: id })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const delete_committee_url = "http://localhost:3000/committee/deleteMember/";
  const deleteCommittee = async (id) => {
    axios
      .delete(delete_committee_url + id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAdd = (id) => {
    setCommittee([
      ...committee,
      ...advisors.filter((advisor) => advisor._id === id),
    ]);
    setAdvisors(advisors.filter((advisor) => advisor._id !== id));
    console.log(id);
    addCommittee(id);
  };
  const handleDelete = (id) => {
    console.log(id);

    setAdvisors([...advisors, ...committee.filter((com) => com._id === id)]);

    //   setAdvisors(advisors.filter((advisor) => advisor._id !== id));
    setCommittee(committee.filter((com) => com._id !== id));
    deleteCommittee(id);
  };
  return (
    <div className="flex flex-col gap-5 p-3">
      {committee && committee.length > 0 && (
        <UiTable
          title={"Committee Members"}
          objs={committee}
          handleEvent={handleDelete}
          btnTitle={"Remove"}
        />
      )}
      {advisors && advisors.length > 0 && (
        <UiTable
          title={"Add Supervisor or Co-Supervisor to committee"}
          objs={advisors}
          handleEvent={handleAdd}
          btnTitle={"Add"}
        />
      )}
    </div>
  );
};

export default Committee;
