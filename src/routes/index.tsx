import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import AppLayout from "../layout"
import Dashboard from "../modules/dashboard"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index path="/*" element={<Dashboard />} />
          <Route path="/code" element={<>code</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
