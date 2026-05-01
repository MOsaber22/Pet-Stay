import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { HiOutlineEye } from "react-icons/hi";
import { Link } from "react-router-dom";

const PendingCats = () => {
  const [error, setError] = useState("");
  const [pendingCats, setPendingCats] = useState([]);
  const getPendingCats = async () => {
    try {
      const url = import.meta.env.VITE_CATS;
      const req = await fetch(`${url}/cats`);
      const res = await req.json();
      const pendingCats = res.filter((cat) => cat.status === "pending");
      setPendingCats(pendingCats);
    } catch (e) {
      setError(`Failed to load pending cats. Please try again. ${e.message}`);
    }
  };
  
  const reject = async (index) => {
    try{
      const url = import.meta.env.VITE_CATS;
      const cat = pendingCats[index];
      await fetch(`${url}/cats/${cat.id}`,{
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({...cat,status: "rejected"})
      });
      const newPendingCats = [...pendingCats];
      newPendingCats.splice(index,1);
      setPendingCats(newPendingCats);
    }
    catch(e){
      setError(`Failed to reject cat. Please try again. ${e.message}`);
    }
  }
  const approve = async (index) => {
    try{
      const url = import.meta.env.VITE_CATS;
      const cat = pendingCats[index];
      await fetch(`${url}/cats/${cat.id}`,{
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({...cat,status: "available"})
      });
      const newPendingCats = [...pendingCats];
      newPendingCats.splice(index,1);
      setPendingCats(newPendingCats);
    }
    catch(e){
      setError(`Failed to approve cat. Please try again. ${e.message}`);
    }
  }

  useEffect(() => {
    getPendingCats();
  },[]);
  
  return (
    <div>
      {error ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="p-8 bg-red-50 border-2 border-red-400 text-red-700 rounded-lg max-w-md text-center">
            <h2 className="text-2xl font-bold mb-3">Error</h2>
            <p className="text-lg">{error}</p>
          </div>
        </div>
      ) : (
        <>
        <div className="flex flex-col justify-center gap-5 p-5 mb-5">
        <p className="text-color-primary uppercase text-xs font-semibold">
          Curation Pipeline
        </p>
        <h1 className=" text-5xl md:text-5xl lg:text[3.5rem] leading-tight tracking-tight font-bold">
          Pending <span className="text-color-primary">New Arrivals</span>
        </h1>
        <p className="text-lg text-gray-700">
          Review new arrivals before they are listed in the catalog.
        </p>
        </div>
      <div className="flex flex-col items-center justify-center">
        {pendingCats.map((cat,index) => {
          return (
            <div
              className="group flex flex-col md:flex-row md:justify-between justify-center items-start md:items-center my-3 gap-5 md:gap-3 lg:gap-10 w-full bg-gray-100 hover:bg-gray-300 transition-all duration-500 rounded-md py-3 px-3"
              key={cat.id}
            >
              <div className="flex items-center gap-5">
                <img
                  src={cat.image}
                  alt="cat image"
                  className="w-[70px] h-[70px] rounded-xl block group-hover:scale-110 transition-transform duration-700"
                />
                <div className="flex flex-col gap-1">
                  <h2 className="text-lg font-bold text-color-primary">
                    {cat.name}
                  </h2>
                  <h2 className="text-sm text-gray-700">{cat.breed}</h2>
                </div>
              </div>
              <div className="flex md:flex-col justify-center items-center gap-4">
                <p className="text-sm text-gray-700">Owner</p>
                <h3 className=" text-lg font-semibold text-color-primary">
                  {cat.owner}
                </h3>
              </div>
              <div className="flex md:flex-col justify-center items-center gap-4">
                <p className="text-sm text-gray-700">Status</p>
                <h3 className="text-md text-white font-semibold bg-deep-orange-200 rounded-xl px-2">
                  {cat.status}
                </h3>
              </div>
              <div className="flex md:flex-col gap-3 text-center">
                <p className="text-gray-700 text-md">Action</p>
                <div className="flex items-center justify-evenly gap-1 md:gap-3">
                  <Link to={`/admin/cat-details/${cat.id}`}>
                    <button  className="h-9 w-9 rounded-full bg-gray-800 hover:bg-gray-600 text-gray-100 hover:text-black flex items-center justify-center transition-colors duration-500">
                      <HiOutlineEye/>
                    </button>
                  </Link> 
                  <Button onClick={() => reject(index)} className="px-4 py-2" color="red">
                    Reject
                  </Button>
                  <Button onClick={() => approve(index)} className="px-4 py-2" color="green">
                    Approve
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
        </>
      )}
    </div>
  );
};

export default PendingCats;
