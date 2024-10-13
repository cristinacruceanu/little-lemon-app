import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="page-container">
      <Main>
        <Header>
          <Nav></Nav>
        </Header>
        <Footer />
      </Main>
    </div>
  );
}

export default App;
