import React from "react";
import { Link } from "react-router-dom";

const GadgetCard = ({ product }) => {
  const { price, product_title, product_image, product_id } = product;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-4 pt-4 ">
        <img
          src={product_image}
          alt=""
          className="rounded-xl w-72 h-44 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p>Price: ${price}</p>
        <div className="card-actions">
          <Link to={`/gadgetDetails/${product_id}`} className="btn btn-outline border-purple-600 border-4 text-purple-600">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GadgetCard;
