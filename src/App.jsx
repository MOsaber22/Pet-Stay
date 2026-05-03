import { Route, Routes } from "react-router-dom";
import UserLayout from "./Layout/User-Layout/UserLayout";
import AdminLayout from "./Layout/Admin-Layout/AdminLayout";
import NotFound from "./pages/Not-Found/NotFound";
import ThemeChanger from "./context/ThemeProvider";

const App = () => {
  return (
    <>
      <ThemeChanger>
        <Routes>
          <Route path="/*" element={<UserLayout />} />
          <Route path="/admin/*" element={<AdminLayout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeChanger>
    </>
  );
};

export default App;
