import { Route, Routes } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import UserProfile from "../../pages/UserProfile/UserProfile";
import AddNewCat from "../../pages/Cats/AddNewCat/AddNewCat";
import AdoptRequest from "../../pages/Cats/AdoptRequest/AdoptRequest";
import AllCats from "../../pages/Cats/AllCats/AllCats";
import CatDetails from "../../pages/Cats/CatDetails/CatDetails";
import ThemeChanger from "../../context/ThemeProvider";

const UserLayout = () => {
  return (
    <ThemeChanger>
      <div>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="user-profile" element={<UserProfile />} />
          <Route path="add-new-cat" element={<AddNewCat />} />
          <Route path="adopt-request" element={<AdoptRequest />} />
          <Route path="allcats" element={<AllCats />} />
          <Route path="catDetails" element={<CatDetails />} />
        </Routes>
        <Footer />
      </div>
    </ThemeChanger>
  );
};

export default UserLayout;
