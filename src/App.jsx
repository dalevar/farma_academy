import { Route, Routes } from "react-router-dom";

// component
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

// pages
import LandingPage from "./pages/landing_page/App";
// auth page
import LoginPage from "./pages/authentication/login/App";
import RegisterPage from "./pages/authentication/register/App";
// module page
import ModulePage from "./pages/module_page/App";
import DetailModule from "./pages/module_page/detail_module/App";
import AccessMateriPage from "./pages/module_page/detail_module/detail_materi/App";
// forum
import ForumPage from "./pages/forum/App";
import DetailForum from "./pages/forum/DetailForum";

import DashboardPage from "./pages/dashboard/App";
import LanggananPage from "./pages/langganan/App";


export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/langganan" element={<LanggananPage />} />

        {/* forum */}
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/forum/forumId" element={<DetailForum />} />

        {/* module */}
        <Route path="/module" element={<ModulePage />} />
        <Route path="/module/materi" element={<DetailModule />} />
        <Route path="/module/materi/access" element={<AccessMateriPage />} />

        {/* auth page */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

      <Footer />
    </div>
  );
}