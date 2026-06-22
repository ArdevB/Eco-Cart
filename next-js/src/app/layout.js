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
      <body>{children}</body>
    </html>
  );
}
