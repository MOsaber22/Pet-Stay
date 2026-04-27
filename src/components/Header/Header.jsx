import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  Collapse,
  IconButton,
  Button,
  Typography,
} from "@material-tailwind/react";
import { FaPaw, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "All Cats", to: "/all-cats" },
  { label: "Contact", to: "/contact" },
];

/* ── Shared nav list (desktop + mobile) ── */
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
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-teal-600 font-extrabold text-xl"
        >
          <FaPaw size={20} />
          <span>
            Pet<span className="text-gray-800">Stay</span>
          </span>
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden md:block">
          <NavList onClose={undefined} />
        </div>

        {/* Desktop CTA buttons */}
        <div className="hidden md:flex items-center gap-3">
          <NavLink to="/login">
            <Button
              variant="text"
              size="sm"
              className="text-gray-600 hover:text-teal-600 normal-case font-semibold"
            >
              Login
            </Button>
          </NavLink>
          <NavLink to="/register">
            <Button
              size="sm"
              className="bg-teal-500 hover:bg-teal-600 shadow-none hover:shadow-none normal-case font-semibold rounded-full px-5"
            >
              Register
            </Button>
          </NavLink>
        </div>

        {/* Mobile hamburger */}
        <IconButton
          variant="text"
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes size={20} /> : <FaBars size={20} />}
        </IconButton>
      </div>

      {/* Mobile collapse menu */}
      <Collapse open={open}>
        <div className="max-w-6xl mx-auto pt-4 pb-2 flex flex-col gap-4 border-t border-gray-100 mt-3">
          <NavList onClose={() => setOpen(false)} />
          <div className="flex gap-3 pt-2 border-t border-gray-100">
            <NavLink to="/login" onClick={() => setOpen(false)}>
              <Button
                variant="text"
                size="sm"
                className="text-gray-600 normal-case font-semibold"
              >
                Login
              </Button>
            </NavLink>
            <NavLink to="/register" onClick={() => setOpen(false)}>
              <Button
                size="sm"
                className="bg-teal-500 shadow-none hover:shadow-none normal-case font-semibold rounded-full px-5"
              >
                Register
              </Button>
            </NavLink>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default Header;
