import { Link } from "react-router-dom";
import React from "react";

export default function HomePagePetCare() {
  const [darkMode, setDarkMode] = React.useState(
    localStorage.getItem("theme") === "dark"
  );
  const [location, setLocation] = React.useState("");
  const [petType, setPetType] = React.useState("Cat");
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const pets = [
    { id: 1, name: "bsbosa", type: "Friendly Cat", age: "3 Months",location:"Giza", 
      image:"https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=800&q=80"},
    { id: 2, name: "biso", type: "Cute Cat", age: "8 Months",location:"Cairo",
      image:"https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80"},
    { id: 3, name: "mshmsha", type: "Helpful Cat", age: "1 Year", location:"Alexandria",
      image:"https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?auto=format&fit=crop&w=800&q=80"}
  ];
  const [filteredPets, setFilteredPets] = React.useState(pets);

  const handleSearch = () => {
if (location.trim().length < 4) {
  setError("Please enter at least 4 characters");
  return;
}
    setError("");
const searchLocation = location.trim().toLowerCase();

const result = pets.filter((pet) => {
  const locationMatch =
    pet.location.toLowerCase().includes(searchLocation);

  const typeMatch =
    petType === "Cat"
      ? true
      : pet.type.toLowerCase().includes(
          petType.toLowerCase()
        );

  return locationMatch && typeMatch;
});
setFilteredPets(result);  };

  return (
    <div className="min-h-screen bg-[#f7f7f7] dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">

      <section className="px-4 sm:px-8 md:px-16 py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Find a <span className="text-teal-500 dark:text-teal-400 italic">loving</span>
            <br />
            home for every cat
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-4 text-sm sm:text-base max-w-md">
            Connecting caring people with pets who need homes.
          </p>

          <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-4 mt-8 flex flex-col sm:flex-row gap-3 w-full max-w-2xl transition-colors duration-300">
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-xl px-4 py-2.5 w-full sm:flex-1 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
            />
            <select
              value={petType}
              onChange={(e) => setPetType(e.target.value)}
              className="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-xl px-4 py-2.5 w-full sm:w-auto text-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
            >
              <option>Cat</option>
              <option>Friendly Cat</option>
              <option>Big Cat</option>
              <option>Small Cat</option>
            </select>
            <button
              onClick={handleSearch}
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-colors whitespace-nowrap"
            >
              Search
            </button>
                      <button
  onClick={() => {
    setLocation("");
    setFilteredPets(pets);
    setError("");
  }}

    className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-colors whitespace-nowrap"
>
  Reset
</button>
          </div>


          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl p-3 shadow-lg w-fit mx-auto transition-colors duration-300">
          <img
            src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?auto=format&fit=crop&w=800&q=80"
            className="w-[160px] sm:w-[220px] md:w-[280px] object-contain rounded-2xl"
            alt="Cute cat"
          />
        </div>
      </section>

      <section className="px-4 sm:px-8 md:px-16 py-12">
        <h3 className="text-2xl font-bold text-center mb-10">How it works</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: "Find Cats", desc: "Search cats easily by location and type." },
            { title: "Meet with Cats", desc: "Schedule a meet before adoption." },
            { title: "Adopt Cat", desc: "Take your new friend home." },
          ].map((step, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-3xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-300 flex items-center justify-center rounded-full mx-auto mb-4 font-bold text-lg">
                {i + 1}
              </div>
              <h4 className="font-semibold text-lg">{step.title}</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-8 md:px-16 py-12">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-bold">Featured Cats</h3>
          <Link to="/all" className="text-teal-600 dark:text-teal-400 text-sm hover:underline">
            View all Cats →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPets.map((pet) => (
            <div key={pet.id} className="bg-white dark:bg-gray-800 rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img src={pet.image} className="w-full h-56 sm:h-64 object-cover" alt={pet.name} />
              <div className="p-5 sm:p-6">
                <h4 className="text-xl font-bold capitalize">{pet.name}</h4>
                <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
                  {pet.type} • {pet.age}
                </p>
                <button className="mt-4 w-full border border-teal-500 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 py-2 rounded-full text-sm font-medium transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {filteredPets.length === 0 && (
<div className="text-center py-10">
  <h3 className="text-xl font-semibold">
    No Cats Found 😿
  </h3>

  <p className="text-gray-500 mt-2">
    Try another location or pet type.
  </p>
</div>
)}

    </div>
  );
}