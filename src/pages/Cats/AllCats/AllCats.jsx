import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPaw, FaPlus, FaMapMarkerAlt } from "react-icons/fa";

const AllCats = () => {
  const [cats, setCats] = useState([]);

  const getAllCats = async () => {
    try {
      const req = await fetch("http://localhost:3000/cats", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await req.json();
      setCats(data);
    } catch (error) {
      console.error("Error fetching cats:", error);
    }
  };

  useEffect(() => {
    getAllCats();
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pt-10 pb-20 transition-colors duration-300">
      <div className="w-full mx-auto px-6 md:px-10 lg:px-16">
        <div className="mb-10 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 text-center md:text-left">
          <div>
            <h1 className="text-4xl font-extrabold text-black dark:text-white flex items-center justify-center md:justify-start gap-3">
              Meet Our Cats <FaPaw className="text-teal-500" size={28} />
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-3 text-lg max-w-2xl">
              Every cat here is looking for a loving home. Use the filters to
              find a feline friend that matches your lifestyle.
            </p>
          </div>
          <Link
            to="/add-new-cat"
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            Add Your Cat
            <FaPlus className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <aside className="w-full md:w-64 shrink-0">
            <div className="bg-white dark:bg-gray-800 rounded-2xl md:rounded-3xl p-5 md:p-7 shadow-sm border border-gray-100 dark:border-gray-700 sticky top-24 z-10">
              <h2 className="text-lg md:text-xl font-bold text-black dark:text-white mb-4 md:mb-8 border-b border-gray-100 dark:border-gray-700 pb-3 md:pb-4 flex items-center gap-2">
                <FaPaw className="text-teal-500" size={18} /> Filters
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-0">
                <div className="md:mb-8">
                  <h3 className="text-xs md:text-sm font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-3 md:mb-4">
                    Gender
                  </h3>
                  <div className="space-y-2.5 md:space-y-3">
                    <label className="flex items-center gap-2 md:gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="w-4 h-4 md:w-5 md:h-5 rounded border-gray-300 dark:border-gray-600 text-teal-600 focus:ring-teal-500 bg-gray-50 dark:bg-gray-700 cursor-pointer"
                      />
                      <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium group-hover:text-black dark:group-hover:text-white transition-colors">
                        Any
                      </span>
                    </label>
                    <label className="flex items-center gap-2 md:gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="w-4 h-4 md:w-5 md:h-5 rounded border-gray-300 dark:border-gray-600 text-teal-600 focus:ring-teal-500 bg-gray-50 dark:bg-gray-700 cursor-pointer"
                      />
                      <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium group-hover:text-black dark:group-hover:text-white transition-colors">
                        Male
                      </span>
                    </label>
                    <label className="flex items-center gap-2 md:gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="w-4 h-4 md:w-5 md:h-5 rounded border-gray-300 dark:border-gray-600 text-teal-600 focus:ring-teal-500 bg-gray-50 dark:bg-gray-700 cursor-pointer"
                      />
                      <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium group-hover:text-black dark:group-hover:text-white transition-colors">
                        Female
                      </span>
                    </label>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs md:text-sm font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-3 md:mb-4">
                    Life Stage
                  </h3>
                  <div className="space-y-2.5 md:space-y-3">
                    <label className="flex items-center gap-2 md:gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="w-4 h-4 md:w-5 md:h-5 rounded border-gray-300 dark:border-gray-600 text-teal-600 focus:ring-teal-500 bg-gray-50 dark:bg-gray-700 cursor-pointer"
                      />
                      <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium group-hover:text-black dark:group-hover:text-white transition-colors">
                        Kitten
                      </span>
                    </label>
                    <label className="flex items-center gap-2 md:gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="w-4 h-4 md:w-5 md:h-5 rounded border-gray-300 dark:border-gray-600 text-teal-600 focus:ring-teal-500 bg-gray-50 dark:bg-gray-700 cursor-pointer"
                      />
                      <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium group-hover:text-black dark:group-hover:text-white transition-colors">
                        Adult
                      </span>
                    </label>
                    <label className="flex items-center gap-2 md:gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="w-4 h-4 md:w-5 md:h-5 rounded border-gray-300 dark:border-gray-600 text-teal-600 focus:ring-teal-500 bg-gray-50 dark:bg-gray-700 cursor-pointer"
                      />
                      <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium group-hover:text-black dark:group-hover:text-white transition-colors">
                        Senior
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <main className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {cats.map(
                ({
                  id,
                  story,
                  image,
                  name,
                  status,
                  gender,
                  breed,
                  lifeStage,
                }) => (
                  <div
                    key={id}
                    className="bg-white dark:bg-gray-800 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 group flex flex-col"
                  >
                    <div className="relative h-64 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                      <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-teal-600 dark:text-teal-400">
                        {status || "Available"}
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-extrabold text-black dark:text-white">
                          {name}
                        </h3>
                        <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                          {gender}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        {story}
                      </p>

                      <div className="flex items-center justify-between mt-auto pt-5 border-t border-gray-100 dark:border-gray-700">
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center gap-1">
                          <FaMapMarkerAlt className="h-4 w-4" />
                          {cats.location || "Cairo"}
                        </span>
                        <Link
                          to={`/catDetails/${id}`}
                          className="bg-teal-50 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 hover:bg-teal-500 hover:text-white dark:hover:bg-teal-500 dark:hover:text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-sm flex items-center gap-2"
                        >
                          Meet {name} <FaPaw size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AllCats;
