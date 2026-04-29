
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center p-5">
      <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full">
        <div className="text-center">
          <h1 className="text-8xl font-extrabold text-color-primary opacity-40">404</h1>
          <h2 className="text-4xl font-bold text-gray-800 mt-6 mb-2">Oops!</h2>
          <p className="text-xl text-gray-600 mb-8">Page not found</p>

          <p className="text-gray-600 text-base mb-10 leading-relaxed">
            We couldn't find the page you're looking for. It might have been moved or deleted.
          </p>

          <div className="mb-10">
            <img
              src="/unnamed (4).png"
              alt="Lost cat"
              className="w-32 h-32 mx-auto rounded-full shadow-md"
            />
          </div>

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 primary-bg hover:bg-teal-800 text-white font-semibold py-3 px-8 rounded-full transition-colors shadow-lg w-full"
          >
            <HiOutlineArrowLeft /> Go back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;