import { HiOutlineMenu } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function AdminNavbar({ onMenu, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-30 bg-bg/80 dark:bg-gray-900/80 backdrop-blur px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex items-center justify-between">
        
        {/* menu */}
        <button
          onClick={onMenu}
          className="lg:hidden p-2 rounded-xl text-color-primary hover:bg-primary-light transition"
        >
          <HiOutlineMenu className="text-2xl" />
        </button>

        <div className="flex items-center gap-3">
          
          {/* theme button */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-xl text-color-primary dark:text-white hover:bg-primary-light dark:hover:bg-gray-800 transition"
          >
            <MdDarkMode className="text-2xl dark:hidden" />
            <MdLightMode className="text-2xl hidden  dark:block" />
          </button>

          {/* profile */}
          <button className="p-2 rounded-xl text-color-primary dark:text-white hover:bg-teal-primary transition">
            <FaRegUserCircle className="text-2xl" />
          </button>

        </div>
      </div>
    </header>
  );
}