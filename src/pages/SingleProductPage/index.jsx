import React from "react";
import { NavLink } from "react-router-dom";
import { products } from "../ProductPage/constants";

const SingleProductPage = ({ match }) => {
  const productId = match.params.id;
  const productName = products.find((el) => el.id === productId).icon;
  return (
    <div>
      <p> Single product page</p>
      <NavLink to="/products">Go Back</NavLink>
      <p>
        I am the product {productId} - {productName}
      </p>
    </div>
  );
};

export default SingleProductPage;
