import { useEffect, useState } from "react";
import {
  HiOutlineSearch,
  HiOutlinePlus,
  HiOutlinePencil,
  HiOutlineTrash,
  HiOutlineLocationMarker,
  HiOutlineEye,
} from "react-icons/hi";
import { Link } from "react-router-dom";

const statusStyles = {
  available: "bg-light-green-200 text-teal-900",
  reserved: "bg-deep-orange-900 text-white",
  adopted: "bg-blue-gray-100 text-teal-700",
};

const AdminAllCats = () => {
  const [error, setError] = useState("");
  const [allCats, setAllCats] = useState([]);
  const getAllCats = async () => {
    try {
      setError("");
      const url = import.meta.env.VITE_CATS;
      const req = await fetch(`${url}/cats`);
      const res = await req.json();
      const cats = res.filter((cat) => cat.status !== "pending");
      setAllCats(cats);
    } catch (e) {
      setError(e.message || "Failed to load cats. Please try again.");
    }
  };

  useEffect(() => {
    getAllCats();
  }, []);
  return (
    <div className="space-y-6">
      {error ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="p-8 bg-red-50 border-2 border-red-400 text-red-700 rounded-lg max-w-md text-center">
            <h2 className="text-2xl font-bold mb-3">Error</h2>
            <p className="text-lg">{error}</p>
          </div>
        </div>
      ) : (
        <>
          <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-[11px] tracking-[0.2em] text-color-primary font-semibold">
                CATALOG
              </p>
              <h1 className="font-display font-bold text-color-primary text-5xl sm:text-5xl tracking-tight leading-[1.05] mt-2">
                All Cats
              </h1>
              <p className="mt-3 text-gray-700 max-w-xl text-xl">
                Every resident in the sanctuary, ready for review and care.
              </p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 primary-bg hover:bg-teal-800 text-white font-semibold text-md rounded-full px-5 py-3 transition-colors shadow-lg shadow-teal/20">
              <HiOutlinePlus className="text-base" /> Add new cat
            </button>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {allCats.map((cat) => (
              <article
                key={cat.id}
                className="group bg-white rounded-3xl shadow-soft overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] bg-sand relative overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span
                    className={` absolute top-3 left-3 text-[10px] tracking-[0.15em] font-bold px-2.5 py-1 rounded-full ${statusStyles[cat.status]}`}
                  >
                    {cat.status.toUpperCase()}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display font-extrabold text-xl text-color-primary leading-tight">
                        {cat.name}
                      </h3>
                      <p className="text-md text-gray-700 mt-0.5">
                        {cat.breed}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] tracking-[0.15em] font-semibold text-gray-700">
                        AGE
                      </p>
                      <p className=" font-bold text-color-primary">
                        {cat.age} <span>yrs</span>
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-4 text-md text-gray-700">
                    <span className="inline-flex items-center gap-1">
                      <HiOutlineLocationMarker />
                    </span>
                    <span>{cat.location}</span>
                    <span>•</span>
                    <span>{cat.gender}</span>
                  </div>

                  <div className="mt-5 pt-4 border-t border-black/5 flex items-center gap-2">
                    <button className="flex-1 inline-flex items-center justify-center gap-1.5 bg-teal-50 hover:bg-teal-700 hover:text-white text-color-primary font-semibold text-md rounded-full px-4 py-2 transition-colors duration-500">
                      <HiOutlinePencil /> Edit
                    </button>
                    <Link to={`/admin/cat-details/${cat.id}`}>
                      <button className="h-9 w-9 rounded-full bg-gray-50 hover:bg-gray-400 text-gray-800 hover:text-black flex items-center justify-center transition-colors duration-500">
                        <HiOutlineEye />
                      </button>
                    </Link>
                    <button
                      title="Remove"
                      className="h-9 w-9 rounded-full bg-red-50 hover:bg-red-400 text-deep-orange-800 hover:text-white flex items-center justify-center transition-colors duration-500"
                    >
                      <HiOutlineTrash />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AdminAllCats;
