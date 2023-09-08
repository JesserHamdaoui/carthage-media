import React from "react";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import ConvertKitForm from "convertkit-react";
import { Route, Routes } from "react-router-dom";
import Policy from "./pages/Policy";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import ScrollToTop from "./func/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <ConvertKitForm formId="5562329" />
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
