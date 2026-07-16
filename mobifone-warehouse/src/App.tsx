import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ImportPage from "./pages/ImportPage";
import ExportPage from "./pages/ExportPage";
import TraCuuPage from "./pages/TraCuuPage";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nhap-kho" element={<ImportPage />} />
          <Route path="/xuat-kho" element={<ExportPage />} />
          <Route path="/tra-cuu" element={<TraCuuPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
