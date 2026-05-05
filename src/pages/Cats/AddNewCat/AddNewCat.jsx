import React, { useState } from "react";
import {
  Card,
  CardBody,
  Typography,
  Input,
  Button,
  Textarea,
  Select,
  Option,
  Switch,
} from "@material-tailwind/react";
import { FiChevronLeft, FiCamera, FiImage, FiAward, FiClipboard } from "react-icons/fi";

const AddNewCat = () => {
  const [urgency, setUrgency] = useState("Standard");
  const [temperament, setTemperament] = useState(["Playful"]);
  const [mainImage, setMainImage] = useState(null);
  const [thumbnails, setThumbnails] = useState([null, null, null]);

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
    }
  };

  const handleThumbnailChange = (index, e) => {
    if (e.target.files && e.target.files[0]) {
      const newThumbnails = [...thumbnails];
      newThumbnails[index] = URL.createObjectURL(e.target.files[0]);
      setThumbnails(newThumbnails);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl w-full">
        
        {/* Top Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-gray-500 font-bold text-xs uppercase tracking-widest mb-4 hover:text-gray-800 cursor-pointer w-fit transition-colors">
            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
              <FiChevronLeft className="w-4 h-4" />
            </div>
            Curator Portal
          </div>
          <Typography variant="h2" className="text-4xl font-extrabold text-[#111827] mb-2">
            Add New Cat
          </Typography>
          <Typography variant="paragraph" className="text-gray-500 text-base max-w-xl">
            Expand our family by adding a new feline friend. Fill out the editorial profile below to help them find their soulmate.
          </Typography>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column (Images) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Typography variant="small" className="font-bold text-gray-400 tracking-widest uppercase text-xs">
              Make Memories !
            </Typography>
            
            <label className="w-full aspect-[4/5] rounded-[32px] border-2 border-dashed border-gray-300 bg-[#f1f5f9] flex flex-col items-center justify-center text-center p-6 cursor-pointer hover:border-teal-500 transition-colors overflow-hidden relative group">
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
                  <FiCamera className="w-8 h-8 text-teal-600 mb-4" />
                  <Typography className="font-bold text-gray-800 mb-1">Drop high-res portrait here</Typography>
                  <Typography variant="small" className="text-gray-400 text-xs px-4">
                    Preferably well-lit, eye-level shots. JPG/PNG up to 10MB
                  </Typography>
                </>
              )}
            </label>
            
            <div className="grid grid-cols-3 gap-4">
              {[0, 1, 2].map((index) => (
                <label key={index} className="aspect-square rounded-2xl bg-[#e2e8f0] flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors overflow-hidden relative group">
                  <input type="file" accept="image/*" className="hidden" onChange={(e) => handleThumbnailChange(index, e)} />
                  {thumbnails[index] ? (
                    <>
                      <img src={thumbnails[index]} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover absolute inset-0" />
                      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                        <FiImage className="w-5 h-5" />
                      </div>
                    </>
                  ) : (
                    <FiImage className="w-5 h-5 text-gray-400" />
                  )}
                </label>
              ))}
            </div>
          </div>

          {/* Right Column (Forms) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Identity & Background */}
            <Card className="bg-white shadow-sm border border-gray-100 rounded-[32px]">
              <CardBody className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <FiAward className="w-5 h-5 text-teal-600" />
                  <Typography variant="h6" className="text-gray-900 font-bold">Identity & Background</Typography>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Typography variant="small" className="text-gray-600 font-semibold text-xs uppercase tracking-wider mb-2">Name</Typography>
                    <input 
                      type="text" 
                      placeholder="e.g. Alex christian " 
                      className="w-full bg-[#f1f5f9] border-none rounded-xl px-4 py-3 text-gray-800 focus:ring-2 focus:ring-teal-500 outline-none"
                    />
                  </div>
                  <div>
                    <Typography variant="small" className="text-gray-600 font-semibold text-xs uppercase tracking-wider mb-2">Breed</Typography>
                    <input 
                      type="text" 
                      placeholder="e.g. British Shorthair" 
                      className="w-full bg-[#f1f5f9] border-none rounded-xl px-4 py-3 text-gray-800 focus:ring-2 focus:ring-teal-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Typography variant="small" className="text-gray-600 font-semibold text-xs uppercase tracking-wider mb-2">Age</Typography>
                    <select className="w-full bg-[#f1f5f9] border-none rounded-xl px-4 py-3 text-gray-800 focus:ring-2 focus:ring-teal-500 outline-none appearance-none font-medium">
                      <option>Adult (3-5 years)</option>
                      <option>Kitten (0-1 year)</option>
                      <option>Senior (8+ years)</option>
                    </select>
                  </div>
                  <div>
                    <Typography variant="small" className="text-gray-600 font-semibold text-xs uppercase tracking-wider mb-2">Temperament</Typography>
                    <div className="flex flex-wrap gap-2">
                      {["Calm", "Playful", "Vocal", "Shy"].map((trait) => (
                        <span 
                          key={trait}
                          onClick={() => toggleTemperament(trait)}
                          className={`px-3 py-1 text-xs font-bold uppercase rounded-lg cursor-pointer transition-colors ${temperament.includes(trait) ? "bg-teal-100 text-teal-800 border border-teal-200" : "bg-[#e2e8f0] text-gray-600 border border-transparent hover:bg-gray-300"}`}
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <Typography variant="small" className="text-gray-600 font-semibold text-xs uppercase tracking-wider mb-2">Introduction (Behind Story)</Typography>
                  <textarea 
                    rows={3}
                    placeholder="Tell their unique story. What makes them the perfect companion?" 
                    className="w-full bg-[#f1f5f9] border-none rounded-xl px-4 py-3 text-gray-800 focus:ring-2 focus:ring-teal-500 outline-none resize-none"
                  ></textarea>
                </div>
              </CardBody>
            </Card>

            {/* Health & Adoption Status */}
            <Card className="bg-[#f1f5f9] shadow-none border-none rounded-[32px]">
              <CardBody className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <FiClipboard className="w-5 h-5 text-teal-600" />
                  <Typography variant="h6" className="text-gray-900 font-bold">Health & Adoption Status</Typography>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center justify-between bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100">
                    <div>
                      <Typography className="font-bold text-gray-800 text-sm">Vaccinated</Typography>
                      <Typography variant="small" className="text-gray-400 text-xs">Up to date on shots</Typography>
                    </div>
                    <Switch id="vaccinated" color="teal" defaultChecked crossOrigin={undefined} />
                  </div>
                  <div className="flex items-center justify-between bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100">
                    <div>
                      <Typography className="font-bold text-gray-800 text-sm">Neutered/Spayed</Typography>
                      <Typography variant="small" className="text-gray-400 text-xs">Medical records</Typography>
                    </div>
                    <Switch id="neutered" color="teal" crossOrigin={undefined} />
                  </div>
                </div>

                <div>
                  <Typography variant="small" className="text-gray-600 font-semibold text-xs uppercase tracking-wider mb-3">Listing Urgency</Typography>
                  <div className="flex gap-3">
                    <Button 
                      variant={urgency === "Standard" ? "outlined" : "text"} 
                      color={urgency === "Standard" ? "teal" : "blue-gray"} 
                      className="flex-1"
                      onClick={() => setUrgency("Standard")}
                    >
                      Standard
                    </Button>
                    <Button 
                      variant={urgency === "Urgent" ? "outlined" : "text"} 
                      color={urgency === "Urgent" ? "teal" : "blue-gray"} 
                      className="flex-1"
                      onClick={() => setUrgency("Urgent")}
                    >
                      Urgent
                    </Button>
                    <Button 
                      variant={urgency === "Foster Home" ? "outlined" : "text"} 
                      color={urgency === "Foster Home" ? "teal" : "blue-gray"} 
                      className="flex-1"
                      onClick={() => setUrgency("Foster Home")}
                    >
                      Foster Home
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Action Buttons */}
            <div className="flex items-center gap-6 mt-4">
              <Button color="teal" className="flex items-center gap-2">
                <FiClipboard className="w-4 h-4" /> Publish Profile
              </Button>
              <Button variant="text" color="red">
                Discard Draft
              </Button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AddNewCat;