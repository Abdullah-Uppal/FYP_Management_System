import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

const Item = ({member,max,count,handleClick}) => {

   const [pointer,setPointer] = React.useState('cursor-pointer hover:cursor-pointer');

   const handleEvent = () => {
      count < max ? handleClick(member) : setPointer('cursor-not-allowed hover:cursor-not-allowed');
   }
  return (
    <li className="p-3 sm:pb-4 rounded-md">
    <div className="flex items-center space-x-4">
       <div className="flex-shrink-0">
          <img className="w-8 h-8 rounded-full" src="https://i.pravatar.cc/300" alt="Neil"/>
       </div>
       <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {member.fname+" "+member.lname}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
             {member.regno}
          </p>
       </div>
       <div className="flex-3 min-w-0">

          <p className={"text-sm items-center flex  font-medium text-gray-900 truncate dark:text-white hover:text-indigo-500 "+pointer} onClick={handleEvent}>
             <AiOutlinePlus/> Add
          </p>
       </div>
      
    </div>
 </li>
  )
}

export default Item