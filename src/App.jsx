import React, { useState, useEffect } from "react";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import { Route, Routes } from "react-router-dom";
import Policy from "./pages/Policy";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import ScrollToTop from "./func/ScrollToTop";
import CookieConsent from "react-cookie-consent";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const App = () => {
  const [consentGiven, setConsentGiven] = useState(
    Cookies.get("cookieConsent") === "true"
  );

  useEffect(() => {
    if (consentGiven) {
      Cookies.set("cookieConsent", "true", { expires: 365 });
    } else {
      Cookies.remove("cookieConsent");
    }
  }, [consentGiven]);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="cookieConsent"
        enableDeclineButton
        style={{
          background:
            "linear-gradient(232deg, rgba(0,0,0,1) 45%, rgba(124,45,18,1) 100%)",
          opacity: 0.9,
        }}
        buttonStyle={{
          background: "#fb923c",
          color: "#fafafa",
          fontSize: "20px",
          fontWeight: "bold",
          borderRadius: "0.5em",
          padding: "4px 16px",
        }}
        declineButtonStyle={{
          background: "#fafafa",
          color: "#020617",
          fontSize: "20px",
          fontWeight: "bold",
          borderRadius: "0.5em",
          padding: "4px 16px",
        }}
        expires={365}
        onAccept={() => setConsentGiven(true)}
      >
        We use cookies to enhance your experience on our website. By continuing
        to use this site, you consent to the use of cookies in accordance with
        our{" "}
        <Link className="underline" to="/policy">
          Privacy Policy
        </Link>
      </CookieConsent>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
