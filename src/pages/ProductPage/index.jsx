import React from "react";
import { NavLink, Route } from "react-router-dom";
import "./product.css";
import { products } from "./constants";
import SingleProductPage from "../SingleProductPage";
// import SingleProductPage from "../SingleProductPage";

const ProductPage = () => (
  <>
    <div className="productPg">
      {products.map((product) => {
        return (
          <NavLink
            className="productLink"
            to={`/products/${product.id}`}
            key={product.id}
          >
            {product.id}: {product.icon}
          </NavLink>
        );
      })}
    </div>

    <Route
      path="/products"
      exact
      render={() => <div>I am the product page</div>}
    />
    <Route path="/products/:id" component={SingleProductPage} />
  </>
);

export default ProductPage;
