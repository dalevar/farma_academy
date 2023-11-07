import { Route, Routes } from "react-router-dom";

// component
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

// pages
import LandingPage from "./pages/landing_page/App";
import ModulePage from "./pages/module_page/App";
import RegisterPage from "./pages/authentication/register/app";
import AccessesModulePage from './pages/Accesses_module_page/App'
import LanggananPage from "./pages/langganan/App";
import ForumPage from "./pages/forum/App";
import DetailForum from "./pages/forum/DetailForum";
import DashboardPage from "./pages/dashboard/App";
import LoginPage from "./pages/authentication/login/App";


export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/langganan" element={<LanggananPage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/forum/forumId" element={<DetailForum />} />
        <Route path="/modul" element={<ModulePage />} />
        <Route path="/modul/akses" element={<AccessesModulePage />} />

        {/* auth page */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

      <Footer />
    </div>
  );
}
