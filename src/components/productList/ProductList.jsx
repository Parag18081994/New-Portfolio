import React from "react";
import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl">
        <div className="pl-texts">
          <h1 className="pl-title">Create & inspire. It Show time</h1>
          <p className="pl-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            numquam corporis eos minus quod dicta quae recusandae, rerum
            accusantium totam consectetur dignissimos! Perferendis asperiores,
            optio praesentium consequatur consectetur corporis blanditiis.
          </p>
        </div>
        <div className="pl-list">
          {products.map((item )=>( 
          <Product key={item.id} img={item.img} link={item.link} />))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
