import React from 'react';
import { FaEdit, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaStar, FaPaw, FaRegClock } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeProvider';

const UserProfile = () => {
  const { theme } = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={`min-h-screen font-sans pb-16 transition-colors duration-300 ${dark ? 'bg-gray-900 text-gray-100' : 'bg-[#EDF6F9] text-[#2D3436]'}`}>

      <div className={`h-48 w-full relative transition-colors duration-300 ${dark ? 'bg-gray-800' : 'bg-[#1B2B3A]'}`}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-24">

        <div className="flex flex-col items-center mb-10">
          <div className={`w-40 h-40 rounded-full border-4 overflow-hidden shadow-lg transition-colors duration-300 ${dark ? 'border-gray-900 bg-gray-700' : 'border-[#EDF6F9] bg-white'}`}>
            <img src="/images/user_avatar.png" alt="Eleanor Vance" className="w-full h-full object-cover" />
          </div>
          <h1 className={`mt-4 text-3xl font-bold ${dark ? 'text-white' : 'text-[#2D3436]'}`}>Eleanor Vance</h1>
          <p className={`mt-1 flex items-center gap-2 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            <FaStar className="text-yellow-400" /> Premium Caretaker &bull; Joined March 2023
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* Personal Details Card */}
          <div className={`lg:col-span-1 rounded-3xl p-6 shadow-sm border flex flex-col gap-6 transition-colors duration-300 ${dark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
            <h3 className={`text-xl font-bold border-b pb-3 ${dark ? 'text-white border-gray-700' : 'text-[#2D3436] border-gray-100'}`}>Personal Details</h3>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full transition-colors duration-300 ${dark ? 'bg-gray-700 text-teal-400' : 'bg-[#EDF6F9] text-[#006D77]'}`}>
                  <FaEnvelope className="w-4 h-4" />
                </div>
                <div>
                  <p className={`text-sm ${dark ? 'text-gray-400' : 'text-gray-500'}`}>Email Address</p>
                  <p className={`font-medium ${dark ? 'text-gray-200' : 'text-[#2D3436]'}`}>[EMAIL_ADDRESS]</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full transition-colors duration-300 ${dark ? 'bg-gray-700 text-teal-400' : 'bg-[#EDF6F9] text-[#006D77]'}`}>
                  <FaPhoneAlt className="w-4 h-4" />
                </div>
                <div>
                  <p className={`text-sm ${dark ? 'text-gray-400' : 'text-gray-500'}`}>Phone Number</p>
                  <p className={`font-medium ${dark ? 'text-gray-200' : 'text-[#2D3436]'}`}>+20 1555067502</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full transition-colors duration-300 ${dark ? 'bg-gray-700 text-teal-400' : 'bg-[#EDF6F9] text-[#006D77]'}`}>
                  <FaMapMarkerAlt className="w-4 h-4" />
                </div>
                <div>
                  <p className={`text-sm ${dark ? 'text-gray-400' : 'text-gray-500'}`}>Location</p>
                  <p className={`font-medium ${dark ? 'text-gray-200' : 'text-[#2D3436]'}`}>Cairo, Egypt</p>
                </div>
              </div>
            </div>

            <button className={`mt-4 w-full py-3 rounded-xl border-2 font-semibold transition-all flex justify-center items-center gap-2 ${dark ? 'border-teal-400 text-teal-400 hover:bg-teal-600 hover:text-white' : 'border-[#006D77] text-[#006D77] hover:bg-[#006D77] hover:text-white'}`}>
              <FaEdit /> Edit Profile
            </button>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-8">

            {/* Saved Companions */}
            <div className={`rounded-3xl p-6 shadow-sm border transition-colors duration-300 ${dark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
              <div className="flex justify-between items-center mb-6">
                <h3 className={`text-xl font-bold flex items-center gap-2 ${dark ? 'text-white' : 'text-[#2D3436]'}`}>
                  <FaPaw className={dark ? 'text-teal-400' : 'text-[#006D77]'} /> Saved Companions
                </h3>
                <button className={`text-sm font-semibold hover:underline ${dark ? 'text-teal-400' : 'text-[#006D77]'}`}>View All</button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className={`flex items-center gap-4 p-4 border rounded-2xl hover:shadow-md transition-shadow cursor-pointer ${dark ? 'border-gray-700 bg-gray-800' : 'border-gray-100'}`}>
                  <img src="/images/cat_mochi.png" alt="Mochi" className="w-16 h-16 rounded-full object-cover shadow-sm" />
                  <div>
                    <h4 className={`font-bold ${dark ? 'text-white' : 'text-[#2D3436]'}`}>Mochi</h4>
                    <p className={`text-sm ${dark ? 'text-gray-400' : 'text-gray-500'}`}>Scottish Fold &bull; 2 yrs</p>
                  </div>
                </div>

                <div className={`flex items-center gap-4 p-4 border rounded-2xl hover:shadow-md transition-shadow cursor-pointer ${dark ? 'border-gray-700 bg-gray-800' : 'border-gray-100'}`}>
                  <img src="/images/cat_jasper.png" alt="Jasper" className="w-16 h-16 rounded-full object-cover shadow-sm" />
                  <div>
                    <h4 className={`font-bold ${dark ? 'text-white' : 'text-[#2D3436]'}`}>Jasper</h4>
                    <p className={`text-sm ${dark ? 'text-gray-400' : 'text-gray-500'}`}>Domestic Shorthair &bull; 4 yrs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Adoption Progress */}
            <div className={`rounded-3xl p-6 shadow-sm border transition-colors duration-300 ${dark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
              <h3 className={`text-xl font-bold mb-6 flex items-center gap-2 ${dark ? 'text-white' : 'text-[#2D3436]'}`}>
                <FaRegClock className={dark ? 'text-teal-400' : 'text-[#006D77]'} /> Adoption Progress
              </h3>

              <div className={`border rounded-2xl p-5 relative overflow-hidden ${dark ? 'border-gray-700' : 'border-gray-100'}`}>
                <div className={`absolute top-0 left-0 w-2 h-full ${dark ? 'bg-teal-600' : 'bg-[#83C5BE]'}`}></div>
                <div className="ml-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className={`font-bold text-lg ${dark ? 'text-white' : 'text-[#2D3436]'}`}>Application for Luna</h4>
                      <p className={`text-sm ${dark ? 'text-gray-400' : 'text-gray-500'}`}>Submitted on April 28, 2026</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${dark ? 'bg-orange-900/40 text-orange-300' : 'bg-[#FFDDD2] text-[#2D3436]'}`}>Under Review</span>
                  </div>

                  <div className="mt-6">
                    <div className={`flex justify-between text-sm mb-2 font-medium ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
                      <span>Step 2 of 4</span>
                      <span>50%</span>
                    </div>
                    <div className={`w-full rounded-full h-2.5 ${dark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                      <div className={`h-2.5 rounded-full ${dark ? 'bg-teal-500' : 'bg-[#006D77]'}`} style={{ width: '50%' }}></div>
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