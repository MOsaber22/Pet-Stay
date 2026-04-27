import { Route, Routes } from 'react-router-dom'
import UserLayout from './Layout/User-Layout/UserLayout'
import AdminLayout from './Layout//Admin-Layout/AdminLayout'
import NotFound from './pages/Not-Found/NotFound'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/*' element={<UserLayout/>} />
        <Route path='/admin/*' element={<AdminLayout/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App