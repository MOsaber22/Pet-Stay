import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
const UserLayout = lazy(() => import("./Layout/User-Layout/UserLayout")) ;
const AdminLayout = lazy(() => import("./Layout/Admin-Layout/AdminLayout")) ;
import NotFound from "./pages/Not-Found/NotFound";
import ThemeChanger from "./context/ThemeProvider";
import { AuthProvider } from "./context/AuthContext";

const App = () => {


  return (
        <AuthProvider>
        <ThemeChanger>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/admin/*" element={<AdminLayout />} />
              <Route path="/*" element={<UserLayout />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ThemeChanger>
      </AuthProvider>
  );
};

export default App;