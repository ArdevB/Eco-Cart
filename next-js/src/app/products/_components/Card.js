const ProductCard = ({ product }) => {
  return (
    <div className="border border-gray-300 shadow-md rounded-xl px-4 py-3 hover:scale-105 transition-transform duration-300">
      <h2 className="text-3xl font-bold">{product.name}</h2>
      <div className="flex items-center gap-2 py-2">
        <span className="bg-green-200 text-gray-800 px-2 py-1 rounded-md">
          {product.brand}
        </span>
        <span className="bg-blue-200 text-gray-800 px-2 py-1 rounded-md">
          {product.category}
        </span>
      </div>
      <p className="text-lg py-2">${product.price.toFixed(2)}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
