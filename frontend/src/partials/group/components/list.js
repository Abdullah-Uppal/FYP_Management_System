import React from 'react'
import Item from './item'

const List = (handleClick) => {
  return (
    
<ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700 rounded-xl">
    <Item handleClick={handleClick}/>
    <Item handleClick={handleClick}/>
    <Item handleClick={handleClick}/>
    <Item handleClick={handleClick}/>
    <Item handleClick={handleClick}/>
    <Item handleClick={handleClick}/>
</ul>

  )
}

export default List