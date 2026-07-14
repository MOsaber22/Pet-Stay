import { Route, Routes } from "react-router-dom";
import { lazy,Suspense, useContext, useState } from "react";
import { loadingContext, LoadingContextProvider } from "../../context/LoadingContext";
const Overview = lazy(() => import("../../admin/screens/Overview/Overview"));
const PendingCats = lazy(() => import("../../admin/screens/Pending-Cats/PendingCats"));
const AdminAllCats = lazy(() => import("../../admin/screens/All-Cats/AdminAllCats"));
import AdminSidebar from "../../admin/components/Admin-Navbar/AdminSidebar";
import AdminNavbar from "../../admin/components/NavBar/AdminNavbar";
const Users = lazy(() => import("../../admin/screens/Users/Users"));
const AdoptRequest = lazy(() => import("../../admin/screens/AdoptionRequest/AdoptionRequest"));
const CatDetail = lazy(() => import("../../admin/screens/Cat-Details/CatDetail"));
import ThemeChanger, { useTheme } from "../../context/ThemeProvider";
import NotFound from "../../pages/Not-Found/NotFound";
import AddNewCat from "../../admin/screens/All-Cats/AddNewCat";
const RequestDetails = lazy(() => import("../../admin/screens/AdoptionRequest/RequestDetails"));
const EditCat = lazy(() => import("../../admin/screens/All-Cats/EditCat"));
const AdminContent = () => {
  const { theme, changeTheme } = useTheme();
  const dark = theme === "dark";
  const [open, setOpen] = useState(false);

  const {loading} = useContext(loadingContext);
  return (
    <div
      className={`min-h-screen ${dark ? "bg-gray-900" : "bg-[#f7f9f9]"} flex font-sans`}
    >
      <aside className="hidden lg:block w-72 shrink-0 p-4">
        <div className="sticky top-4">
          <AdminSidebar />
        </div>
      </aside>

      {open && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <div
            className={`absolute left-0 top-0 bottom-0 w-72 p-3 ${dark ? "bg-gray-900" : "bg-[#f7f9f9]"}`}
          >
            <AdminSidebar onNavigate={() => setOpen(false)} />
          </div>
        </div>
      )}

      <div
        className={`flex-1 min-w-0 flex flex-col ${dark ? "bg-gray-900" : "bg-[#f7f9f9]"}`}
      >
        <AdminNavbar onMenu={() => setOpen(true)} onToggleTheme={changeTheme} />
        <main
          className={`px-4 sm:px-6 lg:px-8 py-6 flex-1 ${dark ? "bg-gray-900" : "bg-[#f7f9f9]"}`}
        >
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen">{loading()}</div>}>
            <Routes>
              <Route index element={<Overview />} />
              <Route path="pending-cats" element={<PendingCats />} />
              <Route path="all-cats" element={<AdminAllCats />} />
              <Route path="users" element={<Users />} />
              <Route path="adoption-requests" element={<AdoptRequest />} />
              <Route path="adoption-requests/:requestID" element={<RequestDetails />} />
              <Route path="cat-details/:catID" element={<CatDetail />} />
              <Route path="all-cats/add-new-cat" element={<AddNewCat />} />
              <Route path="all-cats/edit-cat/:catID" element={<EditCat />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </div>
  );
};

const AdminLayout = () => {
  return (
    <LoadingContextProvider>
      <ThemeChanger>
        <AdminContent />
      </ThemeChanger>
    </LoadingContextProvider>
  );
};

export default AdminLayout;
