import { useNavigate, useParams } from "react-router-dom";
import { HiOutlineArrowLeft, HiOutlineVideoCamera } from "react-icons/hi";
import { useEffect, useState } from "react";

const CatDetail = () => {
  const { catID } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [viewedCat, setVeiwedCat] = useState({
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

  const getViewedCat = async () => {
      try {
        setError("");
        const url = import.meta.env.VITE_CATS;
        const req = await fetch(`${url}/cats/${catID}`);
        const res = await req.json();
        setVeiwedCat(res);
      } catch (e) {
        setError(e.message || "Failed to load cat details. Please try again.");
      }
    };

  useEffect(() => {
    getViewedCat();
  }, []);

  return (
    <div>
      {error ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="p-8 bg-red-50 border-2 border-red-400 text-red-700 rounded-lg max-w-md text-center">
            <h2 className="text-2xl font-bold mb-3">Error</h2>
            <p className="text-lg mb-4">{error}</p>
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] font-bold text-white bg-teal-500 hover:bg-teal-800 duration-500 px-4 py-2 rounded-lg"
            >
              <HiOutlineArrowLeft /> GO BACK
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-10">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] font-bold text-white bg-teal-500 hover:bg-teal-800 duration-500 px-4 py-2 rounded-lg"
          >
            <HiOutlineArrowLeft /> BACK TO EXPLORE
          </button>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-4">
              <div className="relative rounded-3xl overflow-hidden bg-ink aspect-square">
                <img
                  src={viewedCat.image}
                  alt={viewedCat.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="uppercase text-[10px] tracking-[0.18em] font-bold px-3 py-1.5 rounded-full bg-light-green-200 text-teal-800">
                    {viewedCat.status}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <h1 className="font-display font-bold text-teal-800 text-4xl sm:text-6xl tracking-tight leading-[1]">
                {viewedCat.name}
              </h1>
              <p className="mt-3 italic text-gray-800">
                "A gentle soul looking for a sun-drenched windowsill."
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                <div className="flex flex-col gap-3 bg-gray-200 rounded-xl p-5">
                  <p className="text-color-primary font-bold text-md uppercase">
                    Name
                  </p>
                  <h3 className="text-black text-lg font-bold">
                    {viewedCat.name}
                  </h3>
                </div>
                <div className="flex flex-col gap-3 bg-gray-200 rounded-xl p-5">
                  <p className="text-color-primary font-bold text-md uppercase">
                    age
                  </p>
                  <h3 className="text-black text-lg font-bold">
                    {viewedCat.age}
                  </h3>
                </div>
                <div className="flex flex-col gap-3 bg-gray-200 rounded-xl p-5">
                  <p className="text-color-primary font-bold text-md uppercase">
                    gender
                  </p>
                  <h3 className="text-black text-lg font-bold">
                    {viewedCat.gender}
                  </h3>
                </div>
                <div className="flex flex-col gap-3 bg-gray-200 rounded-xl p-5">
                  <p className="text-color-primary font-bold text-md uppercase">
                    breed
                  </p>
                  <h3 className="text-black text-lg font-bold">
                    {viewedCat.breed}
                  </h3>
                </div>
                <div className="flex flex-col gap-3 bg-gray-200 rounded-xl p-5">
                  <p className="text-color-primary font-bold text-md uppercase">
                    owner
                  </p>
                  <h3 className="text-black text-lg font-bold">
                    {viewedCat.owner}
                  </h3>
                </div>
                <div className="flex flex-col gap-3 bg-gray-200 rounded-xl p-5">
                  <p className="text-color-primary font-bold text-md uppercase">
                    temperament
                  </p>
                  <h3 className="text-black text-lg font-semibold">
                    {viewedCat.temperament}
                  </h3>
                </div>
              </div>
              <div className="mt-7">
                <p className="text-[10px] tracking-[0.2em] font-bold text-gray-700">
                  STORY
                </p>
                <div className="mt-3 space-y-3 text-sm text-gray-800 leading-relaxed">
                  <p>{viewedCat.story}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default CatDetail;
