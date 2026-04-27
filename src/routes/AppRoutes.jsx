import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UserProfile from "../pages/UserProfile/UserProfile";
import AdminDashboard from "../pages/Dashboard/AdminDashboard/AdminDashboard";
import UserDashboard from "../pages/Dashboard/UserDashboard/UserDashboard";
import AddNewCat from "../pages/Cats/AddNewCat/AddNewCat";
import AdoptRequest from "../pages/Cats/AdoptRequest/AdoptRequest";
import AllCats from "../pages/Cats/AllCats/AllCats";
import CatDetails from "../pages/Cats/CatDetails/CatDetails";
const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/add-new-cat" element={<AddNewCat />} />
        <Route path="/adopt-request" element={<AdoptRequest />} />
        <Route path="/all-cats" element={<AllCats />} />
        <Route path="/cat-details" element={<CatDetails />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
