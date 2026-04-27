import { Link } from "react-router-dom";
import { FaPaw } from "react-icons/fa";
import { MdEmail, MdLanguage } from "react-icons/md";
import { Typography } from "@material-tailwind/react";

const FOOTER_LINKS = [
  "Privacy Policy",
  "Terms of Service",
  "Volunteer",
  "Donate",
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left — Logo + tagline */}
        <div>
          <Link
            to="/"
            className="flex items-center gap-1.5 text-teal-700 font-extrabold text-lg"
          >
            <FaPaw size={16} />
            <span>
              Pet<span className="text-gray-800">Stay</span>
            </span>
          </Link>
          <Typography className="text-gray-500 text-xs mt-1">
            © {new Date().getFullYear()} PetStay. Curating companionship with
            soul.
          </Typography>
        </div>

        {/* Center — nav links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-1">
          {FOOTER_LINKS.map((label) => (
            <span key={label} className="text-gray-500 text-sm cursor-default">
              {label}
            </span>
          ))}
        </nav>

        {/* Right — social icons */}
        <div className="flex items-center gap-2">
          <a
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-teal-600 hover:border-teal-400 transition-colors"
          >
            <MdLanguage size={16} />
          </a>
          <a className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-teal-600 hover:border-teal-400 transition-colors">
            <MdEmail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
