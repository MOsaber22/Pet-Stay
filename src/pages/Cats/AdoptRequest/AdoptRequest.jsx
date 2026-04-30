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
} from "@material-tailwind/react";
import { FiUser, FiHome, FiStar } from "react-icons/fi";

const AdoptRequest = () => {
  const [livingSituation, setLivingSituation] = useState("Rent");
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl w-full">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div className="max-w-xl">
            <Typography
              variant="h1"
              className="text-5xl font-extrabold text-[#111827] mb-4 tracking-tight leading-tight"
            >
              Start your{" "}
              <span className="text-teal-600 italic font-serif">soulful</span>
              <br />
              journey.
            </Typography>
            <Typography
              variant="paragraph"
              className="text-gray-600 mb-8 text-lg"
            >
              Every rescue cat has a story. Fill out this application below to
              begin the matching process for your future feline companion. We
              curate connections that last a lifetime.
            </Typography>

            <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-full shadow-sm w-fit border border-gray-100">
              <div className="w-5 h-5 rounded-full border-2 border-teal-500 flex items-center justify-center p-[2px]">
                <div className="w-full h-full bg-teal-500 rounded-full"></div>
              </div>
              <Typography variant="small" className="text-gray-700 font-medium">
                This application takes about 5 minutes to complete
              </Typography>
            </div>
          </div>

          <div className="w-64 h-64 md:w-80 md:h-80 rounded-[32px] overflow-hidden shadow-2xl shadow-teal-900/20 flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Cat"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Card className="bg-[#f1f5f9] shadow-none border-none rounded-3xl">
              <CardBody className="p-8">
                <Typography
                  variant="small"
                  className="font-bold text-gray-500 tracking-widest uppercase text-xs mb-6"
                >
                  Application Steps
                </Typography>

                <ul className="space-y-6">
                  <li className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-sm shadow-md">
                      1
                    </div>
                    <Typography className="font-semibold text-gray-800">
                      Personal Details
                    </Typography>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-transparent border-2 border-gray-300 text-gray-400 flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <Typography className="font-medium text-gray-500">
                      Living Situation
                    </Typography>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-transparent border-2 border-gray-300 text-gray-400 flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <Typography className="font-medium text-gray-500">
                      Pet Experience
                    </Typography>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-transparent border-2 border-gray-300 text-gray-400 flex items-center justify-center font-bold text-sm">
                      4
                    </div>
                    <Typography className="font-medium text-gray-500">
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
            {/* Step 1: Personal Details */}
            <Card className="bg-[#f1f5f9] shadow-none border-none rounded-3xl">
              <CardBody className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-teal-600 shadow-sm">
                    <FiUser className="w-5 h-5" />
                  </div>
                  <div>
                    <Typography
                      variant="h5"
                      className="text-gray-900 font-bold"
                    >
                      Personal Details
                    </Typography>
                    <Typography variant="small" className="text-gray-500">
                      Tell us about who you are
                    </Typography>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Typography
                      variant="small"
                      className="text-gray-600 font-semibold text-xs uppercase tracking-wider mb-2"
                    >
                      Full Name
                    </Typography>
                    <input
                      type="text"
                      placeholder="e.g. Jane Doe"
                      className="w-full bg-[#e2e8f0] border-none rounded-xl px-4 py-3 text-gray-800 focus:ring-2 focus:ring-teal-500 outline-none"
                    />
                  </div>
                  <div>
                    <Typography
                      variant="small"
                      className="text-gray-600 font-semibold text-xs uppercase tracking-wider mb-2"
                    >
                      Email Address
                    </Typography>
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      className="w-full bg-[#e2e8f0] border-none rounded-xl px-4 py-3 text-gray-800 focus:ring-2 focus:ring-teal-500 outline-none"
                    />
                  </div>
                </div>
                <div>
                  <Typography
                    variant="small"
                    className="text-gray-600 font-semibold text-xs uppercase tracking-wider mb-2"
                  >
                    Phone Number
                  </Typography>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-[#e2e8f0] border-none rounded-xl px-4 py-3 text-gray-800 focus:ring-2 focus:ring-teal-500 outline-none"
                  />
                </div>
              </CardBody>
            </Card>

            {/* Step 2: Living Situation */}
            <Card className="bg-[#f1f5f9] shadow-none border-none rounded-3xl">
              <CardBody className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-teal-600 shadow-sm">
                    <FiHome className="w-5 h-5" />
                  </div>
                  <div>
                    <Typography
                      variant="h5"
                      className="text-gray-900 font-bold"
                    >
                      Living Situation
                    </Typography>
                    <Typography variant="small" className="text-gray-500">
                      Help us understand the home environment
                    </Typography>
                  </div>
                </div>

                <div className="mb-6">
                  <Typography
                    variant="small"
                    className="text-gray-600 font-semibold text-xs uppercase tracking-wider mb-3"
                  >
                    Renting, Boarding, or Own Property
                  </Typography>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setLivingSituation("Rent")}
                      className={`flex-1 font-semibold rounded-xl py-3 transition-all ${livingSituation === "Rent" ? "bg-white border border-gray-200 text-gray-800 hover:border-teal-500 focus:ring-2 focus:ring-teal-500 shadow-sm" : "bg-[#e2e8f0] border-transparent text-gray-600 hover:bg-gray-300"}`}
                    >
                      Rent
                    </button>
                    <button
                      onClick={() => setLivingSituation("Own")}
                      className={`flex-1 font-semibold rounded-xl py-3 transition-all ${livingSituation === "Own" ? "bg-white border border-gray-200 text-gray-800 hover:border-teal-500 focus:ring-2 focus:ring-teal-500 shadow-sm" : "bg-[#e2e8f0] border-transparent text-gray-600 hover:bg-gray-300"}`}
                    >
                      Own
                    </button>
                  </div>
                </div>

                <div>
                  <Typography
                    variant="small"
                    className="text-gray-600 font-semibold text-xs uppercase tracking-wider mb-2"
                  >
                    Any other animals in the household?
                  </Typography>
                  <textarea
                    rows={4}
                    placeholder="Please list names, species, and ages..."
                    className="w-full bg-[#e2e8f0] border-none rounded-xl px-4 py-3 text-gray-800 focus:ring-2 focus:ring-teal-500 outline-none resize-none"
                  ></textarea>
                </div>
              </CardBody>
            </Card>

            {/* Step 3: Pet Experience */}
            <Card className="bg-[#f1f5f9] shadow-none border-none rounded-3xl">
              <CardBody className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-teal-600 shadow-sm">
                    <FiStar className="w-5 h-5" />
                  </div>
                  <div>
                    <Typography
                      variant="h5"
                      className="text-gray-900 font-bold"
                    >
                      Experience with Pets
                    </Typography>
                    <Typography variant="small" className="text-gray-500">
                      Find out they're a pet parent
                    </Typography>
                  </div>
                </div>

                <div className="mb-6">
                  <Typography
                    variant="small"
                    className="text-gray-600 font-semibold text-xs uppercase tracking-wider mb-2"
                  >
                    Have you owned a cat before?
                  </Typography>
                  <select className="w-full bg-[#e2e8f0] border-none rounded-xl px-4 py-3 text-gray-800 focus:ring-2 focus:ring-teal-500 outline-none appearance-none font-medium">
                    <option>Yes, I'm an experienced cat owner</option>
                    <option>No, this would be my first cat</option>
                    <option>I've owned other pets, but not a cat</option>
                  </select>
                </div>

                <div>
                  <Typography
                    variant="small"
                    className="text-gray-600 font-semibold text-xs uppercase tracking-wider mb-2"
                  >
                    Tell us about yourself and you
                  </Typography>
                  <textarea
                    rows={4}
                    placeholder="Describe your typical day..."
                    className="w-full bg-[#e2e8f0] border-none rounded-xl px-4 py-3 text-gray-800 focus:ring-2 focus:ring-teal-500 outline-none resize-none"
                  ></textarea>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-16 mb-8 flex flex-col items-center text-center">
          <Typography variant="small" className="text-gray-500 mb-6 max-w-md">
            By clicking submit you agree to our Adoption Terms and understand
            that adopting is a lifetime commitment.
          </Typography>
          <Button className="bg-teal-700 hover:bg-teal-800 text-white rounded-full px-10 py-4 text-sm font-bold tracking-wide capitalize shadow-lg shadow-teal-500/30">
            Submit Adoption Request
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdoptRequest;
