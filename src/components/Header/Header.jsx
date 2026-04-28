import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  IconButton,
  Button,
  Typography,
} from "@material-tailwind/react";
import { FaPaw, FaBars, FaTimes } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

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
                ? "text-teal-600 border-b-2 border-teal-500"
                : "text-black hover:text-teal-600"
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

  return (
    <Navbar
      className="sticky top-0 z-50 max-w-full rounded-none border-b border-gray-100 shadow-sm px-6 py-3"
      shadow={false}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-teal-600 font-extrabold text-xl"
        >
          <FaPaw size={20} />
          <span>
            Pet<span className="text-gray-800">Stay</span>
          </span>
        </NavLink>
        <div className="hidden md:block">
          <NavList onClose={undefined} />
        </div>
        <div className="hidden md:flex items-center gap-3">
          <NavLink to="/login">
            <Button
              variant="text"
              size="sm"
              className="text-gray-600 hover:text-teal-600 normal-case font-semibold"
            >
              <CgProfile fontSize={25} />
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
          <NavLink to="/login">
            <Button
              variant="text"
              size="sm"
              className="text-gray-600 hover:text-teal-600 normal-case font-semibold px-2"
            >
              <CgProfile fontSize={22} />
            </Button>
          </NavLink>
          <NavLink to="/register">
            <Button
              size="sm"
              className="bg-teal-500 hover:bg-teal-600 shadow-none hover:shadow-none normal-case font-semibold rounded-full px-4"
            >
              Adopt Now
            </Button>
          </NavLink>
          <IconButton
            variant="text"
            className="text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes size={20} /> : <FaBars size={20} />}
          </IconButton>
        </div>
      </div>
      {open && (
        <div className="max-w-6xl mx-auto pt-4 pb-2 border-t border-gray-100 mt-3">
          <NavList onClose={() => setOpen(false)} />
        </div>
      )}
    </Navbar>
  );
};

export default Header;
