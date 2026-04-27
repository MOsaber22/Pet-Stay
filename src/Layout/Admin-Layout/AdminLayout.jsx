import { Route, Routes } from "react-router-dom"
import Overview from "../../admin/screens/Overview/Overview"
import PendingCats from "../../admin/screens/Pending-Cats/PendingCats"
import AdminAllCats from "../../admin/screens/All-Cats/AdminAllCats"
import NotFound from "../../pages/Not-Found/NotFound"

const AdminLayout = () => {
  return (
    <>
      <Routes>
        <Route index element={<Overview />} />
        <Route path="pending-cats" element={<PendingCats />} />
        <Route path="all-cats" element={<AdminAllCats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default AdminLayout