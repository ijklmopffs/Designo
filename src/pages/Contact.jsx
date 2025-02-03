import { Link } from "react-router";
import navlogo from "../../images/logo/logo-light.png";
import facebook from "../../svg/icon-facebook.svg";
import youtube from "../../svg/icon-youtube.svg";
import twitter from "../../svg/icon-twitter.svg";
import pinterest from "../../svg/icon-pinterest.svg";
import instagram from "../../svg/icon-instagram.svg";
import Navbar from "../../components/Navbar";
import canada from "../../images/about/canada.svg";
import australia from "../../images/about/australia.svg";
import unitedKingdom from "../../images/about/united-kingdom.svg";

export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="w-auto md:w-[659px] lg:w-7xl mx-auto bg-[#e7816b] md:rounded-2xl text-white text-center md:text-start p-20 flex flex-col lg:flex-row items-center justify-between">
        <div>
          <h1 className="font-medium text-3xl md:text-5xl mb-5">Contact Us</h1>
          <p className="md:w-96">
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        <div>
          <form action="">
            <div>
              <input
                type="text"
                className="border-b-2 border-[#979797] w-96 p-4 focus:outline-none"
                placeholder="Name"
              />
            </div>
            <div>
              <input
                type="text"
                className="border-b-2 border-[#979797] w-96 p-4 focus:outline-none"
                placeholder="Email Address"
              />
            </div>
            <div>
              <input
                type="text"
                className="border-b-2 border-[#979797] w-96 p-4 focus:outline-none"
                placeholder="Phone"
              />
            </div>
            <div>
              <input
                type="text"
                className="border-b-2 border-[#979797] w-96 p-4 pb-20 focus:outline-none"
                placeholder="Message"
              />
            </div>
            <div className="flex justify-center md:justify-end">
              <button className="bg-white cursor-pointer hover:bg-[#ffad9b] hover:text-white uppercase tracking-wider text-black px-8 py-3 rounded-sm mt-2 ">
                submit
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="w-auto lg:w-7xl mx-auto text-center my-18 lg:my-32 flex flex-col gap-12 lg:gap-0 lg:flex-row items-center justify-between">
        <div className="space-y-4">
          <img src={canada} alt="" className="w-48 h-48 lg:w-auto lg:h-auto" />
          <h3 className="font-medium text-xl text-[#333136] tracking-widest uppercase">
            canada
          </h3>
          <Link to="/locations">
            <button className="text-white uppercase bg-[#e7816b] rounded-md px-6 py-2 hover:bg-[#ffad9b] cursor-pointer font-medium text-sm">
              see location
            </button>
          </Link>
        </div>
        <div className="space-y-4">
          <img
            src={australia}
            alt=""
            className="w-48 h-48 lg:w-auto lg:h-auto"
          />
          <h3 className="font-medium text-xl text-[#333136] tracking-widest uppercase">
            australia
          </h3>
          <Link to="/locations">
            <button className="text-white uppercase bg-[#e7816b] rounded-md px-6 py-2 hover:bg-[#ffad9b] cursor-pointer font-medium text-sm">
              see location
            </button>
          </Link>
        </div>
        <div className="space-y-4">
          <img
            src={unitedKingdom}
            alt=""
            className="w-48 h-48 lg:w-auto lg:h-auto"
          />
          <h3 className="font-medium text-xl text-[#333136] tracking-widest uppercase">
            united kingdom
          </h3>
          <Link to="/locations">
            <button className="text-white uppercase bg-[#e7816b] rounded-md px-6 py-2 hover:bg-[#ffad9b] cursor-pointer font-medium text-sm">
              see location
            </button>
          </Link>
        </div>
      </section>

      <footer className="bg-[#1d1c1e] p-16">
        <div className="w-auto lg:w-7xl mx-auto space-y-6 mt-40 md:mt-0">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <Link to="/">
              <div>
                <img src={navlogo} alt="" className="w-48 h-6" />
              </div>
            </Link>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0 mt-5 md:mt-0 md:space-x-4 uppercase text-white text-sm">
              <Link to="/about" className="hover:underline">
                our company
              </Link>
              <Link to="/locations" className="hover:underline">
                locations
              </Link>
              <Link to="/contact" className="hover:underline">
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
