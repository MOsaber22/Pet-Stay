import { FaHeart, FaShieldAlt, FaStar } from "react-icons/fa";
import { Typography } from "@material-tailwind/react";
import React from "react";

const Values = () => {
  const values = [
    {
      icon: <FaHeart className="text-pink-500" size={22} />,
      bg: "bg-pink-50 dark:bg-pink-500/10",
      title: "Pure Empathy",
      desc: "We put the emotional well-being of every pet at the heart of every decision we make.",
    },
    {
      icon: <FaShieldAlt className="text-teal-500" size={22} />,
      bg: "bg-teal-50 dark:bg-teal-500/10",
      title: "Lifelong Trust",
      desc: "Our relationship with pet owners doesn't end at the door — we provide ongoing support for every new family.",
    },
    {
      icon: <FaStar className="text-orange-400" size={22} />,
      bg: "bg-orange-50 dark:bg-orange-500/10",
      title: "Curated Care",
      desc: "Every sitter is unique. We specialize in matching pets with professionals dedicated to ensuring a perfect fit.",
    },
  ];
  return (
    <>
      <section className="bg-gray-50 dark:bg-transparent py-20 px-6 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black dark:text-white">
              Values that guide us
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm">
              Built on trust, empathy, and endless love for your furry family.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {values.map(({ icon, bg, title, desc }) => (
              <div
                key={title}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700"
              >
                <div
                  className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center mb-4`}
                >
                  {icon}
                </div>
                <Typography className="text-black dark:text-white font-bold text-base mb-2">
                  {title}
                </Typography>
                <Typography className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {desc}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Values;
