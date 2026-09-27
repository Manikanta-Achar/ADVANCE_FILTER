import React from "react";
import "./product.css";
import Card from "../components/Card";

const Product = ({ result }) => {
  return <section className="card-container">{result}</section>;
};

export default Product;
