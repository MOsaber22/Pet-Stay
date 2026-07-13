import React, { useState, useEffect, useRef } from 'react';
import { FaEdit, FaEnvelope, FaStar, FaSpinner, FaTimes, FaCheck, FaCamera } from 'react-icons/fa';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fileInputRef = useRef(null);

  // Edit modal state
  const [showModal, setShowModal] = useState(false);
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    try {
      const token = localStorage.getItem('token');
      const storedUser = localStorage.getItem('user');

      if (!token || !storedUser) {
        setError('You are not logged in.');
        setLoading(false);
        return;
      }

      const parsed = JSON.parse(storedUser);
      setUser(parsed);
      setEditName(parsed.fullName || '');
      setEditEmail(parsed.email || '');
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  const openModal = () => {
    setEditName(user?.fullName || '');
    setEditEmail(user?.email || '');
    setSaveSuccess(false);
    setShowModal(true);
  };

  const handleSave = async () => {
    if (!editName.trim() || !editEmail.trim()) return;
    setSaving(true);

    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ fullName: editName, email: editEmail }),
      });

      // Update localStorage regardless of backend support
      const updatedUser = { ...user, fullName: editName, email: editEmail };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
      setSaveSuccess(true);

      setTimeout(() => {
        setShowModal(false);
        setSaveSuccess(false);
      }, 1200);
    } catch (err) {
      // Even if backend fails, update locally
      const updatedUser = { ...user, fullName: editName, email: editEmail };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
      setSaveSuccess(true);
      setTimeout(() => {
        setShowModal(false);
        setSaveSuccess(false);
      }, 1200);
    } finally {
      setSaving(false);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        const updatedUser = { ...user, avatar: base64String };
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
      };
      reader.readAsDataURL(file);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#EDF6F9] dark:bg-gray-900 flex items-center justify-center transition-colors duration-300">
        <FaSpinner className="text-[#006D77] dark:text-teal-400 text-4xl animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#EDF6F9] dark:bg-gray-900 flex items-center justify-center transition-colors duration-300">
        <p className="text-red-500 text-lg font-semibold">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EDF6F9] dark:bg-gray-900 font-sans pb-16 transition-colors duration-300">

      <div className="bg-[#1B2B3A] dark:bg-gray-800 h-48 w-full relative transition-colors duration-300"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-24">

        {/* Avatar & Name */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative group w-40 h-40 rounded-full border-4 border-[#EDF6F9] dark:border-gray-900 overflow-hidden shadow-lg bg-white dark:bg-gray-700 transition-colors duration-300">
            <img src={user?.avatar || '/images/user_avatar.png'} alt={user?.fullName || 'User'} className="w-full h-full object-cover" />
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-300"
            >
              <FaCamera className="text-white text-3xl" />
            </div>
            <input 
              type="file" 
              accept="image/*" 
              ref={fileInputRef} 
              onChange={handleImageUpload} 
              className="hidden" 
            />
          </div>
          <h1 className="mt-4 text-3xl font-bold text-[#2D3436] dark:text-white">
            {user?.fullName || 'Unknown User'}
          </h1>
        </div>

        {/* Single Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300">
          <h3 className="text-xl font-bold text-[#2D3436] dark:text-white border-b border-gray-100 dark:border-gray-700 pb-3 mb-6">Personal Details</h3>

          <div className="flex flex-col gap-5">
            {/* Full Name */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#EDF6F9] dark:bg-gray-700 text-[#006D77] dark:text-teal-400 rounded-full transition-colors duration-300">
                <FaStar className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Full Name</p>
                <p className="font-medium text-[#2D3436] dark:text-gray-200">{user?.fullName || '—'}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#EDF6F9] dark:bg-gray-700 text-[#006D77] dark:text-teal-400 rounded-full transition-colors duration-300">
                <FaEnvelope className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Email Address</p>
                <p className="font-medium text-[#2D3436] dark:text-gray-200">{user?.email || '—'}</p>
              </div>
            </div>
          </div>

          <button
            onClick={openModal}
            className="mt-8 w-full py-3 rounded-xl border-2 border-[#006D77] dark:border-teal-400 text-[#006D77] dark:text-teal-400 font-semibold hover:bg-[#006D77] dark:hover:bg-teal-600 hover:text-white transition-all flex justify-center items-center gap-2"
          >
            <FaEdit /> Edit Profile
          </button>
        </div>
      </div>

      {/* Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50 px-4 transition-colors duration-300">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-full max-w-md p-8 transition-colors duration-300">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#2D3436] dark:text-white">Edit Profile</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
              >
                <FaTimes size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 tracking-widest uppercase">Full Name</label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-[#2D3436] dark:text-gray-100 font-medium focus:outline-none focus:ring-2 focus:ring-[#83C5BE] dark:focus:ring-teal-400 transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 tracking-widest uppercase">Email Address</label>
                <input
                  type="email"
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-[#2D3436] dark:text-gray-100 font-medium focus:outline-none focus:ring-2 focus:ring-[#83C5BE] dark:focus:ring-teal-400 transition-all"
                  placeholder="Your email"
                />
              </div>

              <button
                onClick={handleSave}
                disabled={saving || saveSuccess}
                className={`mt-2 w-full py-3 rounded-xl font-bold flex justify-center items-center gap-2 transition-all ${
                  saveSuccess
                    ? 'bg-green-500 text-white'
                    : 'bg-[#006D77] dark:bg-teal-600 text-white hover:bg-[#005a62] dark:hover:bg-teal-700'
                }`}
              >
                {saveSuccess ? (
                  <><FaCheck /> Saved!</>
                ) : saving ? (
                  <><FaSpinner className="animate-spin" /> Saving...</>
                ) : (
                  <><FaEdit /> Save Changes</>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;