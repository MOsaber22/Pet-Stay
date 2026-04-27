import { NavLink } from "react-router-dom";
import {
  HiOutlineViewGrid,
  HiOutlineClipboardList,
  HiOutlineCog,
} from "react-icons/hi";
import { FaPaw, FaRegCommentDots, FaUserFriends } from "react-icons/fa";

const links = [
  { to: "/admin", label: "Overview", icon: HiOutlineViewGrid, end: true },
  { to: "/admin/pending-cats", label: "Pending Cats", icon: HiOutlineClipboardList },
  { to: "/admin/all-cats", label: "All Cats", icon: FaPaw },
];

export default function AdminSidebar({ onNavigate }) {
  return (
    <div className="h-[calc(100vh-2rem)] bg-white rounded-3xl shadow-soft p-6 flex flex-col">
      {/* Brand */}
      <div className="mb-8">
        <h1 className="font-display font-extrabold text-2xl text-primary leading-none">
          Nurture Admin
        </h1>
        <p className="text-[10px] tracking-[0.2em] text-gray-700 mt-2 font-semibold">
          EDITORIAL DASHBOARD
        </p>
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-1">
        {links.map(({ to, label, icon: Icon, end }) => ( // eslint-disable-line no-unused-vars
          <NavLink
            key={to}
            to={to}
            end={end}
            onClick={onNavigate}
            className={({ isActive }) =>
              [
                "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-lg transition-colors duration-300 relative",
                isActive
                  ? "bg-primary-light text-primary font-semibold"
                  : "text-ink/70 hover:bg-primary-light/60 hover:text-primary",
              ].join(" ")
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <span className="absolute -right-6 top-1 bottom-1 w-1.5 rounded-full bg-primary" />
                )}
                <Icon className="text-lg" />
                <span>{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Settings */}
      <div className="pt-4 border-t border-black/5">
        <NavLink
          to="/admin/settings"
          onClick={onNavigate}
          className={({ isActive }) =>
            [
              "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors duration-300",
              isActive
                ? "bg-teal-light text-teal font-semibold"
                : "text-ink/70 hover:bg-teal-light/60 hover:text-teal",
            ].join(" ")
          }
        >
        </NavLink>
      </div>
    </div>
  );
}