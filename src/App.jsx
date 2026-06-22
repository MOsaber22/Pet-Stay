import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
const UserLayout = lazy(() => import("./Layout/User-Layout/UserLayout")) ;
const AdminLayout = lazy(() => import("./Layout/Admin-Layout/AdminLayout")) ;
import NotFound from "./pages/Not-Found/NotFound";
import ThemeChanger from "./context/ThemeProvider";

const App = () => {


  return (
    <>
      <ThemeChanger>
        <Suspense fallback="Loading...">
          <Routes>
            <Route path="/*" element={<UserLayout />} />
            <Route path="/admin/*" element={<AdminLayout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ThemeChanger>
    </>
  );
};

export default App;
