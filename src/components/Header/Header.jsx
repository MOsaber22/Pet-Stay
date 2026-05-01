import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  IconButton,
  Button,
  Typography,
} from "@material-tailwind/react";
import { FaPaw, FaBars, FaTimes, FaMoon } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useTheme } from "../../context/ThemeProvider";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "All Cats", to: "/all-cats" },
  { label: "Contact", to: "/contact" },
];

const NavList = ({ onClose }) => (
  <ul className="flex flex-col md:flex-row md:items-center gap-1 md:gap-6">
    {navLinks.map(({ label, to }) => (
      <li key={to}>
        <NavLink
          to={to}
          end={to === "/"}
          onClick={onClose}
          className={({ isActive }) =>
            `block text-sm font-semibold px-2 py-1 rounded transition-colors duration-150 ${
              isActive
                ? "text-teal-600 dark:text-teal-400 border-b-2 border-teal-500 dark:border-teal-400"
                : "text-black dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
            }`
          }
        >
          <Typography as="span" variant="small" className="font-semibold">
            {label}
          </Typography>
        </NavLink>
      </li>
    ))}
  </ul>
);

const Header = () => {
  const [open, setOpen] = useState(false);
  const { changeTheme } = useTheme();

  return (
    <Navbar
      className="sticky top-0 z-50 max-w-full bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 rounded-none shadow-sm px-6 py-3 transition-colors duration-300"
      shadow={false}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-teal-600 font-extrabold text-xl"
        >
          <FaPaw size={20} />
          <span>
            Pet<span className="text-gray-800 dark:text-gray-200">Stay</span>
          </span>
        </NavLink>
        <div className="hidden md:block">
          <NavList onClose={undefined} />
        </div>
        <div className="hidden md:flex items-center gap-3">
          <IconButton
            variant="text"
            onClick={changeTheme}
            className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 rounded-full"
          >
            <FaMoon className="dark:text-teal-500" size={18} />
          </IconButton>
          <NavLink to="/login">
            <Button
              variant="text"
              size="sm"
              className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 normal-case font-semibold"
            >
              <CgProfile
                className="text-teal-500 hover:  dark:text-white"
                fontSize={25}
              />
            </Button>
          </NavLink>
          <NavLink to="/register">
            <Button
              size="sm"
              className="bg-teal-500 hover:bg-teal-600 shadow-none hover:shadow-none normal-case font-semibold rounded-full px-5"
            >
              Adopt Now
            </Button>
          </NavLink>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <IconButton
            variant="text"
            onClick={changeTheme}
            className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 rounded-full"
          >
            <FaMoon className="dark:text-teal-500" size={16} />
          </IconButton>
          <NavLink to="/login">
            <Button
              variant="text"
              size="sm"
              className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 normal-case font-semibold px-2"
            >
              <CgProfile
                className="text-teal-500 dark:text-white"
                fontSize={22}
              />
            </Button>
          </NavLink>
          <IconButton
            variant="text"
            className="text-gray-700 dark:text-gray-300"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes size={20} /> : <FaBars size={20} />}
          </IconButton>
        </div>
      </div>
      {open && (
        <div className="max-w-6xl mx-auto pt-4 pb-2 border-t border-gray-100 dark:border-gray-800 mt-3 flex flex-col gap-4">
          <NavList onClose={() => setOpen(false)} />
          <div className="px-2">
            <NavLink to="/register" onClick={() => setOpen(false)}>
              <Button
                fullWidth
                size="sm"
                className="bg-teal-500 hover:bg-teal-600 shadow-none hover:shadow-none normal-case font-semibold rounded-full"
              >
                Adopt Now
              </Button>
            </NavLink>
          </div>
        </div>
      )}
    </Navbar>
  );
};

export default Header;
