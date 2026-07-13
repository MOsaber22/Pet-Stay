import React, { useState } from 'react';
import { FaPaperPlane, FaInstagram, FaTwitter, FaFacebook, FaCheckCircle } from "react-icons/fa";

const Contact = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      e.target.reset();
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#EDF6F9] dark:bg-gray-900 font-sans text-[#2D3436] dark:text-gray-200 transition-colors duration-300">
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-[#006D77] dark:text-teal-400 font-bold text-sm tracking-widest uppercase mb-3">Connect With Us</p>
          <h1 className="mb-4 text-4xl md:text-5xl font-bold tracking-tight text-[#2D3436] dark:text-white">
            Every purr starts with <span className="text-[#006D77] dark:text-teal-400 font-serif italic">a conversation.</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Whether you're looking to adopt, volunteer, or simply have questions about our feline residents, our team is here to guide your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-[2rem] shadow-sm flex flex-col gap-6 transition-colors duration-300">
              <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden shrink-0">
                <img src="/images/contact_cat.png" alt="Happy Cat" className="w-full h-full object-cover object-center" />
              </div>
              <div className="px-2 pb-2">
                <p className="text-[#2D3436] dark:text-gray-200 font-medium text-lg leading-snug mb-3">
                  "Pet-stay made the adoption process so warm and professional. We found our soulmate here."
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8 px-2 mt-4">
              <div>
                <p className="text-xs font-bold text-gray-400 dark:text-gray-500 tracking-widest uppercase mb-3">Our Sanctuary</p>
                <p className="text-[#2D3436] dark:text-gray-200 font-semibold text-lg">xxxxxxx</p>
              </div>

              <div>
                <p className="text-xs font-bold text-gray-400 dark:text-gray-500 tracking-widest uppercase mb-3">Direct Lines</p>
                <p className="text-[#2D3436] dark:text-gray-200 font-semibold text-lg">[EMAIL_ADDRESS]</p>
                <p className="text-[#2D3436] dark:text-gray-200 font-semibold text-lg">+20 1555067502</p>
              </div>

              <div>
                <p className="text-xs font-bold text-gray-400 dark:text-gray-500 tracking-widest uppercase mb-3">Follow The Journey</p>
                <div className="flex gap-4 text-[#006D77] dark:text-teal-400">
                  <FaInstagram className="w-6 h-6 cursor-pointer hover:text-[#2D3436] dark:hover:text-gray-200 transition-colors" />
                  <FaTwitter className="w-6 h-6 cursor-pointer hover:text-[#2D3436] dark:hover:text-gray-200 transition-colors" />
                  <FaFacebook className="w-6 h-6 cursor-pointer hover:text-[#2D3436] dark:hover:text-gray-200 transition-colors" />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white dark:bg-gray-800 p-10 rounded-[2rem] shadow-sm transition-colors duration-300">
            <h3 className="text-3xl font-bold text-[#2D3436] dark:text-white mb-2">Send a Message</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8 font-medium">We typically respond within 24 hours.</p>

            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 tracking-widest uppercase">Your Name</label>
                <input type="text" placeholder="Oliver Whiskers" className="w-full px-4 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-[#83C5BE] dark:focus:ring-teal-400 focus:bg-white dark:focus:bg-gray-600 transition-all text-[#2D3436] dark:text-gray-100 font-medium placeholder-gray-400 dark:placeholder-gray-500" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 tracking-widest uppercase">Email Address</label>
                <input type="email" placeholder="oliver@example.com" className="w-full px-4 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-[#83C5BE] dark:focus:ring-teal-400 focus:bg-white dark:focus:bg-gray-600 transition-all text-[#2D3436] dark:text-gray-100 font-medium placeholder-gray-400 dark:placeholder-gray-500" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 tracking-widest uppercase">How Can We Help?</label>
                <select className="w-full px-4 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-[#83C5BE] dark:focus:ring-teal-400 focus:bg-white dark:focus:bg-gray-600 transition-all text-[#2D3436] dark:text-gray-100 font-medium appearance-none">
                  <option>Adoption Inquiry</option>
                  <option>Volunteering</option>
                  <option>Donation</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 tracking-widest uppercase">Message</label>
                <textarea rows="4" placeholder="Tell us about the home you can provide or any questions you have..." className="w-full px-4 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-[#83C5BE] dark:focus:ring-teal-400 focus:bg-white dark:focus:bg-gray-600 transition-all resize-none text-[#2D3436] dark:text-gray-100 font-medium placeholder-gray-400 dark:placeholder-gray-500"></textarea>
              </div>

              <button type="submit" disabled={isSent} className={`mt-4 text-white py-4 px-8 rounded-xl font-bold flex items-center justify-center gap-3 transition-all self-start ${isSent ? 'bg-green-500' : 'bg-[#006D77] dark:bg-teal-600 hover:bg-[#005a62] dark:hover:bg-teal-700'}`}>
                {isSent ? (
                  <>Message Sent! <FaCheckCircle className="text-sm" /></>
                ) : (
                  <>Send Message <FaPaperPlane className="text-sm" /></>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>

      <div className="bg-[#1B2B3A] dark:bg-gray-800 py-20 px-4 sm:px-6 lg:px-8 text-center rounded-t-[3rem] mt-16 transition-colors duration-300">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay in the whiskers loop.</h2>
          <p className="text-[#83C5BE] dark:text-teal-400 mb-8 text-lg">
            Weekly stories of success, upcoming adoption events, and care tips delivered to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
            <input type="email" placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-[#83C5BE] dark:focus:ring-teal-400 text-[#2D3436] font-medium dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400 transition-colors" />
            <button className="bg-[#83C5BE] dark:bg-teal-500 text-[#1B2B3A] dark:text-white px-8 py-4 rounded-full font-bold hover:bg-white dark:hover:bg-teal-400 transition-colors whitespace-nowrap">
              Join Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;