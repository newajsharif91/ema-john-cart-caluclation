import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";
const ReviewItem = ({ product, handleRemoveItem }) => {
  const { id, name, price, quantity, img, ratings, sellers, stock, shipping } =
    product;
  return (
    <div className="review-item">
      <div className="">
        <img src={img} alt="" />
      </div>
      <div className="reiew-details-container">
        <div className="review-details">
          <p>{name}</p>
          <p>
            Price : $<small>{price}</small>
          </p>
          <p>
            <small>Quantity :{quantity}</small>
          </p>
          <p>
            <small>Shipping :{shipping}</small>
          </p>
          <p>
            <small>Rating: {ratings}</small>
          </p>
        </div>
        <div className="delete-container">
          <button onClick={() => handleRemoveItem(id)} className="btn-delete">
            <FontAwesomeIcon
              className="delete-icon"
              icon={faTrashAlt}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
