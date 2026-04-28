import { Button } from "@material-tailwind/react";
import { useState } from "react";

const PendingCats = () => {
  const [cats] = useState([
    {
      catName: "memo",
      catAge: 1,
      owner: "ahmed",
      status: "pending",
      image: "",
      desc: "so beatifule cat",
    },
    {
      catName: "memo",
      catAge: 1,
      owner: "ahmed",
      status: "pending",
      image: "",
      desc: "so beatifule cat",
    },
    {
      catName: "memo",
      catAge: 1,
      owner: "ahmed",
      status: "pending",
      image: "",
      desc: "so beatifule cat",
    },
    {
      catName: "memo",
      catAge: 1,
      owner: "ahmed",
      status: "pending",
      image: "",
      desc: "so beatifule cat",
    },
    {
      catName: "memo",
      catAge: 1,
      owner: "ahmed",
      status: "pending",
      image: "",
      desc: "so beatifule cat",
    },
  ])
  return (
    <div>
      <div className="flex flex-col justify-center gap-5 p-5 mb-5">
        <p className="text-color-primary uppercase text-xs font-semibold">
          Curation Pipeline
        </p>
        <h1 className=" text-4xl md:text-5xl lg:text[3.5rem] leading-tight tracking-tight font-extrabold">
          Pending <span className="text-color-primary">New Arrivals</span>
        </h1>
        <p className="text-lg text-gray-700">
          Review new arrivals before they are listed in the catalog.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        {cats.map((cat, index) => {
          return (
            <div className="group flex flex-col md:flex-row md:justify-between justify-center items-start md:items-center my-3 gap-5 md:gap-3 lg:gap-10 w-full bg-gray-100 hover:bg-gray-300 transition-all duration-500 rounded-md py-3 px-3" key={index}>
              <div className="flex items-center gap-5">
                <img
                  src="/public/unnamed (4).png"
                  alt="cat image"
                  className="w-[70px] h-[70px] rounded-xl block group-hover:scale-110 transition-transform duration-700"
                />
                <div className="flex flex-col gap-1">
                  <h2 className="text-lg font-bold text-color-primary">{cat.catName}</h2>
                  <h2 className="text-sm text-gray-700">{cat.desc}</h2>
                </div>
              </div>
              <div className="flex md:flex-col justify-center items-center gap-4">
                <p className="text-sm text-gray-700">Owner</p>
                <h3 className=" text-lg font-semibold text-color-primary">{cat.owner}</h3>
              </div>
              <div className="flex md:flex-col justify-center items-center gap-4">
                <p className="text-sm text-gray-700">Status</p>
                <h3 className="text-md text-white font-semibold bg-deep-orange-200 rounded-xl px-2">{cat.status}</h3>
              </div>
              <div className="flex md:flex-col gap-3 text-center">
                <p className="text-gray-700 text-md">Action</p>
                <div className="flex items-center justify-evenly gap-3">
                  <Button color="red" >Reject</Button>
                  <Button color="green" >Approve</Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PendingCats;
