import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import CallToAction from "./components/CallToAction";
import Header from "./components/Header";
import Footer from "./components/Footer";
import imageUrl from "./assets/icons_assets/restaurant-food.jpg";

function App() {
  /*useEffect(() => {
    document.title = "Little Lemon App";
  }, []);*/
  const handleClick = () => {
    alert("CTA Button Clicked!");
  };
  return (
    <div className="page-container">
      <Header>
        <Nav></Nav>
      </Header>
      <Main>
        <CallToAction
          title="Little Lemon"
          location="Chicago"
          description="We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
          buttonText="Reserve a  table"
          onButtonClick={handleClick}
          imageUrl={imageUrl}
          imageAlt="Restaurant food"
        ></CallToAction>
      </Main>
      <Footer />
    </div>
  );
}

export default App;

/*

Now that your components are set up, the next step is to add the navigation and routes.

Update the hyperlinks in your navbar to use the Link component.

In the Main component you created in the previous exercise, add the Routes component and define a route for each page. For example:

<Routes> 
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/booking" element={<BookingPage />}></Route>
</Routes>

*/
