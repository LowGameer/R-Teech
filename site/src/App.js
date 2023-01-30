
import React from "react";
import { BrowserRouter } from 'react-router-dom';
import "../src/App.css";
import Header from "./componentes/header/header";
import Nav from "./componentes/nav/nav";
import Footer from "./componentes/footer/footer";
import Footer2 from "./componentes/footer2/Footer2"
import Routes from "./Routes";

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Nav/>
        <Routes />
        <Footer />
        <Footer2/>
      </BrowserRouter>

  );
}

export default App;
