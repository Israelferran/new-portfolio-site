import React from "react";

import {
  About,
  Footer,
  Header,
  Skills,
  Testimonials,
  Work,
} from "./containers";
import Navbar from "./components/Navbar/Navbar";
import "./app.scss";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
