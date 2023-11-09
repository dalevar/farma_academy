import { Route, Routes, useLocation } from "react-router-dom";

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
import LearingModule from "./pages/module_page/learning_module/App";

// Hitung Cepat Page
import HitungPage from "./pages/hitung_page/App";
import HitungDetail from "./pages/hitung_page/HitungDetail";
// forum
import ForumPage from "./pages/forum/App";
import DetailForum from "./pages/forum/DetailForum";

import DashboardPage from "./pages/dashboard/App";
import LanggananPage from "./pages/langganan/App";
import { useEffect } from "react";
import LogoutPage from "./pages/authentication/logout/App";

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);

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

        {/* Hitung Cepat Page */}
        <Route path="/hitung-cepat" element={<HitungPage />} />
        <Route path="/hitung-cepat/hitungId" element={<HitungDetail />} />
        <Route
          path="/module/materi/access/learning"
          element={<LearingModule />}
        />

        {/* auth page */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />
      </Routes>

      <Footer />
    </div>
  );
}
