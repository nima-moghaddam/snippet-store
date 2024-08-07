import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import AppLayout from "../layout"
import Dashboard from "../modules/dashboard"
import LinksPage from "../modules/links"
import SnippetPage from "../modules/snippet"
import SnippetDetailPage from "../modules/snippet-detail"
import SnippetPreviewPage from "../modules/snippet-preview"
import { RouteEnum } from "../types/RouteModels"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path={RouteEnum.Links} element={<LinksPage />} />
          <Route path={RouteEnum.Snippet} element={<SnippetPage />}>
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
