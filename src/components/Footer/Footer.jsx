import { Link } from "react-router-dom";
import { FaPaw } from "react-icons/fa";
import { MdEmail, MdLanguage } from "react-icons/md";
import { Typography } from "@material-tailwind/react";

const footerLinks = [
  "Privacy Policy",
  "Terms of Service",
  "Volunteer",
  "Donate",
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="w-full md:w-auto flex flex-col items-start text-left">
          <Link
            to="/"
            className="flex items-center gap-1.5 text-teal-700 font-extrabold text-lg"
          >
            <FaPaw size={16} />
            <span>
              Pet<span className="text-gray-800 dark:text-gray-200">Stay</span>
            </span>
          </Link>
          <Typography className="text-gray-500 dark:text-gray-400 text-xs mt-1">
            © {new Date().getFullYear()} PetStay. Curating companionship with
            soul.
          </Typography>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 w-full md:w-auto">
          {footerLinks.map((label) => (
            <span
              key={label}
              className="text-gray-500 dark:text-gray-400 hover:dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 text-sm cursor-pointer transition-colors"
            >
              {label}
            </span>
          ))}
        </nav>

        <div className="flex items-center justify-center gap-3 w-full md:w-auto">
          <a
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-400 dark:hover:border-teal-400 transition-colors cursor-pointer"
          >
            <MdLanguage size={16} />
          </a>
          <a className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-400 dark:hover:border-teal-400 transition-colors cursor-pointer">
            <MdEmail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
