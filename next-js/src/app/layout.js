import "./globals.css";

export const metadata = {
  title: "Eco-Cart",
  description: "A sustainable e-commerce platform for eco-friendly products.",
  keywords:
    "eco-friendly, sustainable, e-commerce, green products, online shopping, buy and sell",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <header className="shadow">
        <div className="container px-4 mx-auto py-2">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-green-600">Eco-Cart</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/" className="text-gray-700 hover:text-green-600">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-gray-700 hover:text-green-600"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-700 hover:text-green-600"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className="text-gray-700 hover:text-green-600"
                  >
                    Blogs
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <body>{children}</body>
      <footer className="bg-gray-100 py-4 mt-8">
        <div className="container px-4 mx-auto text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Eco-Cart. All rights reserved.
          </p>
        </div>
      </footer>
    </html>
  );
}
