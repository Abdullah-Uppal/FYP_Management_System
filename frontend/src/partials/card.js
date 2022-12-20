import React from "react";
import { MdSaveAlt, MdDelete } from "react-icons/md";

const Card = ({id,title,description,url,handleClick,handleDelete, date}) => {
  return (
    <div className="card w-96 bg-base-100  drop-shadow-lg image-full">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body py-2 my-3">
        <h2 className="card-title">{title}</h2>
        <p>{description.length < 100 ? description : description.substring(0,100)+'...'}</p>
        <small>{date && new Date(date).toLocaleDateString()}</small>
        <div className="card-actions justify-end">
            
            <MdSaveAlt className="cursor-pointer" size={30} onClick={()=>handleClick(url)}/>
            <MdDelete className="cursor-pointer" size={30} onClick={()=>handleDelete(id,url)}/>
          {/* ?<button className="btn btn-primary px-5" onClick={()=>handleClick(url)}>View</button> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
