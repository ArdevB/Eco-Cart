const ProductsTable = () => {
  fetch("https://eco-cart-chi.vercel.app/api/products")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  return <div>ProductsTable</div>;
};

export default ProductsTable;
