import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

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

  const handleRegister = async (e) => {

    e.preventDefault();

    const newErrors = {
      name: "",
      email: "",
      password: "",
    };

    if (!name.trim()) {
      newErrors.name = "Full name is required";
    } else if (name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

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

    if (
      newErrors.name ||
      newErrors.email ||
      newErrors.password
    ) {
      return;
    }

    try {

      const response = await fetch(
        "http://localhost:3000/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Account Created Successfully");
        console.log(data);
        navigate("/login");
      } else {
        alert(data.message || "Registration Failed");
      }

    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }

  };

  return (

    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">

      <div className="flex-grow flex items-center justify-center px-4 py-10">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 transition-colors duration-300"
        >

          <div className="relative hidden md:block">

            <img
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131"
              className="h-full w-full object-cover"
              alt="Beautiful cat"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent flex flex-col justify-end p-8 text-white">

              <h2 className="text-2xl font-bold mb-2">
                Start your journey today
              </h2>

              <p className="text-sm text-gray-200">
                Create an account and find your perfect feline friend.
              </p>

            </div>

          </div>

          <div className="p-8 md:p-10 flex flex-col justify-center">

            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Create Account
            </h1>

            <form onSubmit={handleRegister} className="space-y-4">

              <div>

                <input
                  type="text"
                  className="w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}

              </div>

              <div>

                <input
                  type="email"
                  className="w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}

              </div>

              <div>

                <div className="relative">

                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-xl px-4 py-3 pr-16 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-teal-600 dark:text-teal-400 font-medium"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>

                </div>

                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}

              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl font-medium transition-colors"
              >
                Create Account
              </button>

              <div className="text-center text-sm text-gray-500 dark:text-gray-400">

                Already have an account?{" "}

                <Link
                  to="/login"
                  className="text-teal-600 dark:text-teal-400 font-medium hover:underline"
                >
                  Login here
                </Link>

              </div>

            </form>

          </div>

        </motion.div>

      </div>

    </div>
  );
}