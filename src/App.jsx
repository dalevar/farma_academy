import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing_page/App";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Register from "./pages/register/app";

export default function App() {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />

            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/register" element={<Register />} />
            </Routes>

            <Footer />
        </div>
    )
}