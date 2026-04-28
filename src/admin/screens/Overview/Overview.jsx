import { FaUsers } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";

const Overview = () => {
  return (
    <div className="mx-5">
      <div className="my-5">
        <h1 className="text-5xl text-color-primary font-bold py-3 mt-5">
          Dashboard Overview
        </h1>
        <p className="text-lg text-gray-700">
          Monitoring the sanctuary's pulse. Status of residents and community
          partners
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col justify-between gap-10  bg-gradient-to-tr from-blue-gray-50 to-blue-gray-100 p-6 sm:p-8 rounded-3xl">
          <div className="">
            <p className="text-color-primary">Primary Catalog</p>
            <h2 className="mt-5 text-5xl font-extrabold text-color-primary">
              222
              <span className="text-black text-2xl font-semibold ml-5">
                Total Cats
              </span>
            </h2>
          </div>
          <div className="">
            <Link to="all-cats">
              <button className="bg-teal-700 hover:bg-teal-900 hover:-translate-y-1 duration-500 text-white px-3 py-2 text-md font-semibold rounded-lg">
                View Inventory <FaArrowRightLong className="inline" />
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-light-green-100 rounded-3xl p-6 sm:p-8 flex flex-col">
          <div className="flex">
            <div className="h-9 w-9 rounded-full bg-white/60 flex items-center justify-center text-teal-800">
              <HiOutlineDotsHorizontal />
            </div>
          </div>
          <div className="mt-6">
            <p className="font-display font-extrabold text-5xl text-teal-800">
              12
            </p>
            <p className="font-display font-bold text-lg text-ink mt-1">
              Pending Intake
            </p>
          </div>
          <p className="mt-auto pt-8 text-sm text-gray-700 leading-relaxed">
            New Cats awaiting health clearance before listing.
          </p>
          <Link to='pending-cats'><button className="px-4 py-2 rounded-lg text-white bg-teal-700 hover:bg-teal-900 duration-500 mt-5 font-semibold hover:-translate-y-1">view all pending cats</button></Link>
        </div>

        <div className="bg-white rounded-3xl shadow-soft p-6 sm:p-8 md:col-span-2">
          <div className="flex items-center justify-between">
            <p className="text-[11px] tracking-[0.2em] text-color-primary font-semibold">COMMUNITY REACH</p>
            <FaUsers className="text-teal-700 text-xl" />
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-end justify-between">
              <div>
                <p className="font-display font-extrabold text-3xl text-teal-800 leading-none">1,248</p>
                <p className="text-sm font-semibold text-gray-800 mt-1">Registered Users</p>
              </div>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="font-display font-bold text-3xl text-teal-800 leading-none">156</p>
                <p className="text-sm font-semibold text-gray-800 mt-1">Verified Owner</p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <Link to='users'><button className="px-4 py-2 rounded-lg text-white bg-teal-700 hover:bg-teal-900 duration-500 mt-5 font-semibold hover:-translate-y-1">view all users</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
