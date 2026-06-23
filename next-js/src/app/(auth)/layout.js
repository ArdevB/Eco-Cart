function AuthLayout({ children }) {
  return (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl text-center font-bold text-green-700">Welcome to Eco-Cart</h1>
      {children}
    </div>
  );
}
export default AuthLayout;
