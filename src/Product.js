import React from "react";
import "./Product.css";


function Product({ id, title, image, price, rating }) {
  

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        
      </div>

      <img src={image} alt="" />

      
    </div>
  );
}

export default Product;
