import navlogo from "../images/logo/logo-light.png";
import { Link } from "react-router";
import facebook from "../svg/icon-facebook.svg";
import youtube from "../svg/icon-youtube.svg";
import twitter from "../svg/icon-twitter.svg";
import pinterest from "../svg/icon-pinterest.svg";
import instagram from "../svg/icon-instagram.svg";

export default function Footer() {
  return (
    <>
      <div className="w-80 md:w-[600px] h-96 md:h-72 lg:w-7xl mx-auto bg-[#e7816b] lg:h-[232px] relative top-48 md:top-12 rounded-md p-8 px-12 flex flex-col lg:flex-row justify-between items-center text-center lg:text-start text-white">
        <div>
          <h2 className="font-medium text-2xl md:text-4xl lg:w-60 my-5">
            Let’s talk about your project
          </h2>
          <p className="lg:w-96">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <div>
          <button className="text-black uppercase bg-white cursor-pointer rounded-md px-6 py-2 font-medium text-sm hover:bg-[#ffad9b]">
            get in touch
          </button>
        </div>
      </div>
      <footer className="bg-[#1d1c1e] p-16">
        <div className="w-auto lg:w-7xl mx-auto space-y-6 mt-40 md:mt-0">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <img src={navlogo} alt="" className="w-48 h-6" />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0 mt-5 md:mt-0 md:space-x-4 uppercase text-white text-sm">
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
          </div>
          <div className="w-full h-[1px] bg-[#979797]" />
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 text-center md:text-start text-white/50">
              <div>
                <h3 className="font-bold">Designo Central Office</h3>
                <p>3886 Wellington Street</p>
                <p>Toronto, Ontario, M9C 3J5</p>
              </div>
              <div>
                <h3 className="font-bold">Contact Us (Central Office)</h3>
                <p>P: +1 253-863-8967</p>
                <p>M: contact@designo.co</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-5 md:mt-0">
              <img src={facebook} alt="" className="w-6 h-6" />
              <img src={youtube} alt="" className="w-6 h-6" />
              <img src={twitter} alt="" className="w-6 h-6" />
              <img src={pinterest} alt="" className="w-6 h-6" />
              <img src={instagram} alt="" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
