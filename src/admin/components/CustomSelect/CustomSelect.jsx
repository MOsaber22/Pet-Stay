import React, { useState, useRef, useEffect } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

const CustomSelect = ({ name, value, onChange, options, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (optionValue) => {
    onChange({ target: { name, value: optionValue } });
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative">
      <label className="block text-xs tracking-[0.15em] font-bold text-gray-700 dark:text-gray-300 uppercase mb-2">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-700/10 transition-all flex items-center justify-between bg-white hover:border-teal-700 dark:hover:border-teal-600"
      >
        <span className="text-gray-900 dark:text-white">{value}</span>
        <HiOutlineChevronDown
          className={`text-gray-400 dark:text-gray-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg z-50">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => handleSelect(option)}
              className={`w-full text-left px-4 py-3 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                value === option
                  ? "bg-teal-700 text-white font-semibold dark:bg-teal-600"
                  : "text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-gray-700 hover:text-teal-700 dark:hover:text-teal-400"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
