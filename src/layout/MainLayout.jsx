import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  console.log("MainLayout rendered");
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default MainLayout;
