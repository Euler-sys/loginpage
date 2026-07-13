import { HashRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/landing";
import EmailPage from "./pages/emailpage";
import CodePage from "./pages/codepage";
import SecurityPage from "./pages/security";
import OTPPage from "./pages/otp";
import Admin from "./pages/admin";

import FDICBanner from "./components/header";
import Footer from "./components/footer";

export default function App() {
  return (
    <HashRouter>
      {/* Header shown on every page */}
      <FDICBanner />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/email" element={<EmailPage />} />
        <Route path="/code" element={<CodePage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/otp" element={<OTPPage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <Footer/>
    </HashRouter>
  );
}