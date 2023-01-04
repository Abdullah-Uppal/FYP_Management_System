import React from "react";
import Item from "./item";

const List = ({ members, handleClick }) => {
  console.log("Andar", members);
  return (
    <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700 rounded-xl">
      {members.map((member, index) => {
        return (
          <Item
            key={index}
            handleClick={handleClick}
            member={member}
          />
        );
      })}
    </ul>
  );
};

export default List;
