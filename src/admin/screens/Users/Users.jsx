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

const ROWS = [
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
    bg: "bg-orange-50",  iconBg: "bg-orange-100",  iconColor: "text-orange-500" },
  { Icon: ShieldCheckIcon,
    title: "Safety Protocols", 
    desc: "All users must complete identity verification before adoption.",
    bg: "bg-teal-50", iconBg:"bg-teal-100", iconColor: "text-teal-600" },
  { Icon: ClipboardDocumentListIcon, 
    title: "Audit Logs",
    desc: "Account changes are recorded in the global editorial log.",
    bg: "bg-blue-gray-50", iconBg: "bg-blue-gray-100", iconColor: "text-blue-gray-500" },
];

const Users = () => {
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
      <div className="min-h-screen bg-[#f7f9f9] flex gap-6">
      <div className="w-full px-4 sm:px-6 lg:px-2 py-6 flex flex-col gap-5">

        <div className="w-full max-w-xl relative">
          <button onClick={() => setQuery(search)}>
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer" />
          </button>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            onKeyDown={e => e.key === "Enter" && setQuery(search)}
            className="w-full rounded-full bg-gray-200/70 pl-11 pr-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <Typography variant="h1" className="font-extrabold  text-blue-gray-900 tracking-tight">Platform Users</Typography>
            <Typography className="text-sm text-blue-gray-400 mt-1 max-w-xs leading-relaxed">Manage user roles, monitor account statuses, and oversee the Kindred Tails community membership.</Typography>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 border border-blue-gray-200 rounded-full px-4 py-2 text-sm font-medium text-blue-gray-600 bg-white hover:bg-blue-gray-50 transition">
              <FunnelIcon className="h-4 w-4" /> Filters
            </button>
            <button onClick={() => setInvite(true)} className="inline-flex items-center justify-center gap-2 primary-bg hover:bg-teal-800 text-white font-semibold text-md rounded-full px-5 py-3 transition-colors">
              + Invite New User
            </button>
          </div>
        </div>

        {invite ? (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="w-96 bg-white p-6 rounded-2xl shadow-xl flex flex-col gap-4">
              <Typography variant="h6" className="font-bold text-blue-gray-800">Invite New User</Typography>
              <Typography className="text-xs text-blue-gray-400 -mt-2">Send an invitation link to join the platform.</Typography>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="w-full border border-blue-gray-200 rounded-2xl px-4 py-3 text-sm text-blue-gray-700 placeholder-blue-gray-300 outline-none focus:ring-2 focus:ring-teal-500 transition"
              />
              {message ? <p className={`text-xs ${message.includes("success") ? "text-teal-600" : "text-red-400"}`}>{message}</p> : null}
              <div className="flex gap-3">
                <button onClick={() => { setInvite(false); setEmail(""); setMessage(""); }} className="flex-1 border border-blue-gray-200 rounded-xl py-2.5 text-sm font-medium text-blue-gray-600 hover:bg-blue-gray-50 transition">
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
          <Card className="bg-[#C6E8C3] shadow-none border-0 relative overflow-hidden">
            <CardBody className="p-2">
              <UserGroupIcon className="h-6 w-6 text-[#2D6B50] mb-3" />
              <Typography className="text-sm font-semibold text-[#2D6B50]">Active Adopters</Typography>
              <Typography className="text-4xl font-extrabold text-[#1A3D2A] leading-none mt-1">{activeCount}</Typography>
              <Typography className="text-[10px] font-bold text-[#3A7D5C] uppercase tracking-wider mt-2">+12% this month</Typography>
              <div className="absolute -right-2 -bottom-4 opacity-15">
                <svg viewBox="0 0 80 70" className="h-20"><circle cx="38" cy="22" r="15" fill="#1A3D2A"/><ellipse cx="38" cy="58" rx="25" ry="18" fill="#1A3D2A"/><circle cx="63" cy="27" r="10" fill="#1A3D2A"/><ellipse cx="63" cy="56" rx="16" ry="13" fill="#1A3D2A"/></svg>
              </div>
            </CardBody>
          </Card>

          <Card className="shadow-none border border-blue-gray-50">
            <CardBody className="p-5">
              <div className="flex justify-between items-start">
                <div>
                  <Typography className="text-sm font-bold text-blue-gray-800">Growth Overview</Typography>
                  <Typography className="text-xs text-blue-gray-400 mt-0.5">New registrations across all sectors</Typography>
                </div>
                <div className="flex gap-1 mt-1">
                  <span className="h-[3px] w-5 rounded bg-[#2A8C69] inline-block" />
                  <span className="h-[3px] w-5 rounded bg-blue-gray-200 inline-block" />
                </div>
              </div>
              <div className="flex items-end gap-[5px] h-16 mt-4">
                {BARS.map((h, i) => (
                  <div key={i} className={`flex-1 rounded-sm ${i >= 4 ? "bg-[#2A8C69]" : "bg-blue-gray-100"}`} style={{ height: `${h}%` }} />
                ))}
              </div>
            </CardBody>
          </Card>
        </div>

        <Card className="shadow-none border border-blue-gray-50 overflow-hidden">
          <CardBody className="p-0 overflow-x-auto">
            <table className="w-full min-w-[560px] table-auto text-left">
              <thead>
                <tr className="border-b border-blue-gray-50">
                  {["User Profile", "Role", "Status", "Registered", ""].map(h => (
                    <th key={h} className="px-6 py-3 bg-blue-gray-50/40">
                      <Typography className="text-[10px] font-bold uppercase tracking-widest text-blue-gray-400">{h}</Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-10 text-center text-blue-gray-400 text-sm">User not found</td>
                  </tr>
                ) : (
                  visible.map(({ img, name, email, role, owner, active, date }, i) => (
                    <tr key={`${name}-${i}`} className={`hover:bg-blue-gray-50/40 transition-colors ${i < visible.length - 1 ? "border-b border-blue-gray-50" : ""}`}>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Avatar src={img} alt={name} size="sm" className="border border-blue-gray-100" />
                          <div>
                            <Typography className="text-sm font-semibold text-blue-gray-800">{name}</Typography>
                            <Typography className="text-xs text-blue-gray-400">{email}</Typography>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <Chip variant="ghost" size="sm" value={role} color={owner ? "teal" : "blue-gray"} className="w-max text-xs" />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className={`h-2 w-2 rounded-full ${active ? "bg-teal-400" : "bg-blue-gray-300"}`} />
                          <Typography className={`text-sm ${active ? "text-blue-gray-700" : "text-blue-gray-400"}`}>{active ? "Active" : "Disabled"}</Typography>
                        </div>
                      </td>
                      <td className="px-6 py-4"><Typography className="text-sm text-blue-gray-600">{date}</Typography></td>
                      <td className="px-6 py-4">
                        <Tooltip content="Edit User">
                          <IconButton variant="text" size="sm"><PencilSquareIcon className="h-4 w-4 text-blue-gray-400" /></IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </CardBody>
          <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 px-6 py-3">
            <Typography className="text-[10px] font-bold uppercase tracking-widest text-blue-gray-400">
              Showing {visible.length} of {filtered.length} — Page {page} of {total}
            </Typography>
            <div className="flex gap-2">
              <IconButton variant="outlined" size="sm" className="rounded-full border-blue-gray-200 active:scale-95 transition-all" onClick={() => setPage(p => Math.max(p - 1, 1))} disabled={page === 1}>
                <ChevronLeftIcon className="h-4 w-4" />
              </IconButton>
              <IconButton size="sm" className="rounded-full bg-[#1C4D3A] shadow-none hover:bg-[#163829] active:scale-95 transition-all" onClick={() => setPage(p => Math.min(p + 1, total))} disabled={page === total}>
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
                <Typography className="text-xs text-blue-gray-500 mt-1 leading-relaxed">{desc}</Typography>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Users