import React from "react";

const Card = ({title,description,url,handleClick}) => {
    console.log(description.length)
  return (
    <div className="card w-96 bg-base-100  drop-shadow-lg image-full">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body py-2 my-3">
        <h2 className="card-title">{title}</h2>
        <p>{description.length < 100 ? description : description.substring(0,100)+'...'}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary px-5" onClick={()=>handleClick(url)}>View</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
