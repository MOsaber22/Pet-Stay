import React from 'react';
import { FaPaperPlane, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { useTheme } from '../../context/ThemeProvider';

const Contact = () => {
  const { theme } = useTheme();
  const dark = theme === 'dark';

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${dark ? 'bg-gray-900 text-gray-100' : 'bg-[#EDF6F9] text-[#2D3436]'}`}>
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className={`font-bold text-sm tracking-widest uppercase mb-3 ${dark ? 'text-teal-400' : 'text-[#006D77]'}`}>Connect With Us</p>
          <h1 className={`mb-4 text-4xl md:text-5xl font-bold tracking-tight ${dark ? 'text-white' : 'text-[#2D3436]'}`}>
            Every purr starts with{' '}
            <span className={`font-serif italic ${dark ? 'text-teal-400' : 'text-[#006D77]'}`}>a conversation.</span>
          </h1>
          <p className={`max-w-2xl mx-auto text-lg ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            Whether you're looking to adopt, volunteer, or simply have questions about our feline residents, our team is here to guide your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Left Column */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className={`p-6 rounded-[2rem] shadow-sm flex flex-col gap-6 transition-colors duration-300 ${dark ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden shrink-0">
                <img src="/images/contact_cat.png" alt="Happy Cat" className="w-full h-full object-cover object-center" />
              </div>
              <div className="px-2 pb-2">
                <p className={`font-medium text-lg leading-snug mb-3 ${dark ? 'text-gray-200' : 'text-[#2D3436]'}`}>
                  "Pet-stay made the adoption process so warm and professional. We found our soulmate here."
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8 px-2 mt-4">
              <div>
                <p className={`text-xs font-bold tracking-widest uppercase mb-3 ${dark ? 'text-gray-500' : 'text-gray-400'}`}>Our Sanctuary</p>
                <p className={`font-semibold text-lg ${dark ? 'text-gray-200' : 'text-[#2D3436]'}`}>xxxxxxx</p>
              </div>

              <div>
                <p className={`text-xs font-bold tracking-widest uppercase mb-3 ${dark ? 'text-gray-500' : 'text-gray-400'}`}>Direct Lines</p>
                <p className={`font-semibold text-lg ${dark ? 'text-gray-200' : 'text-[#2D3436]'}`}>[EMAIL_ADDRESS]</p>
                <p className={`font-semibold text-lg ${dark ? 'text-gray-200' : 'text-[#2D3436]'}`}>+20 1555067502</p>
              </div>

              <div>
                <p className={`text-xs font-bold tracking-widest uppercase mb-3 ${dark ? 'text-gray-500' : 'text-gray-400'}`}>Follow The Journey</p>
                <div className={`flex gap-4 ${dark ? 'text-teal-400' : 'text-[#006D77]'}`}>
                  <FaInstagram className={`w-6 h-6 cursor-pointer transition-colors ${dark ? 'hover:text-gray-200' : 'hover:text-[#2D3436]'}`} />
                  <FaTwitter className={`w-6 h-6 cursor-pointer transition-colors ${dark ? 'hover:text-gray-200' : 'hover:text-[#2D3436]'}`} />
                  <FaFacebook className={`w-6 h-6 cursor-pointer transition-colors ${dark ? 'hover:text-gray-200' : 'hover:text-[#2D3436]'}`} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Form */}
          <div className={`lg:col-span-3 p-10 rounded-[2rem] shadow-sm transition-colors duration-300 ${dark ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className={`text-3xl font-bold mb-2 ${dark ? 'text-white' : 'text-[#2D3436]'}`}>Send a Message</h3>
            <p className={`mb-8 font-medium ${dark ? 'text-gray-400' : 'text-gray-500'}`}>We typically respond within 24 hours.</p>

            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className={`text-xs font-bold tracking-widest uppercase ${dark ? 'text-gray-400' : 'text-gray-500'}`}>Your Name</label>
                <input type="text" placeholder="Oliver Whiskers"
                  className={`w-full px-4 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#83C5BE] transition-all font-medium ${dark ? 'border-gray-700 bg-gray-700 text-gray-100 placeholder-gray-500 focus:bg-gray-600' : 'border-gray-200 bg-gray-50/50 text-[#2D3436] focus:bg-white'}`} />
              </div>

              <div className="flex flex-col gap-2">
                <label className={`text-xs font-bold tracking-widest uppercase ${dark ? 'text-gray-400' : 'text-gray-500'}`}>Email Address</label>
                <input type="email" placeholder="oliver@example.com"
                  className={`w-full px-4 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#83C5BE] transition-all font-medium ${dark ? 'border-gray-700 bg-gray-700 text-gray-100 placeholder-gray-500 focus:bg-gray-600' : 'border-gray-200 bg-gray-50/50 text-[#2D3436] focus:bg-white'}`} />
              </div>

              <div className="flex flex-col gap-2">
                <label className={`text-xs font-bold tracking-widest uppercase ${dark ? 'text-gray-400' : 'text-gray-500'}`}>How Can We Help?</label>
                <select className={`w-full px-4 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#83C5BE] transition-all font-medium appearance-none ${dark ? 'border-gray-700 bg-gray-700 text-gray-100 focus:bg-gray-600' : 'border-gray-200 bg-gray-50/50 text-[#2D3436] focus:bg-white'}`}>
                  <option>Adoption Inquiry</option>
                  <option>Volunteering</option>
                  <option>Donation</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className={`text-xs font-bold tracking-widest uppercase ${dark ? 'text-gray-400' : 'text-gray-500'}`}>Message</label>
                <textarea rows="4" placeholder="Tell us about the home you can provide or any questions you have..."
                  className={`w-full px-4 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#83C5BE] transition-all resize-none font-medium ${dark ? 'border-gray-700 bg-gray-700 text-gray-100 placeholder-gray-500 focus:bg-gray-600' : 'border-gray-200 bg-gray-50/50 text-[#2D3436] focus:bg-white'}`}></textarea>
              </div>

              <button type="submit"
                className={`mt-4 text-white py-4 px-8 rounded-xl font-bold flex items-center justify-center gap-3 transition-all self-start ${dark ? 'bg-teal-600 hover:bg-teal-700' : 'bg-[#006D77] hover:bg-[#005a62]'}`}>
                Send Message <FaPaperPlane className="text-sm" />
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Newsletter Footer */}
      <div className={`py-20 px-4 sm:px-6 lg:px-8 text-center rounded-t-[3rem] mt-16 transition-colors duration-300 ${dark ? 'bg-gray-800' : 'bg-[#1B2B3A]'}`}>
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay in the whiskers loop.</h2>
          <p className={`mb-8 text-lg ${dark ? 'text-teal-400' : 'text-[#83C5BE]'}`}>
            Weekly stories of success, upcoming adoption events, and care tips delivered to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
            <input type="email" placeholder="Enter your email"
              className={`flex-1 px-6 py-4 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-[#83C5BE] font-medium transition-colors ${dark ? 'bg-gray-700 text-gray-100 placeholder-gray-400' : 'text-[#2D3436]'}`} />
            <button className={`px-8 py-4 rounded-full font-bold transition-colors whitespace-nowrap ${dark ? 'bg-teal-500 text-white hover:bg-teal-400' : 'bg-[#83C5BE] text-[#1B2B3A] hover:bg-white'}`}>
              Join Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;