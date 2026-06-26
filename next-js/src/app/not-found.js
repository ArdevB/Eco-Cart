import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[85vh]">
      <h2 className="text-8xl font-bold">
        4 <span className="text-red-500 text-9xl">0</span> 4
      </h2>
      <h1 className="font-bold text-4xl">Page Not Found</h1>
      <Link href="/" className="mt-4 text-blue-500 hover:underline">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
