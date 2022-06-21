import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

type PageContainerProps = {
  children: React.ReactNode;
};

function PageContainer({ children }: PageContainerProps) {
  return (
    <>
    <div className="w-screen h-screen bg-teal-800">
      <Navbar title="Supreame Spoon" />
      {children}
     </div>
       <Footer />
     </>
  );
}

export default PageContainer;
