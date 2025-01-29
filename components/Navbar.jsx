import { Link } from "react-router";
import navlogo from "../images/logo/logo-dark.png";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 w-7xl mx-auto">
      <div>
        <img src={navlogo} alt="" className="w-48 h-6" />
      </div>
      <div className="flex items-center space-x-4 uppercase text-[#333136] text-sm">
        <Link to="/">our company</Link>
        <Link to="/">locations</Link>
        <Link to="/">contact</Link>
      </div>
    </nav>
  );
}
