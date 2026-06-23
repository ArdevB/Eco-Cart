const LoginPage = () => {
  return (
    <div className="flex  justify-center p-6">
      <div className="w-xl max-w-md bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-8">Sign In</h2>

        <div className="space-y-5">
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="hello@example.com"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-700"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm text-gray-600">Password</label>
              <a href="#" className="text-sm text-green-800 hover:underline">
                Forgot password?
              </a>
            </div>

            <input
              type="password"
              placeholder="********"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-700"
            />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <span className="text-sm text-gray-600">Remember this device</span>
          </div>

          <button className="w-full bg-green-900 text-white py-3 rounded-xl font-medium hover:bg-green-800 transition">
            Sign In
          </button>
        </div>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>

          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-xs tracking-widest text-gray-400">
              OR CONTINUE WITH
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button className="border border-gray-200 rounded-xl py-3 hover:bg-gray-50">
            Google
          </button>

          <button className="border border-gray-200 rounded-xl py-3 hover:bg-gray-50">
            Apple
          </button>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
