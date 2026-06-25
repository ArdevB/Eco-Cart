"use client";

const ProductByIdError = ({ error }) => {
  return <div className="text-red-500 py-4 text-center">{error.message}</div>;
};

export default ProductByIdError;
