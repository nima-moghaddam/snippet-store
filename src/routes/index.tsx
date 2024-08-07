import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import AppLayout from "../layout"
import Dashboard from "../modules/dashboard"
import LinksPage from "../modules/links"
import SnippetPage from "../modules/snippet"
import SnippetDetailPage from "../modules/snippet-detail"
import SnippetPreviewPage from "../modules/snippet-preview"
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="links" element={<LinksPage />} />
          <Route path="snippet" element={<SnippetPage />}>
            <Route path=":code" element={<SnippetDetailPage />} />
            <Route path="preview/:code" element={<SnippetPreviewPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
