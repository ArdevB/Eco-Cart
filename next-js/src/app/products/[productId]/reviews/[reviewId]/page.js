const ProductReview = async ({ params }) => {
  const productId = (await params).productId;
  const reviewId = (await params).reviewId;
  return (
    <div className="p-4">
      <h1 className="text-4xl">Product Id: {productId}</h1>
      <p>Review Id: {reviewId}</p>
    </div>
  );
};

export default ProductReview;
