import React from 'react'
import { useState } from "react";
import { Card, CardBody, CardFooter, 
         Typography, Chip, Avatar, 
         IconButton, Tooltip } from "@material-tailwind/react";
import { MagnifyingGlassIcon, BellIcon, 
         FunnelIcon, UserPlusIcon, PencilSquareIcon, LockClosedIcon, 
         ShieldCheckIcon, ClipboardDocumentListIcon, ChevronLeftIcon,
         ChevronRightIcon, UserGroupIcon }
from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useTheme } from "../../../context/ThemeProvider";
import { GiHollowCat } from "react-icons/gi";
import { FaCat } from "react-icons/fa";const ROWS = [
  { img: "https://i.pravatar.cc/80?img=47", 
    name: "Sarah Jenkins", 
    email:"sarah.j@kindredtails.com", 
    role: "Owner",
    owner: true,  
    active: true,  
    date: "Oct 12, 2023" },
     { img: "https://i.pravatar.cc/80?img=47", 
    name: "Sarah Jenkins", 
    email:"sarah.j@kindredtails.com", 
    role: "Owner",
    owner: true,  
    active: true,  
    date: "Oct 12, 2023" },
  { img: "https://i.pravatar.cc/80?img=47", 
    name: "Sarah Jenkins", 
    email:"sarah.j@kindredtails.com", 
    role: "Owner",
    owner: true,  
    active: true,  
    date: "Oct 12, 2023" },
    { img: "https://i.pravatar.cc/80?img=47", 
    name: "Sarah Jenkins", 
    email:"sarah.j@kindredtails.com", 
    role: "Owner",
    owner: true,  
    active: true,  
    date: "Oct 12, 2023" },
    { img: "https://i.pravatar.cc/80?img=47", 
    name: "Sarah Jenkins", 
    email:"sarah.j@kindredtails.com", 
    role: "Owner",
    owner: true,  
    active: true,  
    date: "Oct 12, 2023" },
     { img: "https://i.pravatar.cc/80?img=47", 
    name: "Sarah Jenkins", 
    email:"sarah.j@kindredtails.com", 
    role: "Owner",
    owner: true,  
    active: true,  
    date: "Oct 12, 2023" },
  ];

const BARS = [28, 40, 32, 45, 60, 68, 80, 90];

const INFOS = [
  { Icon: LockClosedIcon,
    title: "Access Control",   
    desc: "Owners have full administrative rights including billing access.",
    bg: "bg-orange-50 dark:bg-orange-200/90",  iconBg: "bg-orange-100  dark:bg-orange-300",  iconColor: "text-orange-500 dark:text-orange-700" },
  { Icon: ShieldCheckIcon,
    title: "Safety Protocols", 
    desc: "All users must complete identity verification before adoption.",
    bg: "bg-teal-50 dark:bg-teal-200", iconBg:"bg-teal-100  dark:bg-teal-300", iconColor: "text-teal-600 dark:text-teal-700" },
  { Icon: ClipboardDocumentListIcon, 
    title: "Audit Logs",
    desc: "Account changes are recorded in the global editorial log.",
    bg: "bg-blue-gray-50 dark:bg-blue-gray-200", iconBg: "bg-blue-gray-100  dark:bg-blue-gray-300", iconColor: "text-blue-gray-500 dark:text-blue-gray-700" },
];

