import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Card,
  CardBody,
  Typography,
  Chip,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import { FaCat } from "react-icons/fa";




const AdoptionRequest = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [requests, setRequests] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await fetch(
          "https://6a4e61a9e785c9ef536cbf8e.mockapi.io/adoptionRequests"
        );

        const data = await res.json();
        setRequests(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRequests();
  }, []);

  const visible = requests;
  const filtered = requests.filter(({ applicant, cat, status }) =>
    applicant.toLowerCase().includes(query.toLowerCase()) ||
    cat.toLowerCase().includes(query.toLowerCase()) ||
    status.toLowerCase().includes(query.toLowerCase())
  );

  console.log(filtered);
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

          <button
            onClick={() =>
              document
                .getElementById("requests-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center justify-center rounded-full
             bg-teal-700 px-5 py-3 text-sm font-semibold text-white shadow-lg
             shadow-teal-900/20 transition-colors hover:bg-teal-800 sm:text-base"
          >
            Requests ({filtered.length})
          </button>
        </h1>

        <Card
          id="requests-section"
          className="overflow-hidden border border-blue-gray-100 bg-gradient-to-br shadow-none dark:from-teal-700 dark:to-teal-900 dark:border-blue-gray-700">
          <CardBody className="p-0">
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full table-auto text-left">
                <thead>
                  <tr>
                    {["Applicant & Cat", "Status", "Applied Date", "Actions"].map(
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
                    ({ id, applicant, cat, catImg, status, appliedDate }, i) => (
                      <tr
                        key={`${applicant}-${i}`}
                        className={`transition-colors hover:bg-blue-gray-50/40 dark:bg-blue-gray-900/90 ${i < filtered.length - 1
                          ? "border-b border-blue-gray-50 dark:border-blue-gray-700"
                          : ""
                          }`}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <Avatar
                              src={catImg}
                              alt={cat}
                              size="sm"
                              className="border border-blue-gray-100 dark:border-blue-gray-600"
                            />
                            <div>
                              <Typography className="text-sm font-semibold text-blue-gray-700 dark:text-blue-gray-100">
                                {applicant}
                              </Typography>
                              <Typography className="text-xs text-blue-gray-400 dark:text-blue-gray-50">
                                {cat}
                              </Typography>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 py-4">
                          <Chip
                            variant="ghost"
                            size="sm"
                            value={status}
                            className={`w-max rounded-full px-3 py-1 text-xs font-medium ${status === "Approved"
                              ? "bg-blue-gray-50 text-teal-700 dark:bg-[#225a55]/80 dark:text-white"
                              : status === "Pending"
                                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-white"
                                : "bg-red-100 text-red-700 dark:bg-red-700 dark:text-white"
                              }`}
                          />
                        </td>

                        <td className="px-6 py-4">
                          <Typography className="text-sm text-blue-gray-600 dark:text-blue-gray-100">
                            {appliedDate}
                          </Typography>
                        </td>

                        <td className="px-6 py-4">
                          <button
                            onClick={() => navigate(`/admin/adoption-requests/${id}`)}
                            className="rounded-full bg-teal-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-800"
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col gap-4 p-4 md:hidden">
              {filtered.map(
                ({ id, applicant, cat, catImg, status, appliedDate }, i) => (
                  <div
                    key={`${applicant}-${i}`}
                    className="rounded-2xl border border-blue-gray-100 bg-white p-4 shadow-sm dark:border-blue-gray-700 dark:bg-blue-gray-900"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <Avatar
                          src={catImg}
                          alt={cat}
                          size="md"
                          className="border border-blue-gray-100 dark:border-blue-gray-600"
                        />

                        <div>
                          <Typography className="text-sm font-bold text-blue-gray-800 dark:text-white">
                            {applicant}
                          </Typography>

                          <Typography className="text-xs text-blue-gray-400">
                            {cat}
                          </Typography>
                        </div>
                      </div>

                      <FaCat className="text-lg text-teal-600 dark:text-teal-400" />
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <Chip
                        variant="ghost"
                        size="sm"
                        value={status}
                        className={`rounded-full px-3 py-1 text-xs font-medium ${status === "Approved"
                          ? "bg-blue-gray-50 text-teal-700 dark:bg-[#225a55]/80 dark:text-white"
                          : status === "Pending"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-white"
                            : "bg-red-100 text-red-700 dark:bg-red-700 dark:text-white"
                          }`}
                      />

                      <Typography className="text-xs text-blue-gray-500 dark:text-blue-gray-300">
                        {appliedDate}
                      </Typography>
                    </div>

                    <button
                      onClick={() => navigate(`/admin/adoption-requests/${id}`)}
                      className="rounded-full bg-teal-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-800"
                    >
                      View
                    </button>
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