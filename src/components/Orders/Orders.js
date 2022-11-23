import React from "react";
import { useLoaderData } from "react-router-dom";

const Orders = () => {
  const products = useLoaderData();
  return (
    <div>
      <h1>Total Product {products.length}</h1>
    </div>
  );
};

export default Orders;
