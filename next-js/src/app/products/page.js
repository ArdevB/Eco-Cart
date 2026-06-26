import ProductCard from "./_components/Card";

const Products = async ({ searchParams }) => {
  const query = await searchParams;

  const products = await fetch(
    "https://eco-cart-chi.vercel.app/api/products"
  ).then((res) => res.json());

  return (
    <div className="container mx-auto px-4 py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
