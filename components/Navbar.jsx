import { useState } from "react";
import { Link } from "react-router";
import navlogo from "../images/logo/logo-dark.png";
import hamburger from "../svg/icon-hamburger.svg";
import closeIcon from "../svg/icon-close.svg";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex items-center justify-between p-4 w-auto lg:w-7xl mx-auto">
      <div>
        <img src={navlogo} alt="" className="w-48 h-6" />
      </div>
      <div className="hidden md:flex items-center space-x-4 uppercase text-[#333136] text-sm">
        <Link to="/" className="hover:underline">
          our company
        </Link>
        <Link to="/" className="hover:underline">
          locations
        </Link>
        <Link to="/" className="hover:underline">
          contact
        </Link>
      </div>

      <nav
        className={
          nav
            ? "md:hidden h-[232px] z-10 flex flex-col gap-8 absolute bg-black p-4 w-full top-20 left-0 transition-all ease-in-out duration-700"
            : "md:hidden h-[232px] z-10 flex flex-col gap-8 absolute bg-black p-4 w-full top-[-100%] left-0 transition-all ease-in-out duration-700"
        }
      >
        <div className="flex flex-col space-x-4 uppercase text-white text-2xl text-start items-start gap-16">
          <Link to="/" className="hover:underline">
            our company
          </Link>
          <Link to="/" className="hover:underline">
            locations
          </Link>
          <Link to="/" className="hover:underline">
            contact
          </Link>
        </div>
      </nav>

      <div className="md:hidden" onClick={handleNav}>
        {nav ? <img src={closeIcon} alt="" /> : <img src={hamburger} alt="" />}
      </div>
    </nav>
  );
}
