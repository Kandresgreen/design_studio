import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import {ArrowLeft} from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-extrabold text-[#f36f40] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center px-4 py-2 bg-[#fa6f40] text-white rounded-md hover:bg-[rgba(250,131,84,1)] transition"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