const Users = () => {
const { theme } = useTheme();
const dark = theme === "dark";
const [search, setSearch] = useState("");
const [query, setQuery] = useState("");
const [page, setPage] = useState(1);
const [invite, setInvite] = useState(false);
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [loading, setLoading] = useState(false);
const [editUser, setEditUser] = useState(null);
const perPage = 4;
const handleInvite = async () => {
  if (!email.trim()) {
    setMessage("Enter email first");
    return;
  }

  if (!email.includes("@")) {
    setMessage("Enter a valid email");
    return;
  }

  try {
    setLoading(true);
    setMessage("");

    const res = await fetch("http://localhost:5000/api/admin/invite-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
      email: email,
      role: "user",
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setMessage(data.message || "Failed to send invite");
      return;
    }

    setMessage("Invite sent successfully");
    setEmail("");
    setInvite(false);
  } catch (error) {
    setMessage("Something went wrong");
  } finally {
    setLoading(false);
  }
};
const activeCount = ROWS.filter(r => r.active === true).length;

const filtered = ROWS.filter(({ name, email, role }) =>
  name.toLowerCase().includes(query.toLowerCase()) ||
  email.toLowerCase().includes(query.toLowerCase()) ||
  role.toLowerCase().includes(query.toLowerCase())
);

const start = (page - 1) * perPage;
const visible = filtered.slice(start, start + perPage);
const total = Math.ceil(filtered.length / perPage);

  return (
      <div className="min-h-screen  bg-[#f7f9f9] dark:bg-gray-900 flex gap-6">
      <div className="w-full px-4 sm:px-6 lg:px-2 py-6 flex flex-col gap-5">

        <div className="w-full max-w-xl relative">
          <button onClick={() => setQuery(search)}>
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 dark:text-gray-200/70 absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer" />
          </button>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            onKeyDown={e => e.key === "Enter" && setQuery(search)}
            className="w-full rounded-full bg-gray-200/70 dark:bg-gray-800 dark:placeholder:text-gray-400 dark:text-gray-500 pl-11 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

       <div className="flex flex-wrap items-start justify-between gap-4">
  <div>
    <Typography variant="h1" className="font-extrabold text-blue-gray-900 dark:text-white tracking-tight">
      Platform Users
    </Typography>
    <Typography className="text-sm text-blue-gray-400 dark:text-gray-300 mt-1 max-w-xs leading-relaxed">
      Manage user roles, monitor account statuses, and oversee the Kindred Tails community membership.
    </Typography>
  </div>
  <div className="flex items-center gap-2">
    <button className="flex items-center gap-2 border border-blue-gray-200 dark:border-gray-600 rounded-full px-4 py-2 text-sm font-medium text-blue-gray-600 dark:text-blue-gray-100 bg-white dark:bg-gray-800 hover:bg-blue-gray-50 dark:hover:bg-gray-600 transition-colors duration-300">
      <FunnelIcon className="h-4 w-4" /> Filters
    </button>
    <button onClick={() => setInvite(true)} className="inline-flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-md rounded-full px-5 py-3 transition-colors duration-300">
      + Invite New User
    </button>
  </div>
</div>

        {invite ? (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="w-96 bg-white dark:bg-gray-900/70 backdrop-blur-lg p-6 rounded-2xl shadow-xl flex flex-col gap-4">
              <Typography variant="h6" className="font-bold text-blue-gray-800 dark:text-white">Invite New User</Typography>
              <Typography className="text-xs text-blue-gray-400 dark:text-white mt-2">Send an invitation link to join the platform.</Typography>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="w-full border border-blue-gray-200 dark:border-gray-600 dark:rounded-2xl px-4 py-3 text-sm text-blue-gray-700 placeholder-blue-gray-300 outline-none focus:ring-2 focus:ring-teal-500 transition"
              />
              {message ? <p className={`text-xs ${message.includes("success") ? "text-teal-600" : "text-red-400"}`}>{message}</p> : null}
              <div className="flex gap-3">
                <button onClick={() => { setInvite(false); setEmail(""); setMessage(""); }} className="flex-1 border border-blue-gray-200 dark:border-gray-600 dark:rounded-xl py-2.5 text-sm font-medium bg-blue-gray-100 text-blue-gray-600 dark:text-blue-gray hover:bg-blue-gray-50 transition">
                  Cancel
                </button>
                <button onClick={handleInvite} className="flex-1 bg-[#1C4D3A] hover:bg-[#163829] text-white rounded-xl py-2.5 text-sm font-semibold transition">
                  {loading ? "Sending..." : "Send Invite"}
                </button>
              </div>
            </div>
          </div>
        ) : null}

        <div className="grid grid-cols-1 sm:grid-cols-[195px_1fr] gap-4">
         <Card className="bg-gradient-to-br from-[#C6E8C3] to-[#a8d8a8] dark:from-[#1C4D3A] dark:to-[#0f2d20] shadow-none border-0 relative overflow-hidden">
  <CardBody className="p-2">
    <UserGroupIcon className="h-6 w-6 text-[#2D6B50] dark:text-teal-400 mb-3" />
    <Typography className="text-sm font-semibold text-[#2D6B50] dark:text-teal-300">Active Adopters</Typography>
    <Typography className="text-4xl font-extrabold  text-[#1A3D2A] dark:text-white leading-none mt-1">{activeCount}</Typography>
    <Typography className="text-[10px] font-bold text-[#3A7D5C] dark:text-teal-400 uppercase tracking-wider mt-2">+12% this month</Typography>
    <div className="absolute -right-2 -bottom-4 opacity-10 dark:opacity-100">
      <svg viewBox="0 0 80 70" className="h-20">
        <circle cx="38" cy="22" r="15" fill="#1A3D2A"/>
        <ellipse cx="38" cy="58" rx="25" ry="18" fill="#1A3D2A"/>
        <circle cx="63" cy="27" r="10" fill="#1A3D2A"/>
        <ellipse cx="63" cy="56" rx="16" ry="13" fill="#1A3D2A"/>
      </svg>
    </div>
  </CardBody>
</Card>
          <Card className="shadow-none border bg-gradient-to-tr border-blue-gray-50 dark:from-teal-700 dark:to-teal-900 dark:border-blue-gray-700 overflow-hidden">
            <CardBody className="p-5">
              <div className="flex justify-between items-start">
                <div>
                  <Typography className="text-sm font-bold text-blue-gray-800 dark:text-white">Growth Overview</Typography>
                  <Typography className="text-xs text-blue-gray-400 dark:text-blue-gray-50 mt-0.5">New registrations across all sectors</Typography>
                </div>
                <div className="flex gap-1 mt-1">
                  <span className="h-[3px] w-5 rounded bg-[#2A8C69]  inline-block" />
                  <span className="h-[3px] w-5 rounded bg-blue-gray-200 dark:bg-blue-gray-900 inline-block" />
                </div>
              </div>
              <div className="flex items-end gap-[5px] h-16 mt-4">
                {BARS.map((h, i) => (
                  <div key={i} className={`flex-1 rounded-sm ${i >= 4 ? "bg-[#2A8C69] dark:bg-teal-400" : "bg-blue-gray-100 dark:bg-blue-gray-900 "}`} style={{ height: `${h}%` }} />
                ))}
              </div>
            </CardBody>
          </Card>
        </div>

        <Card className="shadow-none border bg-gradient-to-br  dark:from-teal-700 dark:to-teal-900 dark:border-blue-gray-700 border-blue-gray-100 overflow-hidden">
          <CardBody className="p-0 overflow-x-auto">
            <table className="w-full min-w-[560px] table-auto text-left">
              <thead>
                <tr className="dark:gray-700">
                  {["User Profile", "Role", "Status", "Registered", ""].map(h => (
                    <th key={h} className="px-6 py-3 bg-blue-gray-500/40 dark:bg-gray-900/40">
                      <Typography className="text-[10px] font-bold uppercase tracking-widest text-blue-gray-600 dark:text-blue-gray-50">{h}</Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-10 text-center text-blue-gray-400  dark:text-blue-gray-50 text-sm">User not found</td>
                  </tr>
                ) : (
                  visible.map(({ img, name, email, role, owner, active, date }, i) => (
                    <tr key={`${name}-${i}`} className={`hover:bg-blue-gray-50/40  dark:bg-blue-gray-900/90 transition-colors ${i < visible.length - 1 ? "border-b border-blue-gray-50 dark:border-blue-gray-700" : ""}`}>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Avatar src={img} alt={name} size="sm" className="border border-blue-gray-100 dark:border-blue-gray-600" />
                          <div>
                            <Typography className="text-sm font-semibold dark:text-blue-gray-100 text-blue-gray-700">{name}</Typography>
                            <Typography className="text-xs text-blue-gray-400 dark:text-blue-gray-50">{email}</Typography>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                   <Chip
                     variant="ghost"
                     size="sm"
                     value={role}
                     className={`w-max text-xs font-medium px-3 py-1 rounded-full
                       ${
                        owner
                        ? " text-teal-300 bg-blue-gray-50 dark:bg-[#225a55]/80 dark:text-white"
                        : "bg-[#2b2b2b] text-gray-100 dark:bg-[#2b2b2b] dark:text-gray-400"
                       }`
                      }
                     />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className={`h-2 w-2 rounded-full ${active ? "bg-teal-400 " : "bg-blue-gray-300"}`} />
                          <Typography className={`text-sm ${active ? "text-blue-gray-700 dark:text-blue-gray-100" : "text-blue-gray-400"}`}>{active ? "Active" : "Disabled"}</Typography>
                        </div>
                      </td>
                      <td className="px-6 py-4"><Typography className="text-sm text-blue-gray-600 dark:text-blue-gray-100">{date}</Typography></td>
                      <td className="px-6 py-4">
                    <Tooltip content="Edit User">
  <span className="inline-flex cursor-pointer">
    <FaCat className="dark:text-teal-400 text-teal-700 text-base" />
  </span>
</Tooltip>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </CardBody>
          <CardFooter className="flex items-center justify-between border-t    dark:bg-gray-900/40  border-blue-gray-50 dark:border-blue-gray-700 px-6 py-3">
            <Typography className="text-[10px] font-bold uppercase tracking-widest dark:text-white text-blue-gray-400">
              Showing {visible.length} of {filtered.length} — Page {page} of {total}
            </Typography>
            <div className="flex gap-2">
              <IconButton variant="outlined" size="sm" className="rounded-full dark:border-blue-gray-700 dark:bg-teal-300/30 border-blue-gray-200 active:scale-95 transition-all" onClick={() => setPage(p => Math.max(p - 1, 1))} disabled={page === 1}>
                <ChevronLeftIcon className="h-4 w-4 dark:text-white" />
              </IconButton>
              <IconButton size="sm" className="rounded-full  bg-[#1C4D3A] dark:bg-teal-600/60 shadow-none hover:bg-[#163829] active:scale-95 transition-all" onClick={() => setPage(p => Math.min(p + 1, total))} disabled={page === total}>
                <ChevronRightIcon className="h-4 w-4 text-white" />
              </IconButton>
            </div>
          </CardFooter>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {INFOS.map(({ Icon, title, desc, bg, iconBg, iconColor }) => (
            <div key={title} className={`${bg} rounded-2xl p-4 flex items-start gap-3`}>
              <div className={`${iconBg} ${iconColor} rounded-xl p-2 shrink-0 mt-0.5`}><Icon className="h-4 w-4" /></div>
              <div>
                <Typography className="text-sm font-bold text-blue-gray-800">{title}</Typography>
                <Typography className="text-xs dark:text-blue-gray-900 text-blue-gray-500 mt-1 leading-relaxed">{desc}</Typography>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Users