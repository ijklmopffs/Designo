import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import heroImg from "../../images/home/image-hero-phone.png";
import webImg from "../../images/home/desktop/image-web-design-large.jpg";
import appImg from "../../images/home/desktop/image-app-design.jpg";
import graphicImg from "../../images/home/desktop/image-graphic-design.jpg";
import passionIcon from "../../images/home/passionate.svg";
import friendlyIcon from "../../images/home/friendly.svg";
import resourcefulIcon from "../../images/home/resourceful.svg";
import rightArrow from "../../svg/icon-right-arrow.svg";
import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="bg-[#E7816B] w-auto md:w-[689px] lg:w-7xl mx-auto px-8 h-[45rem] overflow-hidden flex flex-col lg:flex-row md:rounded-2xl mt-5">
        <div className="text-white text-center lg:text-start mt-40 space-y-5">
          <h1 className="font-medium text-3xl md:text-5xl lg:w-[30rem]">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="lg:w-[26rem]">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Link to="/about">
            <button className="text-black uppercase bg-white rounded-md px-6 py-2 hover:bg-[#ffad9b] hover:text-white cursor-pointer font-medium text-sm">
              learn more
            </button>
          </Link>
        </div>
        <div className="">
          <img src={heroImg} alt="" className="" />
        </div>
      </section>

      <section className="my-40 w-auto lg:w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-4">
        <Link to="/web-design">
          <div
            className="bg-cover bg-center bg-no-repeat w-4/5 md:w-[689px] lg:w-[470px] h-60 lg:h-[420px] mx-auto lg:mx-0 rounded-2xl text-white flex justify-center flex-col space-y-6 cursor-pointer relative group"
            style={{ backgroundImage: `url(${webImg})` }}
          >
            <div className="hidden lg:block absolute inset-0 w-[470px] h-[420px] bg-[#e7816b] opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-2xl"></div>
            <h2 className="uppercase font-medium text-4xl">web design</h2>
            <p className="uppercase font-medium text-sm tracking-widest flex items-center gap-2 justify-center">
              view projects
              <img src={rightArrow} alt="" />
            </p>
          </div>
        </Link>

        <div className="flex flex-col gap-8">
          <Link to="/app-design">
            <div
              className="bg-cover bg-center bg-no-repeat w-4/5 md:w-[689px] lg:w-[470px] h-60 md:h-[197px] mx-auto lg:mx-0 rounded-2xl text-white flex justify-center flex-col space-y-6 cursor-pointer relative group"
              style={{ backgroundImage: `url(${appImg})` }}
            >
              <div className="hidden lg:block absolute inset-0 w-[470px] h-[197px] bg-[#e7816b] opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-2xl"></div>

              <h2 className="uppercase font-medium text-4xl">app design</h2>
              <p className="uppercase font-medium text-sm tracking-widest flex items-center gap-2 justify-center">
                view projects
                <img src={rightArrow} alt="" />
              </p>
            </div>
          </Link>

          <Link to="/graphic-design">
            <div
              className="bg-cover bg-center bg-no-repeat w-4/5 md:w-[689px] lg:w-[470px] h-60 md:h-[197px] mx-auto lg:mx-0 rounded-2xl text-white flex justify-center flex-col space-y-6 cursor-pointer relative group"
              style={{ backgroundImage: `url(${graphicImg})` }}
            >
              <div className="hidden lg:block absolute inset-0 w-[470px] h-[197px] bg-[#e7816b] opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-2xl"></div>

              <h2 className="uppercase font-medium text-4xl">graphic design</h2>
              <p className="uppercase font-medium text-sm tracking-widest flex items-center gap-2 justify-center">
                view projects
                <img src={rightArrow} alt="" />
              </p>
            </div>
          </Link>
        </div>
      </section>

      <section className="w-auto lg:w-7xl mx-auto flex flex-col lg:flex-row gap-4 lg:gap-0 items-center justify-between my-40">
        <div className="md:flex gap-8 lg:block md:text-start lg:text-center">
          <img src={passionIcon} alt="" className="mx-auto" />
          <div className="space-y-5">
            <h2 className="font-medium my-8 text-xl text-[#333136] uppercase tracking-widest">
              passionate
            </h2>
            <p className="text-center md:text-start lg:text-center w-96 text-[#333136]">
              Each project starts with an in-depth brand research to ensure we
              only create products that serve a purpose. We merge art, design,
              and technology into exciting new solutions.
            </p>
          </div>
        </div>

        <div className="md:flex gap-8 lg:block md:text-start lg:text-center">
          <img src={resourcefulIcon} alt="" className="mx-auto" />
          <div className="space-y-5">
            <h2 className="font-medium my-8 text-xl text-[#333136] uppercase tracking-widest">
              resourceful
            </h2>
            <p className="text-center md:text-start lg:text-center w-96 text-[#333136]">
              Everything that we do has a strategic purpose. We use an agile
              approach in all of our projects and value customer collaboration.
              It guarantees superior results that fulfill our clients’ needs.
            </p>
          </div>
        </div>

        <div className="md:flex gap-8 lg:block md:text-start lg:text-center">
          <img src={friendlyIcon} alt="" className="mx-auto" />
          <div className="space-y-5">
            <h2 className="font-medium my-8 text-xl text-[#333136] uppercase tracking-widest">
              friendly
            </h2>
            <p className="text-center md:text-start lg:text-center w-96 text-[#333136]">
              We are a group of enthusiastic folks who know how to put people
              first. Our success depends on our customers, and we strive to give
              them the best experience a company can provide.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
