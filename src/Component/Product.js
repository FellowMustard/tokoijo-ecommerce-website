import React, { useState } from "react";
import "./Product.css";
import { GiRoundStar } from "react-icons/gi";

function Product({
  id,
  title,
  image,
  price,
  rating,
  discount,
  sold,
  location,
}) {
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const [ratingStar, setRatingStar] = useState([1, 2, 3, 4, 5]);
  return (
    <div className="product">
      <div className="image-container-product">
        <img className="product-image" src={image} />
      </div>

      <div className="product-info">
        <p className="product-title">
          {title.length >= 48 ? title.substring(0, 45) + "..." : title}
        </p>
        <p className="product-price">
          <strong>{`${formatter.format(
            price * ((100 - discount) / 100)
          )}`}</strong>
        </p>
        <div className={discount > 0 ? "discount active" : "discount"}>
          <span className="discount-text">{discount}%</span>
          <del className="original-price">{formatter.format(price)}</del>
        </div>
        <div className="product-rating">
          {ratingStar.map((star) => {
            let starClass =
              star <= rating ? "product-star active" : "product-star";
            return (
              <span className={starClass} key={star}>
                <GiRoundStar />
              </span>
            );
          })}
          <span className="rating-number">{rating}</span>
        </div>
        <div className="product-location">{location}</div>
        <div className="sold-total">{sold} sold</div>
      </div>
    </div>
  );
}

export default Product;
