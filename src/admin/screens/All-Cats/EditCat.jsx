import React, { useState, useEffect, useContext } from "react";
import {
  HiOutlineArrowLeft,
  HiOutlineCheck,
  HiOutlineX,
  HiOutlineCamera,
} from "react-icons/hi";
import { useParams, useNavigate } from "react-router-dom";
import { loadingContext } from "../../../context/LoadingContext";
import CustomSelect from "../../components/CustomSelect/CustomSelect";

const EditCat = () => {
  const { catID } = useParams();
  const navigate = useNavigate();
  const { loading, isLoading, setIsLoading } = useContext(loadingContext);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    image: null,
    name: "",
    gender: "Female",
    age: "",
    breed: "",
    weight: "",
    status: "Available",
    location: "",
    owner: "",
    temperament: "",
    story: "",
  });
  const [imagePreview, setImagePreview] = useState(null);
  const url = import.meta.env.VITE_CATS;
  const fetchCatData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`${url}/cats/${catID}`);
      const data = await res.json();
      setFormData(data);
      setImagePreview(data.image);
    } catch (err) {
      setError(`Error loading cat data: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCatData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await fetch(`${url}/cats/${catID}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      await res.json();
      navigate(-1);
    } catch (err) {
      setError(`Error updating cat: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        {loading()}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="p-8 bg-red-50 dark:bg-red-900/30 border-2 border-red-400 dark:border-red-600 text-red-700 dark:text-red-400 rounded-lg max-w-md text-center">
          <h2 className="text-2xl font-bold mb-3">Error</h2>
          <p className="text-lg">{error}</p>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 px-6 py-2 bg-red-600 dark:bg-red-700 text-white rounded-lg hover:bg-red-700 dark:hover:bg-red-800 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-10 sm:px-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-8">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] font-bold text-white bg-teal-500 hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-700 duration-500 px-4 py-2 rounded-lg transition-colors"
        >
          <HiOutlineArrowLeft /> BACK TO EXPLORE
        </button>

        <header>
          <p className="text-[11px] tracking-[0.2em] font-bold text-teal-700 dark:text-teal-400 uppercase opacity-80">
            Edit Cat
          </p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-teal-700 dark:text-teal-400 leading-[1.05] tracking-tight">
            Edit {formData.name}
          </h1>
          <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 max-w-md leading-relaxed">
            Update the details for this cat resident.
          </p>
        </header>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-xs tracking-[0.15em] font-bold text-gray-700 dark:text-gray-300 uppercase mb-4">
                Profile Photography
              </h3>
              <div className="relative">
                <div className="w-full aspect-square bg-gray-300 dark:bg-gray-700 rounded-2xl overflow-hidden flex items-center justify-center">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center text-gray-500 dark:text-gray-400">
                      <HiOutlineCamera className="mx-auto text-4xl mb-2 opacity-50" />
                      <p className="text-xs">No image</p>
                    </div>
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
              <button
                type="button"
                onClick={() =>
                  document.querySelector('input[type="file"]').click()
                }
                className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-700 text-white font-semibold text-sm rounded-lg px-4 py-2 transition-colors"
              >
                <HiOutlineCamera /> Change Photo
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <label className="block text-xs tracking-[0.15em] font-bold text-gray-700 dark:text-gray-300 uppercase mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="e.g. Luna"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-700/10 transition-all"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs tracking-[0.15em] font-bold text-gray-700 dark:text-gray-300 uppercase mb-2">
                  Breed
                </label>
                <input
                  type="text"
                  name="breed"
                  value={formData.breed}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Maine Coon"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-700/10 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.15em] font-bold text-gray-700 dark:text-gray-300 uppercase mb-2">
                  Age
                </label>
                <input
                  type="text"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. 2 Years"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-700/10 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <CustomSelect
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  options={["Female", "Male"]}
                  label="Gender"
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.15em] font-bold text-gray-700 dark:text-gray-300 uppercase mb-2">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  placeholder="e.g. 4.5"
                  step="0.1"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-700/10 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <CustomSelect
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  options={["Available", "Reserved", "Adopted"]}
                  label="Status"
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.15em] font-bold text-gray-700 dark:text-gray-300 uppercase mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="e.g. Wing A"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-700/10 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs tracking-[0.15em] font-bold text-gray-700 dark:text-gray-300 uppercase mb-2">
                Current Owner
              </label>
              <input
                type="text"
                name="owner"
                value={formData.owner}
                onChange={handleInputChange}
                placeholder="e.g. John Doe"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-700/10 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs tracking-[0.15em] font-bold text-gray-700 dark:text-gray-300 uppercase mb-2">
                Temperament
              </label>
              <input
                type="text"
                name="temperament"
                value={formData.temperament}
                onChange={handleInputChange}
                placeholder="e.g. Affectionate, Calm, Playful"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-700/10 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs tracking-[0.15em] font-bold text-gray-700 dark:text-gray-300 uppercase mb-2">
                Story / Bio
              </label>
              <textarea
                name="story"
                value={formData.story}
                onChange={handleInputChange}
                rows={5}
                placeholder="Tell us about this cat's personality, background, and unique characteristics…"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-700/10 transition-all resize-none"
              />
            </div>

            <div className="flex items-center gap-3 pt-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-700 text-white font-semibold text-sm rounded-full px-8 py-3 transition-colors shadow-lg shadow-teal-700/20"
              >
                <HiOutlineCheck />
                Update Cat
              </button>
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="inline-flex items-center justify-center gap-2 bg-[#ede9df] hover:bg-teal-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 hover:text-teal-700 dark:hover:text-teal-400 font-semibold text-sm rounded-full px-8 py-3 transition-colors"
              >
                <HiOutlineX /> Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCat;
