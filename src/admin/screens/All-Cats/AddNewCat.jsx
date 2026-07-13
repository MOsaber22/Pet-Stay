import React, { useState } from "react";
import {
  HiOutlineArrowLeft,
  HiOutlineCheck,
  HiOutlineX,
  HiOutlineCamera,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import CustomSelect from "../../components/CustomSelect/CustomSelect";

const AddNewCat = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    image: null,
    name: "",
    gender: "",
    age: "",
    breed: "",
    weight: "",
    location: "",
    temperament: "",
    story: "",
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState("");

  const validateForm = () => {
    if (
      !formData.name.trim() ||
      !formData.gender.trim() ||
      !formData.age.trim() ||
      !formData.breed.trim() ||
      !formData.weight ||
      !formData.location.trim() ||
      !formData.temperament.trim() ||
      !formData.story.trim()
    ) {
      setError("Please fill in all fields before adding this cat.");
      return false;
    }
    return true;
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!validateForm()) return;
    setIsSubmitting(true);
    const url = import.meta.env.VITE_CATS;
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("image", formData.image);
      formDataToSend.append("name", formData.name);
      formDataToSend.append("gender", formData.gender);
      formDataToSend.append("age", formData.age);
      formDataToSend.append("breed", formData.breed);
      formDataToSend.append("weight", formData.weight);
      formDataToSend.append("location", formData.location);
      formDataToSend.append("temperament", formData.temperament);
      formDataToSend.append("story", formData.story);

      const res = await fetch(`${url}/cats`, {
        method: "POST",
        body: formDataToSend,
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.message || `Server responded with ${res.status}`);
      }
      await res.json();
      setSubmitSuccess(true);
      setTimeout(() => navigate("/admin/all-cats"), 1500);
    } catch (err) {
      console.log(err);
      setError(`Failed to add cat. ${err.message || "Please try again."}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-10 sm:px-8 transition-colors duration-300">
        <div className="max-w-3xl mx-auto rounded-3xl bg-white dark:bg-gray-800 shadow-xl p-10 text-center">
          <HiOutlineCheck className="mx-auto mb-4 text-6xl text-teal-600" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Cat added successfully!
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            The new cat has been saved. Redirecting to the All Cats page...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <ErrorMessage
        error={error}
        onRetry={() => setError("")}
        onGoBack={() => navigate("/admin/all-cats")}
        showBackButton={true}
      />
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
            New Intake
          </p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-teal-700 dark:text-teal-400 leading-[1.05] tracking-tight">
            Add new cat
          </h1>
          <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 max-w-md leading-relaxed">
            Fill in the details below to welcome a new resident to the
            sanctuary.
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
                <HiOutlineCamera /> Add Photos
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
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
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
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      breed: e.target.value,
                    }))
                  }
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
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      age: e.target.value,
                    }))
                  }
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
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      gender: e.target.value,
                    }))
                  }
                  options={["female", "male"]}
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
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      weight: e.target.value,
                    }))
                  }
                  placeholder="e.g. 4.5"
                  step="0.1"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-700/10 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-xs tracking-[0.15em] font-bold text-gray-700 dark:text-gray-300 uppercase mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      location: e.target.value,
                    }))
                  }
                  placeholder="e.g. Wing A"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-700/10 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs tracking-[0.15em] font-bold text-gray-700 dark:text-gray-300 uppercase mb-2">
                Temperament
              </label>
              <input
                type="text"
                name="temperament"
                value={formData.temperament}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    temperament: e.target.value,
                  }))
                }
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
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    story: e.target.value,
                  }))
                }
                rows={5}
                placeholder="Tell us about this cat's personality, background, and unique characteristics…"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-700/10 transition-all resize-none"
              />
            </div>

            <div className="flex items-center gap-3 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center justify-center gap-2 text-white font-semibold text-sm rounded-full px-8 py-3 transition-colors shadow-lg shadow-teal-700/20 ${isSubmitting ? "bg-teal-300 cursor-not-allowed" : "bg-teal-700 hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-700"}`}
              >
                <HiOutlineCheck />
                {isSubmitting ? "Adding..." : "Add cat"}
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

export default AddNewCat;
