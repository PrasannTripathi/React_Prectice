import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Plans from "./pages/Plans";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Updates from "./pages/Updates";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsCondition from "./pages/TermsCondition";
import RefundPolicy from "./pages/RefundPolicy";
import Footer from "./component/Footer";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-[100vw] overflow-x-hidden no_scroll">
      <BrowserRouter>
        
        
        {/* Moved useLocation inside BrowserRouter */}
        <Content />
        
      </BrowserRouter>
    </div>
  );
}

// Extracted the routing and location-based logic into a separate component
function Content() {
  const location = useLocation();
  console.log(location.pathname);

  const hideFooterOnRoutes = ["/login", "/signup", "/forgotpassword"];

  return (
    <>
          {!hideFooterOnRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termscondition" element={<TermsCondition />} />
        <Route path="/refundpolicy" element={<RefundPolicy />} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />

      </Routes>
      
      {/* Conditionally render Footer */}
      {!hideFooterOnRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;
