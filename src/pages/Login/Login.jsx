import { FaUserCircle, FaSun, FaMoon, FaEnvelope, FaLock, FaGoogle, FaApple } from "react-icons/fa";
import { useNavigate, Link, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function LoginPage() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleLogin = (e) => {
    e.preventDefault();
    const newErrors = { email: "", password: "" };

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!email.includes("@")) {
      newErrors.email = "Invalid email format";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    if (newErrors.email || newErrors.password) return;
    navigate("/");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">

       <div className="flex-grow flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-5xl bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 transition-colors duration-300">

          <div className="relative hidden md:block group overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Friendly cat"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-900/20 to-transparent" />
            <div className="absolute bottom-12 left-8 right-8 text-white">
              <h2 className="text-3xl font-extrabold tracking-tight mb-3">
                Finding soulmates, one purr at a time.
              </h2>
              <p className="text-sm text-gray-200 leading-relaxed">
                Join our community of cat lovers and discover your perfect companion.
              </p>
            </div>
          </div>

          <div className="p-8 md:p-14 flex flex-col justify-center">
            <div className="mb-8">
              <h1 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 mb-1">
                Welcome Back
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Please enter your details to continue your journey.
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-700 p-1.5 rounded-full flex mb-8 w-fit">
              <span className="px-8 py-2.5 rounded-full text-sm font-bold bg-teal-600 text-white shadow-sm">
                Login
              </span>
              <Link
                to="/register"
                className="px-8 py-2.5 rounded-full text-sm font-bold text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                Register
              </Link>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <div className="relative">
                  <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    className="w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-full pl-14 pr-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-1 ml-2">{errors.email}</p>}
              </div>

              <div>
                <div className="relative">
                  <FaLock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-full pl-14 pr-16 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-xs text-teal-600 dark:text-teal-400 font-semibold"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-sm mt-1 ml-2">{errors.password}</p>}
              </div>

              <div className="flex items-center justify-between py-1">
                <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-500 dark:text-gray-400">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="w-4 h-4 rounded text-teal-600 focus:ring-teal-400"
                  />
                  Remember me
                </label>
                <Link to="/forgot-password" className="text-sm font-semibold text-teal-600 dark:text-teal-400 hover:underline">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 rounded-full font-bold text-base shadow-lg shadow-teal-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Login to WhereMy Home
              </button>

              <div className="pt-6 mt-2 border-t border-gray-200 dark:border-gray-700">
                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Or continue with
                </p>
                <div className="flex gap-4">
                  <button
                    type="button"
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors py-3 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-200"
                  >
                    <FaGoogle /> Google
                  </button>
                  <button
                    type="button"
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors py-3 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-200"
                  >
                    <FaApple /> Apple
                  </button>
                </div>
              </div>

              <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                Don't have an account?{" "}
                <Link to="/register" className="text-teal-600 dark:text-teal-400 font-medium hover:underline">
                  Create account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}