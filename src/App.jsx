import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Webdesign from "./pages/webdesign";
import Appdesign from "./pages/appdesign";
import Graphicdesign from "./pages/graphicdesign";
import About from "./pages/About";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/web-design" element={<Webdesign />} />
      <Route path="/app-design" element={<Appdesign />} />
      <Route path="/graphic-design" element={<Graphicdesign />} />
      <Route path="/about" element={<About />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
