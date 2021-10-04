import React from "react";

// components
import Calculator from "./components/calculator";
import Footer from "./components/footer";
import Header from "./components/header";

const App = () => {
  return (
    <main className="main-container" role="main">
      <Header />
      <Calculator />
      <Footer />
    </main>
  );
};

export default App;
