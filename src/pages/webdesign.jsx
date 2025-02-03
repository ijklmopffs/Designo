import Navbar from "../../components/Navbar";
import blogr from "../../images/web-design/image-blogr.jpg";
import builder from "../../images/web-design/image-builder.jpg";
import camp from "../../images/web-design/image-camp.jpg";
import express from "../../images/web-design/image-express.jpg";
import photon from "../../images/web-design/image-photon.jpg";
import transfer from "../../images/web-design/image-transfer.jpg";
import appImg from "../../images/home/desktop/image-app-design.jpg";
import graphicImg from "../../images/home/desktop/image-graphic-design.jpg";
import rightArrow from "../../svg/icon-right-arrow.svg";
import Footer from "../../components/Footer";
import bgPattern2 from "../../svg/bg-pattern-two-circles.svg";
import { Link } from "react-router";

export default function Webdesign() {
  return (
    <>
      <Navbar />

      <section
        className="bg-[#e7816b] bg-cover bg-center bg-repeat w-auto md:w-[90%] lg:w-7xl mx-auto h-[252px] md:rounded-2xl text-white flex flex-col items-center justify-center space-y-2"
        style={{ backgroundImage: `url(${bgPattern2})` }}
      >
        <h1 className="font-medium text-5xl">Web Design</h1>
        <p className="lg:w-96">
          We build websites that serve as powerful marketing tools and bring
          memorable brand experiences.
        </p>
      </section>

      <section className="w-auto lg:w-7xl mx-auto my-20 flex flex-col lg:flex-row flex-wrap gap-4">
        <div className="w-[310px] md:w-[689px] lg:w-[310px] h-auto md:h-[478px] mx-auto lg:mx-0 md:flex items-center lg:block">
          <img
            src={express}
            alt=""
            className="rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none lg:rounded-tr-2xl md:w-[339px] lg:w-auto md:rounded-bl-2xl lg:rounded-bl-none"
          />
          <div
            className="bg-[#fdf3f0] cursor-pointer p-4 rounded-bl-2xl rounded-br-2xl md:rounded-tr-2xl 
            md:rounded-br-2xl md:rounded-bl-none lg:rounded-br-2xl lg:rounded-tr-none lg:rounded-bl-2xl md:h-[310px] lg:h-auto md:flex flex-col justify-center lg:block"
          >
            <h2 className="uppercase font-medium text-xl text-[#e7816b] tracking-widest">
              express
            </h2>
            <p className="text-[#333136] md:w-80 lg:w-auto">
              A multi-carrier shipping website for ecommerce businesses
            </p>
          </div>
        </div>

        <div className="w-[310px] md:w-[689px] lg:w-[310px] h-auto md:h-[478px] mx-auto lg:mx-0 md:flex items-center lg:block">
          <img
            src={transfer}
            alt=""
            className="rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none lg:rounded-tr-2xl md:w-[339px] lg:w-auto md:rounded-bl-2xl lg:rounded-bl-none"
          />
          <div
            className="bg-[#fdf3f0] cursor-pointer p-4 rounded-bl-2xl rounded-br-2xl md:rounded-tr-2xl 
            md:rounded-br-2xl md:rounded-bl-none lg:rounded-br-2xl lg:rounded-tr-none lg:rounded-bl-2xl md:h-[310px] lg:h-auto md:flex flex-col justify-center lg:block"
          >
            <h2 className="uppercase font-medium text-xl text-[#e7816b] tracking-widest">
              transfer
            </h2>
            <p className="text-[#333136] md:w-80 lg:w-auto">
              Site for low-cost money transfers and sending money within seconds
            </p>
          </div>
        </div>

        <div className="w-[310px] md:w-[689px] lg:w-[310px] h-auto md:h-[478px] mx-auto lg:mx-0 md:flex items-center lg:block">
          <img
            src={photon}
            alt=""
            className="rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none lg:rounded-tr-2xl md:w-[339px] lg:w-auto md:rounded-bl-2xl lg:rounded-bl-none"
          />
          <div
            className="bg-[#fdf3f0] cursor-pointer p-4 rounded-bl-2xl rounded-br-2xl md:rounded-tr-2xl 
            md:rounded-br-2xl md:rounded-bl-none lg:rounded-br-2xl lg:rounded-tr-none lg:rounded-bl-2xl md:h-[310px] lg:h-auto md:flex flex-col justify-center lg:block"
          >
            <h2 className="uppercase font-medium text-xl text-[#e7816b] tracking-widest">
              photon
            </h2>
            <p className="text-[#333136] md:w-80 lg:w-auto">
              A state-of-the-art music player with high-resolution audio and DSP
              effects
            </p>
          </div>
        </div>

        <div className="w-[310px] md:w-[689px] lg:w-[310px] h-auto md:h-[478px] mx-auto lg:mx-0 md:flex items-center lg:block">
          <img
            src={builder}
            alt=""
            className="rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none lg:rounded-tr-2xl md:w-[339px] lg:w-auto md:rounded-bl-2xl lg:rounded-bl-none"
          />
          <div
            className="bg-[#fdf3f0] cursor-pointer p-4 rounded-bl-2xl rounded-br-2xl md:rounded-tr-2xl 
            md:rounded-br-2xl md:rounded-bl-none lg:rounded-br-2xl lg:rounded-tr-none lg:rounded-bl-2xl md:h-[310px] lg:h-auto md:flex flex-col justify-center lg:block"
          >
            <h2 className="uppercase font-medium text-xl text-[#e7816b] tracking-widest">
              builder
            </h2>
            <p className="text-[#333136] md:w-80 lg:w-auto">
              Connects users with local contractors based on their location
            </p>
          </div>
        </div>

        <div className="w-[310px] md:w-[689px] lg:w-[310px] h-auto md:h-[478px] mx-auto lg:mx-0 md:flex items-center lg:block">
          <img
            src={blogr}
            alt=""
            className="rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none lg:rounded-tr-2xl md:w-[339px] lg:w-auto md:rounded-bl-2xl lg:rounded-bl-none"
          />
          <div
            className="bg-[#fdf3f0] cursor-pointer p-4 rounded-bl-2xl rounded-br-2xl md:rounded-tr-2xl 
            md:rounded-br-2xl md:rounded-bl-none lg:rounded-br-2xl lg:rounded-tr-none lg:rounded-bl-2xl md:h-[310px] lg:h-auto md:flex flex-col justify-center lg:block"
          >
            <h2 className="uppercase font-medium text-xl text-[#e7816b] tracking-widest">
              blogr
            </h2>
            <p className="text-[#333136] md:w-80 lg:w-auto">
              Blogr is a platform for creating an online blog or publication
            </p>
          </div>
        </div>

        <div className="w-[310px] md:w-[689px] lg:w-[310px] h-auto md:h-[478px] mx-auto lg:mx-0 md:flex items-center lg:block">
          <img
            src={camp}
            alt=""
            className="rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none lg:rounded-tr-2xl md:w-[339px] lg:w-auto md:rounded-bl-2xl lg:rounded-bl-none"
          />
          <div
            className="bg-[#fdf3f0] cursor-pointer p-4 rounded-bl-2xl rounded-br-2xl md:rounded-tr-2xl 
            md:rounded-br-2xl md:rounded-bl-none lg:rounded-br-2xl lg:rounded-tr-none lg:rounded-bl-2xl md:h-[310px] lg:h-auto md:flex flex-col justify-center lg:block"
          >
            <h2 className="uppercase font-medium text-xl text-[#e7816b] tracking-widest">
              camp
            </h2>
            <p className="text-[#333136] md:w-80 lg:w-auto">
              Get expert training in coding, data, design, and digital marketing
            </p>
          </div>
        </div>
      </section>

      <section className="w-auto lg:w-7xl mx-auto my-20">
        <div className="flex flex-col lg:flex-row gap-8">
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

      <Footer />
    </>
  );
}
