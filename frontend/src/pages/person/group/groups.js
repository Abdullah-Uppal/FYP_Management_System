import React,{useState,useEffect} from 'react'
import GroupCard from '../../../partials/group/groupCard'
import axios from 'axios';

const Groups = () => {

    const [groups, setGroups] = useState([])

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
        console.log('data',data)
            setGroups(data);
      })
    }, []);
    return (


        //grid of auto rows and columns
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-5 min-w-max">
            {
                groups.map((group,index) => {
                    return <GroupCard key={index} group={group}/>
                })
            }
            
        </div>

    )
}

export default Groups