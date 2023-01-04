import React from 'react'
import Item from './item'

const List = ({count,members,max,handleClick}) => {
 
  return (
    
<ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700 rounded-xl" >
    {
      members.map((member,index) => {
        return <Item key={index} handleClick={handleClick} member={member} count={count} max={max} />
      })
    }
    {/* <Item key={0} handleClick={handleClick}/>
    <Item key={1} handleClick={handleClick}/>
    <Item key={2} handleClick={handleClick}/>
    <Item key={3} handleClick={handleClick}/>
    <Item key={4} handleClick={handleClick}/>
    <Item key={5} handleClick={handleClick}/> */}
</ul>

  )
}

export default List