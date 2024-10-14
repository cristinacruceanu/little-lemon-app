import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="page-container">
      <Header>
        <Nav></Nav>
      </Header>
      <Main>Abc</Main>
      <Footer />
    </div>
  );
}

export default App;
