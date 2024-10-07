import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Main>
        <Header>
          <Nav></Nav>
        </Header>
        <Footer></Footer>
      </Main>
    </>
  );
}

export default App;
