import React from "react";
import "./ElectronicProduct.css";
import './Product.css'
import { useStateValue } from "./StateProvider";

function ElectronicProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="electronicproduct__info">
        <p>{title}</p>
        <p className="electronicproduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="electronicproduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default ElectronicProduct;
