import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ReserveTable from "./pages/ReserveTable";
import LoginPage from "./pages/LoginPage";

function App() {
  /*useEffect(() => {
    document.title = "Little Lemon App";
  }, []);*/

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reserve-table" element={<ReserveTable />} />
        <Route path="/login-page" element={<LoginPage />} />
      </Routes>
    </Router>
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
