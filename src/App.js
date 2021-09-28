import React from "react";

// components
import Calculator from "./components/calculator";
import Header from "./components/header";

const App = () => {
  return (
    <main className="main-container" role="main">
      <Header />
      <Calculator />
    </main>
  );
};

export default App;
