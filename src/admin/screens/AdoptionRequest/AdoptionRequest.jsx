import React from "react";
import {
  BellIcon,
  UserCircleIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
const AdoptionRequest = () => {
  return (
    <div className="w-full bg-[#f6f8f7] px-4 sm:px-6 lg:px-8 py-2 flex-1">
      <div className="flex items-center justify-between mb-6">
        <div className="w-full max-w-xl relative">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-full bg-gray-200/70 pl-11 pr-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <h1 className="text-5xl font-extrabold text-gray-900">
            Adoption Inquiries
          </h1>
          <p className="text-gray-500 mt-1 text-base">
            Managing the journey from curiosity to companionship.
          </p>
        </div>

        <button
          className="inline-flex items-center justify-center gap-2 
       primary-bg hover:bg-teal-800 text-white font-semibold
        text-md rounded-full px-5 py-3 transition-colors shadow-lg shadow-teal/20"
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="text-base"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>{" "}
          Export List{" "}
        </button>
      </div>
    </div>
  );
};

export default AdoptionRequest;
