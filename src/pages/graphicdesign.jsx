import { Link } from "react-router";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import bgPattern2 from "../../svg/bg-pattern-two-circles.svg";
import boxedWater from "../../images/graphic-design/image-boxed-water.jpg";
import change from "../../images/graphic-design/image-change.jpg";
import science from "../../images/graphic-design/image-science.jpg";
import appImg from "../../images/home/desktop/image-app-design.jpg";
import rightArrow from "../../svg/icon-right-arrow.svg";
import webImg from "../../images/home/desktop/image-web-design-large.jpg";

export default function Graphicdesign() {
  return (
    <>
      <Navbar />

      <section
        className="bg-[#e7816b] bg-cover bg-center bg-repeat w-auto md:w-[90%] lg:w-7xl mx-auto h-[252px] md:rounded-2xl text-white flex flex-col items-center justify-center space-y-2"
        style={{ backgroundImage: `url(${bgPattern2})` }}
      >
        <h1 className="font-medium text-5xl">Graphic Design</h1>
        <p className="lg:w-96">
          We deliver eye-catching branding materials that are tailored to meet
          your business objectives.
        </p>
      </section>

      <section className="w-auto lg:w-7xl mx-auto my-20 flex flex-col lg:flex-row flex-wrap gap-4">
        <div className="w-[310px] md:w-[689px] lg:w-[310px] h-auto md:h-[478px] mx-auto lg:mx-0 md:flex items-center lg:block">
          <img
            src={change}
            alt=""
            className="rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none lg:rounded-tr-2xl md:w-[339px] lg:w-auto md:rounded-bl-2xl lg:rounded-bl-none"
          />
          <div
            className="bg-[#fdf3f0] cursor-pointer p-4 rounded-bl-2xl rounded-br-2xl md:rounded-tr-2xl 
            md:rounded-br-2xl md:rounded-bl-none lg:rounded-br-2xl lg:rounded-tr-none lg:rounded-bl-2xl md:h-[310px] lg:h-auto md:flex flex-col justify-center lg:block"
          >
            <h2 className="uppercase font-medium text-xl text-[#e7816b] tracking-widest">
              tim brown
            </h2>
            <p className="text-[#333136] md:w-80 lg:w-auto">
              A book cover designed for Tim Brown’s new release, ‘Change’
            </p>
          </div>
        </div>

        <div className="w-[310px] md:w-[689px] lg:w-[310px] h-auto md:h-[478px] mx-auto lg:mx-0 md:flex items-center lg:block">
          <img
            src={boxedWater}
            alt=""
            className="rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none lg:rounded-tr-2xl md:w-[339px] lg:w-auto md:rounded-bl-2xl lg:rounded-bl-none"
          />
          <div
            className="bg-[#fdf3f0] cursor-pointer p-4 rounded-bl-2xl rounded-br-2xl md:rounded-tr-2xl 
            md:rounded-br-2xl md:rounded-bl-none lg:rounded-br-2xl lg:rounded-tr-none lg:rounded-bl-2xl md:h-[310px] lg:h-auto md:flex flex-col justify-center lg:block"
          >
            <h2 className="uppercase font-medium text-xl text-[#e7816b] tracking-widest">
              boxed water
            </h2>
            <p className="text-[#333136] md:w-80 lg:w-auto">
              A simple packaging concept made for Boxed Water
            </p>
          </div>
        </div>

        <div className="w-[310px] md:w-[689px] lg:w-[310px] h-auto md:h-[478px] mx-auto lg:mx-0 md:flex items-center lg:block">
          <img
            src={science}
            alt=""
            className="rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none lg:rounded-tr-2xl md:w-[339px] lg:w-auto md:rounded-bl-2xl lg:rounded-bl-none"
          />
          <div
            className="bg-[#fdf3f0] cursor-pointer p-4 rounded-bl-2xl rounded-br-2xl md:rounded-tr-2xl 
            md:rounded-br-2xl md:rounded-bl-none lg:rounded-br-2xl lg:rounded-tr-none lg:rounded-bl-2xl md:h-[310px] lg:h-auto md:flex flex-col justify-center lg:block"
          >
            <h2 className="uppercase font-medium text-xl text-[#e7816b] tracking-widest">
              science!
            </h2>
            <p className="text-[#333136] md:w-80 lg:w-auto">
              A poster made in collaboration with the Federal Art Project
            </p>
          </div>
        </div>
      </section>

      <section className="w-auto lg:w-7xl mx-auto my-20">
        <div className="flex flex-col lg:flex-row gap-8">
          <Link to="/web-design">
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
              style={{ backgroundImage: `url(${webImg})` }}
            >
              <div className="hidden lg:block absolute inset-0 w-[470px] h-[197px] bg-[#e7816b] opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-2xl"></div>

              <h2 className="uppercase font-medium text-4xl">web design</h2>
              <p className="uppercase font-medium text-sm tracking-widest flex items-center gap-2 justify-center">
                view projects
                <img src={rightArrow} alt="" />
              </p>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
