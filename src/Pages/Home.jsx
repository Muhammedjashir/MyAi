// Home.jsx
import React from "react";
import { Routes, Route } from "react-router"; 
import Header from "../componets/Header";
import Slide from "../componets/Slide";
import Landingpage from "./Landingpage";
import Secpage from "./Secpage";
import Pricepage from "./Pricepage";
import Review from "./Review";
import Footer from "../componets/Footer";
import TermsandPrivecy from "./TermsandPrivecy";
import ReturnandRefund from "./ReturnandRefund";
import Usecase from "./Usecase";

const Home = () => {
  return (
    <>
      {/* Header visible on all pages */}
      <Header />

      {/* Routes for all pages */}
      <Routes>
        <Route path="/" element={<Slide />} />
        <Route path="/landingpage" element={<Landingpage />} />
        <Route path="/secpage" element={<Secpage />} />
        <Route path="/pricepage" element={<Pricepage />} />
        <Route path="/review" element={<Review />} />
        <Route path="/usecase" element={<Usecase />} />
        <Route path="/termsandprivecy" element={<TermsandPrivecy />} />
        <Route path="/returnandrefund" element={<ReturnandRefund />} />
      </Routes>

     

      {/* Footer visible on all pages */}
      <Footer />
    </>
  );
};

export default Home;
