import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetailsPage = () => {
  const params = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    if (!params.id) return;

    fetch(`https://eco-cart-chi.vercel.app/api/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [params]);

  if (!product) return <h1>Loading...</h1>; 

  return (
    <div>
      <h1>Product Details</h1>
      <ul>
        <li>ID: {product._id}</li>
        <li>Name: {product.name}</li>
        <li>Brand: {product.brand}</li>
        <li>Price: {product.price}</li>
        <li>Category: {product.category}</li>
        <li>Description: {product.description}</li>
      </ul>
    </div>
  );
};

export default ProductDetailsPage;
