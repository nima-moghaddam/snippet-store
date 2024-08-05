import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "../layout"
import CodeDetail from "../modules/code-detail"
import Dashboard from "../modules/dashboard"
import Preview from "../modules/preview"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index path="/*" element={<Dashboard />} />
          <Route path="/:code" element={<CodeDetail />} />
          <Route path="/preview/:code" element={<Preview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
