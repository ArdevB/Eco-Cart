const ProductDetails = async ({ params }) => {
  const productId = (await params).productId;

  const product = await fetch(
    `https://eco-cart-chi.vercel.app/api/products/${productId}`,
  )
    .then((res) => res?.json())
    .catch((error) => {
      throw new Error("Product not found");
    });

  return (
    <div>
      <h1 className="text-4xl">Product Details: {productId}</h1>
      <ul>
        <li>Name: {product.name}</li>
        <li>Brand: {product.brand}</li>
        <li>Price: ${product.price}</li>
        <li>Description: {product.description}</li>
      </ul>
    </div>
  );
};

export default ProductDetails;
