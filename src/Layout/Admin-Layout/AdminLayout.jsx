import { Route, Routes } from "react-router-dom";
import Overview from "../../admin/screens/Overview/Overview";
import PendingCats from "../../admin/screens/Pending-Cats/PendingCats";
import AdminAllCats from "../../admin/screens/All-Cats/AdminAllCats";
import NotFound from "../../pages/Not-Found/NotFound";
import { useState } from "react";
import AdminSidebar from "../../admin/components/Admin-Navbar/AdminSidebar";
import AdminNavbar from "../../admin/components/NavBar/AdminNavbar";
import Users from "../../admin/screens/Users/Users";
import AdoptRequest from "../../admin/screens/AdoptionRequest/AdoptionRequest";
import CatDetail from "../../admin/screens/Cat-Details/CatDetail";


const AdminLayout = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="min-h-screen bg-nuetral flex font-sans">
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
            <div className="absolute left-0 top-0 bottom-0 w-72 p-3">
              <AdminSidebar onNavigate={() => setOpen(false)} />
            </div>
          </div>
        )}

        <div className="flex-1 min-w-0 flex flex-col">
          <AdminNavbar onMenu={() => setOpen(true)} />
          <main className="px-4 sm:px-6 lg:px-8 py-6 flex-1">
            <Routes>
              <Route index element={<Overview />} />
              <Route path="pending-cats" element={<PendingCats />} />
              <Route path="all-cats" element={<AdminAllCats />} />
              <Route path="users" element={<Users />} />
              <Route path="adoption-requests" element={<AdoptRequest />} />
              <Route path="cat-details/:catID" element={<CatDetail />} />
              <Route path="*" element={<NotFound />} />

            </Routes>
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
