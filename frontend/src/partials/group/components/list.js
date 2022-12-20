import React from 'react'
import Item from './item'

const List = ({handleClick}) => {
  return (
    
<ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700 rounded-xl">
    <Item key={0} handleClick={handleClick}/>
    <Item key={1} handleClick={handleClick}/>
    <Item key={2} handleClick={handleClick}/>
    <Item key={3} handleClick={handleClick}/>
    <Item key={4} handleClick={handleClick}/>
    <Item key={5} handleClick={handleClick}/>
</ul>

  )
}

export default List