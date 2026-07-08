import React from 'react';
import { FaEdit, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaStar, FaPaw, FaRegClock } from 'react-icons/fa';

const UserProfile = () => {
  return (
    <div className="min-h-screen bg-[#EDF6F9] font-sans pb-16">
     
      <div className="bg-[#1B2B3A] h-48 w-full relative"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-24">
        


        <div className="flex flex-col items-center mb-10">
          <div className="w-40 h-40 rounded-full border-4 border-[#EDF6F9] overflow-hidden shadow-lg bg-white">
            <img src="/images/user_avatar.png" alt="Eleanor Vance" className="w-full h-full object-cover" />
          </div>
          <h1 className="mt-4 text-3xl font-bold text-[#2D3436]">Eleanor Vance</h1>
          <p className="text-gray-600 mt-1 flex items-center gap-2">
            <FaStar className="text-yellow-400" /> Premium Caretaker &bull; Joined March 2023
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          
          <div className="lg:col-span-1 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-[#2D3436] border-b border-gray-100 pb-3">Personal Details</h3>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#EDF6F9] text-[#006D77] rounded-full">
                  <FaEnvelope className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Address</p>
                  <p className="font-medium text-[#2D3436]">[EMAIL_ADDRESS]</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#EDF6F9] text-[#006D77] rounded-full">
                  <FaPhoneAlt className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone Number</p>
                  <p className="font-medium text-[#2D3436]">+20 1555067502</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#EDF6F9] text-[#006D77] rounded-full">
                  <FaMapMarkerAlt className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium text-[#2D3436]">Cairo, Egypt</p>
                </div>
              </div>
            </div>

            <button className="mt-4 w-full py-3 rounded-xl border-2 border-[#006D77] text-[#006D77] font-semibold hover:bg-[#006D77] hover:text-white transition-all flex justify-center items-center gap-2">
              <FaEdit /> Edit Profile
            </button>
          </div>

          
          <div className="lg:col-span-2 flex flex-col gap-8">
            
        
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-[#2D3436] flex items-center gap-2">
                  <FaPaw className="text-[#006D77]" /> Saved Companions
                </h3>
                <button className="text-[#006D77] text-sm font-semibold hover:underline">View All</button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-2xl hover:shadow-md transition-shadow cursor-pointer">
                  <img src="/images/cat_mochi.png" alt="Mochi" className="w-16 h-16 rounded-full object-cover shadow-sm" />
                  <div>
                    <h4 className="font-bold text-[#2D3436]">Mochi</h4>
                    <p className="text-sm text-gray-500">Scottish Fold &bull; 2 yrs</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-2xl hover:shadow-md transition-shadow cursor-pointer">
                  <img src="/images/cat_jasper.png" alt="Jasper" className="w-16 h-16 rounded-full object-cover shadow-sm" />
                  <div>
                    <h4 className="font-bold text-[#2D3436]">Jasper</h4>
                    <p className="text-sm text-gray-500">Domestic Shorthair &bull; 4 yrs</p>
                  </div>
                </div>
              </div>
            </div>

           
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-[#2D3436] mb-6 flex items-center gap-2">
                <FaRegClock className="text-[#006D77]" /> Adoption Progress
              </h3>

              <div className="border border-gray-100 rounded-2xl p-5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#83C5BE]"></div>
                <div className="ml-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-[#2D3436] text-lg">Application for Luna</h4>
                      <p className="text-sm text-gray-500">Submitted on April 28, 2026</p>
                    </div>
                    <span className="px-3 py-1 bg-[#FFDDD2] text-[#2D3436] rounded-full text-xs font-bold">Under Review</span>
                  </div>
                  
                  <div className="mt-6">
                    <div className="flex justify-between text-sm text-gray-500 mb-2 font-medium">
                      <span>Step 2 of 4</span>
                      <span>50%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div className="bg-[#006D77] h-2.5 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;