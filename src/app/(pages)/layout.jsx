import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const PagesLayout = ({ children }) => {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default PagesLayout;
