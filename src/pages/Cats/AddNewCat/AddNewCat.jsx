import React, { useState } from "react";
import {
  Card,
  CardBody,
  Typography,
  Switch,
  Button,
} from "@material-tailwind/react";
import { FiChevronLeft, FiCamera, FiImage, FiAward, FiClipboard, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const AddNewCat = () => {
  const navigate = useNavigate();
  const [urgency, setUrgency] = useState("Standard");
  const [temperament, setTemperament] = useState(["Playful"]);
  const [mainImage, setMainImage] = useState(null);
  const [thumbnails, setThumbnails] = useState([null, null, null]);

  // Form Field States
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("Adult (3-5 years)");
  const [introduction, setIntroduction] = useState("");
  const [vaccinated, setVaccinated] = useState(true);
  const [neutered, setNeutered] = useState(false);

  // Validation & Submission States
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const toggleTemperament = (trait) => {
    if (temperament.includes(trait)) {
      setTemperament(temperament.filter(t => t !== trait));
    } else {
      setTemperament([...temperament, trait]);
    }
  };

  const handleMainImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setMainImage(URL.createObjectURL(e.target.files[0]));
      // Clear image error if set
      if (errors.mainImage) {
        setErrors((prev) => ({ ...prev, mainImage: null }));
      }
    }
  };

  const handleThumbnailChange = (index, e) => {
    if (e.target.files && e.target.files[0]) {
      const newThumbnails = [...thumbnails];
      newThumbnails[index] = URL.createObjectURL(e.target.files[0]);
      setThumbnails(newThumbnails);
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!mainImage) {
      tempErrors.mainImage = "A profile image is required for the cat.";
    }
    if (!name.trim()) {
      tempErrors.name = "Name is required.";
    } else if (name.trim().length < 2) {
      tempErrors.name = "Name must be at least 2 characters.";
    }
    if (!breed.trim()) {
      tempErrors.breed = "Breed is required.";
    }
    if (!introduction.trim()) {
      tempErrors.introduction = "Introduction / Behind story is required.";
    } else if (introduction.trim().length < 15) {
      tempErrors.introduction = "Please write a slightly longer story (min 15 characters).";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    // Simulate API call to publish cat profile
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
    } catch (err) {
      console.error(err);
      setErrors({ submit: "Failed to publish profile. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDiscard = () => {
    if (window.confirm("Are you sure you want to discard this draft?")) {
      setName("");
      setBreed("");
      setIntroduction("");
      setMainImage(null);
      setThumbnails([null, null, null]);
      setTemperament(["Playful"]);
      setUrgency("Standard");
      setErrors({});
      navigate("/all-cats");
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-[#f8f9fa] dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-300">
        <Card className="max-w-md w-full bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700 rounded-[32px] p-8 text-center transition-all duration-300 animate-fadeIn">
          <CardBody className="flex flex-col items-center gap-6">
            <div className="w-20 h-20 bg-teal-50 dark:bg-teal-900/30 rounded-full flex items-center justify-center text-teal-500">
              <FiCheckCircle className="w-12 h-12" />
            </div>
            <div>
              <Typography variant="h3" className="text-2xl font-extrabold text-[#111827] dark:text-white mb-2">
                Published Successfully!
              </Typography>
              <Typography variant="paragraph" className="text-gray-500 dark:text-gray-400 text-sm">
                <strong>{name}</strong> is now listed. Adopters will be able to discover this profile and send adoption requests.
              </Typography>
            </div>
            <div className="flex flex-col w-full gap-3 mt-2">
              <Button color="teal" onClick={() => navigate("/all-cats")} className="w-full py-3.5 rounded-xl font-bold">
                View All Cats
              </Button>
              <Button variant="text" color="blue-gray" onClick={() => setSubmitSuccess(false)} className="w-full py-3.5 rounded-xl font-bold dark:text-gray-400 dark:hover:bg-gray-700/35">
                Add Another Cat
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-gray-900 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-300">
      <form onSubmit={handleSubmit} className="max-w-4xl w-full">
        
        {/* Top Section */}
        <div className="mb-8">
          <div onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-bold text-xs uppercase tracking-widest mb-4 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer w-fit transition-colors">
            <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
              <FiChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </div>
            Curator Portal
          </div>
          <Typography variant="h2" className="text-4xl font-extrabold text-[#111827] dark:text-white mb-2">
            Add New Cat
          </Typography>
          <Typography variant="paragraph" className="text-gray-500 dark:text-gray-400 text-base max-w-xl">
            Expand our family by adding a new feline friend. Fill out the editorial profile below to help them find their soulmate.
          </Typography>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column (Images) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Typography variant="small" className="font-bold text-gray-400 dark:text-gray-500 tracking-widest uppercase text-xs">
              Make Memories !
            </Typography>
            
            <label className={`w-full aspect-[4/5] rounded-[32px] border-2 border-dashed bg-[#f1f5f9] dark:bg-gray-800/50 flex flex-col items-center justify-center text-center p-6 cursor-pointer hover:border-teal-500 dark:hover:border-teal-400 transition-colors overflow-hidden relative group ${errors.mainImage ? "border-red-500 dark:border-red-500/50" : "border-gray-300 dark:border-gray-700"}`}>
              <input type="file" accept="image/*" className="hidden" onChange={handleMainImageChange} />
              {mainImage ? (
                <>
                  <img src={mainImage} alt="Main Cat" className="w-full h-full object-cover absolute inset-0" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
                    <FiCamera className="w-8 h-8 mb-2" />
                    <Typography className="font-bold">Change Photo</Typography>
                  </div>
                </>
              ) : (
                <>
                  <FiCamera className={`w-8 h-8 mb-4 ${errors.mainImage ? "text-red-500 dark:text-red-400 animate-pulse" : "text-teal-600 dark:text-teal-400"}`} />
                  <Typography className="font-bold text-gray-800 dark:text-gray-200 mb-1">Drop high-res portrait here</Typography>
                  <Typography variant="small" className="text-gray-400 dark:text-gray-500 text-xs px-4">
                    Preferably well-lit, eye-level shots. JPG/PNG up to 10MB
                  </Typography>
                </>
              )}
            </label>
            {errors.mainImage && (
              <span className="text-red-500 text-xs font-semibold flex items-center gap-1 mt-1 justify-center">
                <FiAlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.mainImage}
              </span>
            )}
            
            <div className="grid grid-cols-3 gap-4">
              {[0, 1, 2].map((index) => (
                <label key={index} className="aspect-square rounded-2xl bg-[#e2e8f0] dark:bg-gray-800/60 flex items-center justify-center cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-750 transition-colors overflow-hidden relative group">
                  <input type="file" accept="image/*" className="hidden" onChange={(e) => handleThumbnailChange(index, e)} />
                  {thumbnails[index] ? (
                    <>
                      <img src={thumbnails[index]} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover absolute inset-0" />
                      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                        <FiImage className="w-5 h-5" />
                      </div>
                    </>
                  ) : (
                    <FiImage className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                  )}
                </label>
              ))}
            </div>
          </div>

          {/* Right Column (Forms) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Identity & Background */}
            <Card className="bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 rounded-[32px] transition-colors duration-300">
              <CardBody className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <FiAward className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  <Typography variant="h6" className="text-gray-900 dark:text-white font-bold">Identity & Background</Typography>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Typography variant="small" className="text-gray-600 dark:text-gray-400 font-semibold text-xs uppercase tracking-wider mb-2">Name</Typography>
                    <input 
                      type="text" 
                      placeholder="e.g. Alex christian " 
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: null }));
                      }}
                      className={`w-full bg-[#f1f5f9] dark:bg-gray-900 border rounded-xl px-4 py-3 text-gray-800 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:ring-2 outline-none transition-colors duration-300 ${errors.name ? "border-red-500 focus:ring-red-500/50 bg-red-50/20" : "border-transparent focus:ring-teal-500"}`}
                    />
                    {errors.name && (
                      <span className="text-red-500 text-xs font-semibold flex items-center gap-1 mt-1">
                        <FiAlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.name}
                      </span>
                    )}
                  </div>
                  <div>
                    <Typography variant="small" className="text-gray-600 dark:text-gray-400 font-semibold text-xs uppercase tracking-wider mb-2">Breed</Typography>
                    <input 
                      type="text" 
                      placeholder="e.g. British Shorthair" 
                      value={breed}
                      onChange={(e) => {
                        setBreed(e.target.value);
                        if (errors.breed) setErrors((prev) => ({ ...prev, breed: null }));
                      }}
                      className={`w-full bg-[#f1f5f9] dark:bg-gray-900 border rounded-xl px-4 py-3 text-gray-800 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:ring-2 outline-none transition-colors duration-300 ${errors.breed ? "border-red-500 focus:ring-red-500/50 bg-red-50/20" : "border-transparent focus:ring-teal-500"}`}
                    />
                    {errors.breed && (
                      <span className="text-red-500 text-xs font-semibold flex items-center gap-1 mt-1">
                        <FiAlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.breed}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Typography variant="small" className="text-gray-600 dark:text-gray-400 font-semibold text-xs uppercase tracking-wider mb-2">Age</Typography>
                    <select 
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="w-full bg-[#f1f5f9] dark:bg-gray-900 border-none rounded-xl px-4 py-3 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-teal-500 outline-none appearance-none font-medium transition-colors duration-300"
                    >
                      <option className="bg-white dark:bg-gray-850">Adult (3-5 years)</option>
                      <option className="bg-white dark:bg-gray-850">Kitten (0-1 year)</option>
                      <option className="bg-white dark:bg-gray-850">Senior (8+ years)</option>
                    </select>
                  </div>
                  <div>
                    <Typography variant="small" className="text-gray-600 dark:text-gray-400 font-semibold text-xs uppercase tracking-wider mb-2">Temperament</Typography>
                    <div className="flex flex-wrap gap-2">
                      {["Calm", "Playful", "Vocal", "Shy"].map((trait) => (
                        <span 
                          key={trait}
                          onClick={() => toggleTemperament(trait)}
                          className={`px-3 py-1 text-xs font-bold uppercase rounded-lg cursor-pointer transition-colors ${temperament.includes(trait) ? "bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800/60" : "bg-[#e2e8f0] dark:bg-gray-700 text-gray-600 dark:text-gray-400 border border-transparent hover:bg-gray-300 dark:hover:bg-gray-600"}`}
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <Typography variant="small" className="text-gray-600 dark:text-gray-400 font-semibold text-xs uppercase tracking-wider mb-2">Introduction (Behind Story)</Typography>
                  <textarea 
                    rows={3}
                    placeholder="Tell their unique story. What makes them the perfect companion?" 
                    value={introduction}
                    onChange={(e) => {
                      setIntroduction(e.target.value);
                      if (errors.introduction) setErrors((prev) => ({ ...prev, introduction: null }));
                    }}
                    className={`w-full bg-[#f1f5f9] dark:bg-gray-900 border rounded-xl px-4 py-3 text-gray-800 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:ring-2 outline-none resize-none transition-colors duration-300 ${errors.introduction ? "border-red-500 focus:ring-red-500/50 bg-red-50/20" : "border-transparent focus:ring-teal-500"}`}
                  ></textarea>
                  {errors.introduction && (
                    <span className="text-red-500 text-xs font-semibold flex items-center gap-1 mt-1">
                      <FiAlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.introduction}
                    </span>
                  )}
                </div>
              </CardBody>
            </Card>

            {/* Health & Adoption Status */}
            <Card className="bg-[#f1f5f9] dark:bg-gray-800/40 shadow-none border-none rounded-[32px] transition-colors duration-300">
              <CardBody className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <FiClipboard className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  <Typography variant="h6" className="text-gray-900 dark:text-white font-bold">Health & Adoption Status</Typography>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center justify-between bg-white dark:bg-gray-900 rounded-xl px-4 py-3 shadow-sm border border-gray-100 dark:border-gray-850 transition-colors duration-300">
                    <div>
                      <Typography className="font-bold text-gray-800 dark:text-gray-200 text-sm">Vaccinated</Typography>
                      <Typography variant="small" className="text-gray-400 dark:text-gray-500 text-xs">Up to date on shots</Typography>
                    </div>
                    <Switch 
                      id="vaccinated" 
                      color="teal" 
                      checked={vaccinated} 
                      onChange={(e) => setVaccinated(e.target.checked)}
                      crossOrigin={undefined} 
                    />
                  </div>
                  <div className="flex items-center justify-between bg-white dark:bg-gray-900 rounded-xl px-4 py-3 shadow-sm border border-gray-100 dark:border-gray-850 transition-colors duration-300">
                    <div>
                      <Typography className="font-bold text-gray-800 dark:text-gray-200 text-sm">Neutered/Spayed</Typography>
                      <Typography variant="small" className="text-gray-400 dark:text-gray-500 text-xs">Medical records</Typography>
                    </div>
                    <Switch 
                      id="neutered" 
                      color="teal" 
                      checked={neutered} 
                      onChange={(e) => setNeutered(e.target.checked)}
                      crossOrigin={undefined} 
                    />
                  </div>
                </div>

                <div>
                  <Typography variant="small" className="text-gray-600 dark:text-gray-400 font-semibold text-xs uppercase tracking-wider mb-3">Listing Urgency</Typography>
                  <div className="flex gap-3">
                    <button 
                      type="button"
                      className={`flex-1 font-semibold rounded-xl py-3 border text-sm transition-all duration-300 ${urgency === "Standard" ? "bg-white dark:bg-gray-900 border-teal-500 text-teal-700 dark:text-teal-400 shadow-sm focus:ring-2 focus:ring-teal-500" : "bg-white/50 dark:bg-gray-900/40 border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-850"}`}
                      onClick={() => setUrgency("Standard")}
                    >
                      Standard
                    </button>
                    <button 
                      type="button"
                      className={`flex-1 font-semibold rounded-xl py-3 border text-sm transition-all duration-300 ${urgency === "Urgent" ? "bg-white dark:bg-gray-900 border-teal-500 text-teal-700 dark:text-teal-400 shadow-sm focus:ring-2 focus:ring-teal-500" : "bg-white/50 dark:bg-gray-900/40 border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-850"}`}
                      onClick={() => setUrgency("Urgent")}
                    >
                      Urgent
                    </button>
                    <button 
                      type="button"
                      className={`flex-1 font-semibold rounded-xl py-3 border text-sm transition-all duration-300 ${urgency === "Foster Home" ? "bg-white dark:bg-gray-900 border-teal-500 text-teal-700 dark:text-teal-400 shadow-sm focus:ring-2 focus:ring-teal-500" : "bg-white/50 dark:bg-gray-900/40 border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-850"}`}
                      onClick={() => setUrgency("Foster Home")}
                    >
                      Foster Home
                    </button>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Action Buttons */}
            <div className="flex items-center gap-6 mt-4">
              <Button type="submit" color="teal" className="flex items-center gap-2" disabled={isSubmitting}>
                <FiClipboard className="w-4 h-4" /> {isSubmitting ? "Publishing..." : "Publish Profile"}
              </Button>
              <Button type="button" variant="text" color="red" onClick={handleDiscard} className="dark:text-red-400 dark:hover:bg-red-900/20">
                Discard Draft
              </Button>
            </div>
            {errors.submit && (
              <p className="text-red-500 text-xs font-semibold text-center mt-2">{errors.submit}</p>
            )}

          </div>
        </div>

      </form>
    </div>
  );
};

export default AddNewCat;