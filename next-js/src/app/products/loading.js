const LoadingCard = () => {
  return (
    <div className="border border-gray-300 shadow-md rounded-xl px-4 py-3 animate-pulse">
      <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
      <div className="flex gap-2 py-2">
        <div className="h-8 w-20 bg-gray-300 rounded-md"></div>
        <div className="h-8 w-24 bg-gray-300 rounded-md"></div>
      </div>
      <div className="h-6 bg-gray-300 rounded w-1/3 my-3"></div>
      <div className="h-10 bg-gray-300 rounded-md w-32 mt-2"></div>
    </div>
  );
};

const ProductsLoader = () => {
  return (
    <div className="container mx-auto px-4 py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
    </div>
  );
};

export default ProductsLoader;
