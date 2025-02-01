import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Webdesign from "./pages/webdesign";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/web-design" element={<Webdesign />} />
      {/* <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<Pricing />} /> */}
    </Routes>
  );
}

export default App;
