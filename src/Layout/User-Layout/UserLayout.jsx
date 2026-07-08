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
import NotFound from "../../pages/Not-Found/NotFound";
import Privacy from './../../pages/Privacy-Policy/Privcy';
import Terms from './../../pages/Terms-of-Service/Terms';

const UserLayout = () => {
  return (
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
        <Route path="all-cats" element={<AllCats />} />
        <Route path="catDetails/:id" element={<CatDetails />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default UserLayout;
