import { HiOutlineMenu } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";

export default function AdminNavbar({ onMenu }) {
  return (
    <header className="sticky top-0 z-30 bg-bg/80 backdrop-blur supports-[backdrop-filter]:bg-bg/70 px-4 sm:px-6 lg:px-8 py-4 ">
      <div className="flex items-center justify-between">
        <div>
          <button
            onClick={onMenu}
            aria-label="Open menu"
            className="lg:hidden p-2 rounded-xl text-primary hover:bg-primary-light transition-colors duration-300"
          >
            <HiOutlineMenu className="text-2xl" />
          </button>
        </div>

        <div>
          <button
            aria-label="Profile"
            className="p-2 rounded-xl text-primary hover:bg-teal-primary transition-colors duration-300"
          >
            <FaRegUserCircle className="text-2xl" />
          </button>
        </div>
      </div>
    </header>
  );
}
