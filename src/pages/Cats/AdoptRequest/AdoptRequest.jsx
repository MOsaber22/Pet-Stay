import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FiUser, FiHome, FiStar, FiCheckCircle, FiAlertCircle, FiHeart } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

const AdoptRequest = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { catId } = location.state || {};
  const [availableCats, setAvailableCats] = useState([]);
  const [selectedCatId, setSelectedCatId] = useState("");
  const [livingSituation, setLivingSituation] = useState("Rent");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const idFromUrl = params.get("catId");
    const preselectedId = idFromUrl || catId || "";
    if (preselectedId) {
      setSelectedCatId(preselectedId);
    }

    const url = import.meta.env.VITE_CATS || "http://localhost:3000/api/v1";
    fetch(`${url}/cats`)
      .then((res) => res.json())
      .then((resData) => {
        const cats = resData?.data?.cats || [];
        const adoptable = cats.filter(
          (cat) => !cat.status || cat.status.toLowerCase() === "available"
        );
        setAvailableCats(adoptable.length ? adoptable : cats);
      })
      .catch((err) => console.error("Error fetching cats:", err));
  }, [catId]);

  // Form Field States
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otherAnimals, setOtherAnimals] = useState("");
  const [experience, setExperience] = useState("Yes, I'm an experienced cat owner");
  const [aboutYourself, setAboutYourself] = useState("");

  // Validation & Submission States
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const selectedCat = availableCats.find(
    (cat) => String(cat._id || cat.id) === String(selectedCatId)
  );

  const validateForm = () => {
    const tempErrors = {};
    if (!selectedCatId) {
      tempErrors.selectedCatId = "Please select a cat to adopt.";
    }
    if (!fullName.trim()) {
      tempErrors.fullName = "Full Name is required.";
    } else if (fullName.trim().length < 3) {
      tempErrors.fullName = "Full Name must be at least 3 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      tempErrors.email = "Email Address is required.";
    } else if (!emailRegex.test(email)) {
      tempErrors.email = "Please enter a valid email address.";
    }

    const phoneRegex = /^\+?[\d\s\-()]{7,}$/;
    if (!phone.trim()) {
      tempErrors.phone = "Phone Number is required.";
    } else if (!phoneRegex.test(phone)) {
      tempErrors.phone = "Please enter a valid phone number (at least 7 digits).";
    }

    if (!aboutYourself.trim()) {
      tempErrors.aboutYourself = "Please tell us a bit about yourself.";
    } else if (aboutYourself.trim().length < 20) {
      tempErrors.aboutYourself = "Please describe your daily routine in more detail (min 20 characters).";
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
    try {
      const url = import.meta.env.VITE_CATS || "http://localhost:3000/api/v1";

      const response = await fetch(`${url}/cats/${selectedCatId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "pending" }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.message || "Failed to submit adoption request.");
      }

      setSubmitSuccess(true);
    } catch (err) {
      console.error(err);
      setErrors({ submit: err.message || "Failed to submit request. Please try again later." });
    } finally {
      setIsSubmitting(false);
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
                Application Received!
              </Typography>
              <Typography variant="paragraph" className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Thank you for applying, <strong>{fullName}</strong>. Our team will review your household situation and match preferences, and reach out to you within 2-3 business days.
              </Typography>
            </div>
            <div className="flex flex-col w-full gap-3 mt-2">
              <Button color="teal" onClick={() => navigate("/all-cats")} className="w-full py-3.5 rounded-xl font-bold">
                Browse More Cats
              </Button>
              <Button variant="text" color="blue-gray" onClick={() => navigate("/")} className="w-full py-3.5 rounded-xl font-bold dark:text-gray-400 dark:hover:bg-gray-700/35">
                Go to Homepage
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-gray-900 flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-300">
      <form onSubmit={handleSubmit} className="max-w-5xl w-full">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div className="max-w-xl">
            <Typography
              variant="h1"
              className="text-5xl font-extrabold text-[#111827] dark:text-white mb-4 tracking-tight leading-tight"
            >
              Start your{" "}
              <span className="text-teal-600 dark:text-teal-400 italic font-serif">soulful</span>
              <br />
              journey.
            </Typography>
            <Typography
              variant="paragraph"
              className="text-gray-600 dark:text-gray-400 mb-8 text-lg"
            >
              Every rescue cat has a story. Fill out this application below to
              begin the matching process for your future feline companion. We
              curate connections that last a lifetime.
            </Typography>

            <div className="flex items-center gap-3 bg-white dark:bg-gray-800 px-4 py-3 rounded-full shadow-sm w-fit border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div className="w-5 h-5 rounded-full border-2 border-teal-500 flex items-center justify-center p-[2px]">
                <div className="w-full h-full bg-teal-500 rounded-full"></div>
              </div>
              <Typography variant="small" className="text-gray-700 dark:text-gray-300 font-medium">
                This application takes about 5 minutes to complete
              </Typography>
            </div>
          </div>

          <div className="w-64 h-64 md:w-80 md:h-80 rounded-[32px] overflow-hidden shadow-2xl shadow-teal-900/20 flex-shrink-0">
            <img
              src={
                selectedCat?.image ||
                "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
              alt={selectedCat?.name || "Cat"}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Card className="bg-[#f1f5f9] dark:bg-gray-800/40 shadow-none border-none rounded-3xl transition-colors duration-300">
              <CardBody className="p-8">
                <Typography
                  variant="small"
                  className="font-bold text-gray-500 dark:text-gray-400 tracking-widest uppercase text-xs mb-6"
                >
                  Application Steps
                </Typography>

                <ul className="space-y-6">
                  <li className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-sm shadow-md">
                      1
                    </div>
                    <Typography className="font-semibold text-gray-800 dark:text-gray-200">
                      Choose a Cat
                    </Typography>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all ${selectedCatId ? "bg-teal-50 border-teal-500 text-teal-600" : "bg-transparent border-gray-300 dark:border-gray-700 text-gray-400 dark:text-gray-500"}`}>
                      2
                    </div>
                    <Typography className={`font-medium transition-all ${selectedCatId ? "text-teal-600 font-semibold" : "text-gray-500 dark:text-gray-400"}`}>
                      Personal Details
                    </Typography>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all ${fullName && email && phone ? "bg-teal-50 border-teal-500 text-teal-600" : "bg-transparent border-gray-300 dark:border-gray-700 text-gray-400 dark:text-gray-500"}`}>
                      3
                    </div>
                    <Typography className={`font-medium transition-all ${fullName && email && phone ? "text-teal-600 font-semibold" : "text-gray-500 dark:text-gray-400"}`}>
                      Living Situation
                    </Typography>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all ${aboutYourself.trim().length >= 20 ? "bg-teal-50 border-teal-500 text-teal-600" : "bg-transparent border-gray-300 dark:border-gray-700 text-gray-400 dark:text-gray-500"}`}>
                      4
                    </div>
                    <Typography className={`font-medium transition-all ${aboutYourself.trim().length >= 20 ? "text-teal-600 font-semibold" : "text-gray-500 dark:text-gray-400"}`}>
                      Pet Experience
                    </Typography>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-transparent border-2 border-gray-300 dark:border-gray-700 text-gray-400 dark:text-gray-500 flex items-center justify-center font-bold text-sm">
                      5
                    </div>
                    <Typography className="font-medium text-gray-500 dark:text-gray-400">
                      Submission
                    </Typography>
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card className="bg-[#cd8563] shadow-none border-none rounded-3xl text-white">
              <CardBody className="p-8">
                <Typography className="italic font-medium leading-relaxed mb-4">
                  "Pet Stay made finding Luna an absolute joy. She's the heart
                  of my house. The process is so simple!"
                </Typography>
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-8 h-8 rounded-full bg-white/20"></div>
                  <Typography variant="small" className="font-semibold">
                    — Sarah M., Adopter
                  </Typography>
                </div>
              </CardBody>
            </Card>
          </div>

          {/* Right Forms */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Step 1: Choose a Cat */}
            <Card className="bg-[#f1f5f9] dark:bg-gray-800/40 shadow-none border-none rounded-3xl transition-colors duration-300">
              <CardBody className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-teal-600 dark:text-teal-400 shadow-sm border border-transparent dark:border-gray-850">
                    <FiHeart className="w-5 h-5" />
                  </div>
                  <div>
                    <Typography
                      variant="h5"
                      className="text-gray-900 dark:text-white font-bold"
                    >
                      Choose a Cat
                    </Typography>
                    <Typography variant="small" className="text-gray-500 dark:text-gray-400">
                      Select the cat you want to adopt
                    </Typography>
                  </div>
                </div>

                <div>
                  <Typography
                    variant="small"
                    className="text-gray-600 dark:text-gray-400 font-semibold text-xs uppercase tracking-wider mb-2"
                  >
                    Available Cats
                  </Typography>
                  <select
                    value={selectedCatId}
                    onChange={(e) => {
                      setSelectedCatId(e.target.value);
                      if (errors.selectedCatId) {
                        setErrors((prev) => ({ ...prev, selectedCatId: null }));
                      }
                    }}
                    className={`w-full bg-[#e2e8f0] dark:bg-gray-900 border rounded-xl px-4 py-3 text-gray-800 dark:text-gray-200 focus:ring-2 outline-none appearance-none font-medium transition-colors duration-300 ${errors.selectedCatId ? "border-red-500 focus:ring-red-500/50 bg-red-50/20" : "border-transparent focus:ring-teal-500"}`}
                  >
                    <option value="">Select a cat...</option>
                    {availableCats.map((cat) => (
                      <option key={cat._id || cat.id} value={cat._id || cat.id}>
                        {cat.name}
                        {cat.breed ? ` — ${cat.breed}` : ""}
                      </option>
                    ))}
                  </select>
                  {errors.selectedCatId && (
                    <span className="text-red-500 text-xs font-semibold flex items-center gap-1 mt-1">
                      <FiAlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.selectedCatId}
                    </span>
                  )}
                </div>
              </CardBody>
            </Card>

            {/* Step 2: Personal Details */}
            <Card className="bg-[#f1f5f9] dark:bg-gray-800/40 shadow-none border-none rounded-3xl transition-colors duration-300">
              <CardBody className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-teal-600 dark:text-teal-400 shadow-sm border border-transparent dark:border-gray-850">
                    <FiUser className="w-5 h-5" />
                  </div>
                  <div>
                    <Typography
                      variant="h5"
                      className="text-gray-900 dark:text-white font-bold"
                    >
                      Personal Details
                    </Typography>
                    <Typography variant="small" className="text-gray-500 dark:text-gray-400">
                      Tell us about who you are
                    </Typography>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Typography
                      variant="small"
                      className="text-gray-600 dark:text-gray-400 font-semibold text-xs uppercase tracking-wider mb-2"
                    >
                      Full Name
                    </Typography>
                    <input
                      type="text"
                      placeholder="e.g. Jane Doe"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: null }));
                      }}
                      className={`w-full bg-[#e2e8f0] dark:bg-gray-900 border rounded-xl px-4 py-3 text-gray-800 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:ring-2 outline-none transition-colors duration-300 ${errors.fullName ? "border-red-500 focus:ring-red-500/50 bg-red-50/20" : "border-transparent focus:ring-teal-500"}`}
                    />
                    {errors.fullName && (
                      <span className="text-red-500 text-xs font-semibold flex items-center gap-1 mt-1">
                        <FiAlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.fullName}
                      </span>
                    )}
                  </div>
                  <div>
                    <Typography
                      variant="small"
                      className="text-gray-600 dark:text-gray-400 font-semibold text-xs uppercase tracking-wider mb-2"
                    >
                      Email Address
                    </Typography>
                    <input
                      type="email"
                      placeholder="jane@gmail.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((prev) => ({ ...prev, email: null }));
                      }}
                      className={`w-full bg-[#e2e8f0] dark:bg-gray-900 border rounded-xl px-4 py-3 text-gray-800 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:ring-2 outline-none transition-colors duration-300 ${errors.email ? "border-red-500 focus:ring-red-500/50 bg-red-50/20" : "border-transparent focus:ring-teal-500"}`}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs font-semibold flex items-center gap-1 mt-1">
                        <FiAlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <Typography
                    variant="small"
                    className="text-gray-600 dark:text-gray-400 font-semibold text-xs uppercase tracking-wider mb-2"
                  >
                    Phone Number
                  </Typography>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors((prev) => ({ ...prev, phone: null }));
                    }}
                    className={`w-full bg-[#e2e8f0] dark:bg-gray-900 border rounded-xl px-4 py-3 text-gray-800 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:ring-2 outline-none transition-colors duration-300 ${errors.phone ? "border-red-500 focus:ring-red-500/50 bg-red-50/20" : "border-transparent focus:ring-teal-500"}`}
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-xs font-semibold flex items-center gap-1 mt-1">
                      <FiAlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.phone}
                    </span>
                  )}
                </div>
              </CardBody>
            </Card>

            {/* Step 2: Living Situation */}
            <Card className="bg-[#f1f5f9] dark:bg-gray-800/40 shadow-none border-none rounded-3xl transition-colors duration-300">
              <CardBody className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-teal-600 dark:text-teal-400 shadow-sm border border-transparent dark:border-gray-850">
                    <FiHome className="w-5 h-5" />
                  </div>
                  <div>
                    <Typography
                      variant="h5"
                      className="text-gray-900 dark:text-white font-bold"
                    >
                      Living Situation
                    </Typography>
                    <Typography variant="small" className="text-gray-500 dark:text-gray-400">
                      Help us understand the home environment
                    </Typography>
                  </div>
                </div>

                <div className="mb-6">
                  <Typography
                    variant="small"
                    className="text-gray-600 dark:text-gray-400 font-semibold text-xs uppercase tracking-wider mb-3"
                  >
                    Renting, Boarding, or Own Property
                  </Typography>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setLivingSituation("Rent")}
                      className={`flex-1 font-semibold rounded-xl py-3 border transition-all duration-300 ${livingSituation === "Rent" ? "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-100 hover:border-teal-500 shadow-sm focus:ring-2 focus:ring-teal-500" : "bg-[#e2e8f0] dark:bg-gray-950/60 border-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-800"}`}
                    >
                      Rent
                    </button>
                    <button
                      type="button"
                      onClick={() => setLivingSituation("Own")}
                      className={`flex-1 font-semibold rounded-xl py-3 border transition-all duration-300 ${livingSituation === "Own" ? "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-100 hover:border-teal-500 shadow-sm focus:ring-2 focus:ring-teal-500" : "bg-[#e2e8f0] dark:bg-gray-950/60 border-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-800"}`}
                    >
                      Own
                    </button>
                  </div>
                </div>

                <div>
                  <Typography
                    variant="small"
                    className="text-gray-600 dark:text-gray-400 font-semibold text-xs uppercase tracking-wider mb-2"
                  >
                    Any other animals in the household?
                  </Typography>
                  <textarea
                    rows={4}
                    placeholder="Please list names, species, and ages..."
                    value={otherAnimals}
                    onChange={(e) => setOtherAnimals(e.target.value)}
                    className="w-full bg-[#e2e8f0] dark:bg-gray-900 border-none rounded-xl px-4 py-3 text-gray-800 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:ring-2 focus:ring-teal-500 outline-none resize-none transition-colors duration-300"
                  ></textarea>
                </div>
              </CardBody>
            </Card>

            {/* Step 3: Pet Experience */}
            <Card className="bg-[#f1f5f9] dark:bg-gray-800/40 shadow-none border-none rounded-3xl transition-colors duration-300">
              <CardBody className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-teal-600 dark:text-teal-400 shadow-sm border border-transparent dark:border-gray-850">
                    <FiStar className="w-5 h-5" />
                  </div>
                  <div>
                    <Typography
                      variant="h5"
                      className="text-gray-900 dark:text-white font-bold"
                    >
                      Experience with Pets
                    </Typography>
                    <Typography variant="small" className="text-gray-500 dark:text-gray-400">
                      Find out they're a pet parent
                    </Typography>
                  </div>
                </div>

                <div className="mb-6">
                  <Typography
                    variant="small"
                    className="text-gray-600 dark:text-gray-400 font-semibold text-xs uppercase tracking-wider mb-2"
                  >
                    Have you owned a cat before?
                  </Typography>
                  <select 
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full bg-[#e2e8f0] dark:bg-gray-900 border-none rounded-xl px-4 py-3 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-teal-500 outline-none appearance-none font-medium transition-colors duration-300"
                  >
                    <option className="bg-white dark:bg-gray-850 text-gray-800 dark:text-gray-200">Yes, I'm an experienced cat owner</option>
                    <option className="bg-white dark:bg-gray-850 text-gray-800 dark:text-gray-200">No, this would be my first cat</option>
                    <option className="bg-white dark:bg-gray-850 text-gray-800 dark:text-gray-200">I've owned other pets, but not a cat</option>
                  </select>
                </div>

                <div>
                  <Typography
                    variant="small"
                    className="text-gray-600 dark:text-gray-400 font-semibold text-xs uppercase tracking-wider mb-2"
                  >
                    Tell us about yourself and your typical day
                  </Typography>
                  <textarea
                    rows={4}
                    placeholder="Describe your typical day..."
                    value={aboutYourself}
                    onChange={(e) => {
                      setAboutYourself(e.target.value);
                      if (errors.aboutYourself) setErrors((prev) => ({ ...prev, aboutYourself: null }));
                    }}
                    className={`w-full bg-[#e2e8f0] dark:bg-gray-900 border rounded-xl px-4 py-3 text-gray-800 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:ring-2 outline-none resize-none transition-colors duration-300 ${errors.aboutYourself ? "border-red-500 focus:ring-red-500/50 bg-red-50/20" : "border-transparent focus:ring-teal-500"}`}
                  ></textarea>
                  {errors.aboutYourself && (
                    <span className="text-red-500 text-xs font-semibold flex items-center gap-1 mt-1">
                      <FiAlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.aboutYourself}
                    </span>
                  )}
                </div>
              </CardBody>
            </Card>
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-16 mb-8 flex flex-col items-center text-center">
          <Typography variant="small" className="text-gray-500 dark:text-gray-400 mb-6 max-w-md">
            By clicking submit you agree to our Adoption Terms and understand
            that adopting is a lifetime commitment.
          </Typography>
          <Button type="submit" disabled={isSubmitting} className="bg-teal-700 hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-700 text-white rounded-full px-10 py-4 text-sm font-bold tracking-wide capitalize shadow-lg shadow-teal-500/30">
            {isSubmitting ? "Submitting Request..." : "Submit Adoption Request"}
          </Button>
          {errors.submit && (
            <p className="text-red-500 text-xs font-semibold mt-4">{errors.submit}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default AdoptRequest;
