import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaPaw,
  FaMapMarkerAlt,
  FaHeart,
  FaBirthdayCake,
  FaInfoCircle,
} from "react-icons/fa";

const CatDetails = () => {
  const { id } = useParams();
  const [cat, setCat] = useState({
    id: "",
    name: "",
    age: 0,
    gender: "",
    owner: "",
    status: "",
    breed: "",
    temperament: "",
    story: "",
    image: "",
  });

  useEffect(() => {
    const fetchCatDetails = async () => {
      try {
        const req = await fetch(`http://localhost:3000/cats/${id}`);
        const data = await req.json();
        setCat(data);
      } catch (error) {
        console.error("Error fetching cat details:", error);
      }
    };
    fetchCatDetails();
  }, [id]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pt-10 pb-20 transition-colors duration-300">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">
        <Link
          to="/all-cats"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors mb-8 font-medium"
        >
          <FaArrowLeft /> Back to Friends
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row">
          <div className="md:w-1/2 relative h-72 sm:h-80 md:h-auto">
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-6 py-2 rounded-full text-sm font-bold text-teal-600 dark:text-teal-400 capitalize shadow-sm">
              {cat.status || "Available"}
            </div>
          </div>

          <div className="md:w-1/2 p-6 md:p-12 flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white capitalize mb-2">
                  {cat.name}
                </h1>
                <p className="text-lg text-gray-500 dark:text-gray-400 flex items-center gap-2 capitalize">
                  <FaMapMarkerAlt /> {cat.location || "Cairo"}
                </p>
              </div>
              <button className="bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 p-4 rounded-full transition-all duration-300">
                <FaHeart size={24} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-teal-50 dark:bg-gray-700/50 rounded-2xl p-4 flex flex-col items-center justify-center text-center">
                <FaPaw className="text-teal-500 mb-2" size={24} />
                <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-bold mb-1">
                  Breed
                </span>
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 capitalize">
                  {cat.breed || "Mixed"}
                </span>
              </div>
              <div className="bg-indigo-50 dark:bg-gray-700/50 rounded-2xl p-4 flex flex-col items-center justify-center text-center">
                <span className="text-indigo-500 font-bold text-xl mb-1">
                  {cat.gender === "male" ? "♂" : "♀"}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-bold mb-1">
                  Gender
                </span>
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 capitalize">
                  {cat.gender}
                </span>
              </div>
              <div className="bg-orange-50 dark:bg-gray-700/50 rounded-2xl p-4 flex flex-col items-center justify-center text-center">
                <FaBirthdayCake className="text-orange-500 mb-2" size={24} />
                <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-bold mb-1">
                  Age
                </span>
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 capitalize">
                  {cat.age}
                </span>
              </div>
              <div className="bg-rose-50 dark:bg-gray-700/50 rounded-2xl p-4 flex flex-col items-center justify-center text-center">
                <FaInfoCircle className="text-rose-500 mb-2" size={24} />
                <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-bold mb-1">
                  Temperament
                </span>
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 capitalize">
                  {cat.temperament}
                </span>
              </div>
            </div>

            <div className="mb-8 flex-1">
              <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                About {cat.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {cat.story ||
                  `${cat.name} is a lovely cat looking for a forever home. Adopt today to give the life they deserve.`}
              </p>
            </div>

            <Link
              to="/adopt-request"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-teal-500/30 flex items-center justify-center gap-3"
            >
              Adopt {cat.name} <FaPaw />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatDetails;
