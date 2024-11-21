import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-5">
      <h1 className="text-4xl font-bold text-primary">404 - Page Not Found</h1>
      <p className="font-semibold text-gray-400">The page you are looking for does not exist.</p>
      <Link className="text-xl font-bold text-white p-3 rounded-xl bg-primary" to={'/dashboard'}>Go Back To Dashboard</Link>
    </div>
  );
}

export default NotFoundPage;
