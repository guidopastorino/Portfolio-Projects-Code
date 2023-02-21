import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Section1 from "./components/Secrion1/Section1";
import Section2 from "./components/Secrion2/Section2";
import Section3 from "./components/Secrion3/Section3";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
      </main>
      <Footer />
    </>
  );
}

export default App;
