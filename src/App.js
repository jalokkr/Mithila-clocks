import NavBar from "./Components/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Products from "./Pages/Products";
import TeamAndVisionPage from "./Pages/Team&Vision";
import Contact from "./Pages/Contact";
import NavigationBar from "./Components/NavigationBar";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavigationBar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <NavigationBar />
              <Products />
              <Footer />
            </>
          }
        />
        <Route
          path="/team-and-vision"
          element={
            <>
              <NavigationBar /> <TeamAndVisionPage /> <Footer />
            </>
          }
        />
        <Route
          path="/contact-us"
          element={
            <>
              <NavigationBar />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
