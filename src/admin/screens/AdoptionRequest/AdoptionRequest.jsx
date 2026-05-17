import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import {
  Card,
  CardBody,
  Typography,
  Chip,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import { FaCat } from "react-icons/fa";

const ROWS = [
  {
    img: "https://i.pravatar.cc/80?img=47",
    name: "Sarah Jenkins",
    email: "sarah.j@kindredtails.com",
    role: "Owner",
    owner: true,
    active: true,
    date: "Oct 12, 2023",
  },
  {
    img: "https://i.pravatar.cc/80?img=48",
    name: "Elena Rodriguez",
    email: "elena.r@kindredtails.com",
    role: "Reviewer",
    owner: false,
    active: true,
    date: "Oct 14, 2023",
  },
  {
    img: "https://i.pravatar.cc/80?img=49",
    name: "Julian Thorne",
    email: "julian.t@kindredtails.com",
    role: "Owner",
    owner: true,
    active: false,
    date: "Oct 18, 2023",
  },
  {
    img: "https://i.pravatar.cc/80?img=50",
    name: "David Chen",
    email: "david.c@kindredtails.com",
    role: "Reviewer",
    owner: false,
    active: true,
    date: "Oct 21, 2023",
  },
];

const BARS = [28, 40, 32, 45, 60, 68, 80, 90];

const AdoptionRequest = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const visible = ROWS;
  const filtered = ROWS.filter(({ name, email, role }) =>
  name.toLowerCase().includes(query.toLowerCase()) ||
  email.toLowerCase().includes(query.toLowerCase()) ||
  role.toLowerCase().includes(query.toLowerCase())
);


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
   

      <h1 className="text-3xl font-extrabold dark:text-white text-gray-900 sm:text-4xl p-4 lg:text-5xl">
        <div className="">
          <h1 className="text-3xl font-extrabold dark:text-white text-gray-900 sm:text-4xl p-4 lg:text-5xl">
            Adoption Inquiries
          </h1>
        </div>

        <button className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-900/20 transition-colors hover:bg-teal-800 sm:text-base">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="text-base"
            height="1em"
            width="1em"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Export List
        </button>
      </h1>

  

        <Card className="overflow-hidden border border-blue-gray-100 bg-gradient-to-br shadow-none dark:from-teal-700 dark:to-teal-900 dark:border-blue-gray-700">
          <CardBody className="p-0">
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full table-auto text-left">
                <thead>
                  <tr>
                    {["User Profile", "Role", "Status", "Registered", ""].map(
                      (h) => (
                        <th
                          key={h}
                          className="bg-blue-gray-500/40 px-6 py-3 dark:bg-gray-900/40"
                        >
                          <Typography className="text-[10px] font-bold uppercase tracking-widest text-blue-gray-600 dark:text-blue-gray-50">
                            {h}
                          </Typography>
                        </th>
                      )
                    )}
                  </tr>
                </thead>

                <tbody>
                  {filtered.map(
                    ({ img, name, email, role, owner, active, date }, i) => (
                      <tr
                        key={`${name}-${i}`}
                        className={`transition-colors hover:bg-blue-gray-50/40 dark:bg-blue-gray-900/90 ${
                          i < visible.length - 1
                            ? "border-b border-blue-gray-50 dark:border-blue-gray-700"
                            : ""
                        }`}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <Avatar
                              src={img}
                              alt={name}
                              size="sm"
                              className="border border-blue-gray-100 dark:border-blue-gray-600"
                            />
                            <div>
                              <Typography className="text-sm font-semibold text-blue-gray-700 dark:text-blue-gray-100">
                                {name}
                              </Typography>
                              <Typography className="text-xs text-blue-gray-400 dark:text-blue-gray-50">
                                {email}
                              </Typography>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 py-4">
                          <Chip
                            variant="ghost"
                            size="sm"
                            value={role}
                            className={`w-max rounded-full px-3 py-1 text-xs font-medium ${
                              owner
                                ? "bg-blue-gray-50 text-teal-700 dark:bg-[#225a55]/80 dark:text-white"
                                : "bg-[#2b2b2b] text-gray-100 dark:text-gray-400"
                            }`}
                          />
                        </td>

                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <span
                              className={`h-2 w-2 rounded-full ${
                                active ? "bg-teal-400" : "bg-blue-gray-300"
                              }`}
                            />
                            <Typography
                              className={`text-sm ${
                                active
                                  ? "text-blue-gray-700 dark:text-blue-gray-100"
                                  : "text-blue-gray-400"
                              }`}
                            >
                              {active ? "Active" : "Disabled"}
                            </Typography>
                          </div>
                        </td>

                        <td className="px-6 py-4">
                          <Typography className="text-sm text-blue-gray-600 dark:text-blue-gray-100">
                            {date}
                          </Typography>
                        </td>

                        <td className="px-6 py-4">
                          <Tooltip content="Edit User">
                            <span className="inline-flex cursor-pointer">
                              <FaCat className="text-base text-teal-700 dark:text-teal-400" />
                            </span>
                          </Tooltip>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col gap-4 p-4 md:hidden">
              {visible.map(
                ({ img, name, email, role, owner, active, date }, i) => (
                  <div
                    key={`${name}-${i}`}
                    className="rounded-2xl border border-blue-gray-100 bg-white p-4 shadow-sm dark:border-blue-gray-700 dark:bg-blue-gray-900"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-3">
                        <Avatar
                          src={img}
                          alt={name}
                          size="md"
                          className="border border-blue-gray-100 dark:border-blue-gray-600"
                        />

                        <div className="min-w-0">
                          <Typography className="truncate text-sm font-bold text-blue-gray-800 dark:text-white">
                            {name}
                          </Typography>
                          <Typography className="truncate text-xs text-blue-gray-400">
                            {email}
                          </Typography>
                        </div>
                      </div>

                      <FaCat className="shrink-0 text-lg text-teal-600 dark:text-teal-400" />
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <Chip
                        variant="ghost"
                        size="sm"
                        value={role}
                        className={`rounded-full text-xs font-medium ${
                          owner
                            ? "bg-blue-gray-50 text-teal-700 dark:bg-[#225a55]/80 dark:text-white"
                            : "bg-[#2b2b2b] text-gray-100 dark:text-gray-400"
                        }`}
                      />

                      <div className="flex items-center gap-2">
                        <span
                          className={`h-2 w-2 rounded-full ${
                            active ? "bg-teal-400" : "bg-blue-gray-300"
                          }`}
                        />
                        <Typography
                          className={`text-xs ${
                            active
                              ? "text-blue-gray-700 dark:text-blue-gray-100"
                              : "text-blue-gray-400"
                          }`}
                        >
                          {active ? "Active" : "Disabled"}
                        </Typography>
                      </div>
                    </div>

                    <Typography className="mt-4 text-xs text-blue-gray-500 dark:text-blue-gray-300">
                      Registered: {date}
                    </Typography>
                  </div>
                )
              )}
            </div>
          </CardBody>
        </Card>
      </div>
  </div>

  );
};

export default AdoptionRequest;