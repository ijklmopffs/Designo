import { Link } from "react-router";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import bgPattern2 from "../../svg/bg-pattern-two-circles.svg";
import airfilter from "../../images/app-design/image-airfilter.jpg";
import eyecam from "../../images/app-design/image-eyecam.jpg";
import faceit from "../../images/app-design/image-faceit.jpg";
import loopstudios from "../../images/app-design/image-loopstudios.jpg";
import todo from "../../images/app-design/image-todo.jpg";
import graphicImg from "../../images/home/desktop/image-graphic-design.jpg";
import rightArrow from "../../svg/icon-right-arrow.svg";
import webImg from "../../images/home/desktop/image-web-design-large.jpg";

export default function Appdesign() {
  return (
    <>
      <Navbar />

      <section
        className="bg-[#e7816b] bg-cover bg-center bg-repeat w-auto md:w-[90%] lg:w-7xl mx-auto h-[252px] md:rounded-2xl text-white flex flex-col items-center justify-center space-y-2"
        style={{ backgroundImage: `url(${bgPattern2})` }}
      >
        <h1 className="font-medium text-5xl">App Design</h1>
        <p className="lg:w-96">
          Our mobile designs bring intuitive digital solutions to your customers
          right at their fingertips.
        </p>
      </section>

      <section className="w-auto lg:w-7xl mx-auto my-20 flex flex-col lg:flex-row flex-wrap gap-4">
        <div className="w-[310px] md:w-[689px] lg:w-[310px] h-auto md:h-[478px] mx-auto lg:mx-0 md:flex items-center lg:block">
          <img
            src={airfilter}
            alt=""
            className="rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none lg:rounded-tr-2xl md:w-[339px] lg:w-auto md:rounded-bl-2xl lg:rounded-bl-none"
          />
          <div
            className="bg-[#fdf3f0] cursor-pointer p-4 rounded-bl-2xl rounded-br-2xl md:rounded-tr-2xl 
            md:rounded-br-2xl md:rounded-bl-none lg:rounded-br-2xl lg:rounded-tr-none lg:rounded-bl-2xl md:h-[310px] lg:h-auto md:flex flex-col justify-center lg:block"
          >
            <h2 className="uppercase font-medium text-xl text-[#e7816b] tracking-widest">
              airfilter
            </h2>
            <p className="text-[#333136] md:w-80 lg:w-auto">
              Solving the problem of poor indoor air quality by filtering the
              air
            </p>
          </div>
        </div>

        <div className="w-[310px] md:w-[689px] lg:w-[310px] h-auto md:h-[478px] mx-auto lg:mx-0 md:flex items-center lg:block">
          <img
            src={eyecam}
            alt=""
            className="rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none lg:rounded-tr-2xl md:w-[339px] lg:w-auto md:rounded-bl-2xl lg:rounded-bl-none"
          />
          <div
            className="bg-[#fdf3f0] cursor-pointer p-4 rounded-bl-2xl rounded-br-2xl md:rounded-tr-2xl 
            md:rounded-br-2xl md:rounded-bl-none lg:rounded-br-2xl lg:rounded-tr-none lg:rounded-bl-2xl md:h-[310px] lg:h-auto md:flex flex-col justify-center lg:block"
          >
            <h2 className="uppercase font-medium text-xl text-[#e7816b] tracking-widest">
              eyecam
            </h2>
            <p className="text-[#333136] md:w-80 lg:w-auto">
              Product that lets you edit your favorite photos and videos at any
              time
            </p>
          </div>
        </div>

        <div className="w-[310px] md:w-[689px] lg:w-[310px] h-auto md:h-[478px] mx-auto lg:mx-0 md:flex items-center lg:block">
          <img
            src={faceit}
            alt=""
            className="rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none lg:rounded-tr-2xl md:w-[339px] lg:w-auto md:rounded-bl-2xl lg:rounded-bl-none"
          />
          <div
            className="bg-[#fdf3f0] cursor-pointer p-4 rounded-bl-2xl rounded-br-2xl md:rounded-tr-2xl 
            md:rounded-br-2xl md:rounded-bl-none lg:rounded-br-2xl lg:rounded-tr-none lg:rounded-bl-2xl md:h-[310px] lg:h-auto md:flex flex-col justify-center lg:block"
          >
            <h2 className="uppercase font-medium text-xl text-[#e7816b] tracking-widest">
              faceit
            </h2>
            <p className="text-[#333136] md:w-80 lg:w-auto">
              Get to meet your favorite internet superstar with the faceit app
            </p>
          </div>
        </div>

        <div className="w-[310px] md:w-[689px] lg:w-[310px] h-auto md:h-[478px] mx-auto lg:mx-0 md:flex items-center lg:block">
          <img
            src={todo}
            alt=""
            className="rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none lg:rounded-tr-2xl md:w-[339px] lg:w-auto md:rounded-bl-2xl lg:rounded-bl-none"
          />
          <div
            className="bg-[#fdf3f0] cursor-pointer p-4 rounded-bl-2xl rounded-br-2xl md:rounded-tr-2xl 
            md:rounded-br-2xl md:rounded-bl-none lg:rounded-br-2xl lg:rounded-tr-none lg:rounded-bl-2xl md:h-[310px] lg:h-auto md:flex flex-col justify-center lg:block"
          >
            <h2 className="uppercase font-medium text-xl text-[#e7816b] tracking-widest">
              todo
            </h2>
            <p className="text-[#333136] md:w-80 lg:w-auto">
              A todo app that features cloud sync with light and dark mode
            </p>
          </div>
        </div>

        <div className="w-[310px] md:w-[689px] lg:w-[310px] h-auto md:h-[478px] mx-auto lg:mx-0 md:flex items-center lg:block">
          <img
            src={loopstudios}
            alt=""
            className="rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none lg:rounded-tr-2xl md:w-[339px] lg:w-auto md:rounded-bl-2xl lg:rounded-bl-none"
          />
          <div
            className="bg-[#fdf3f0] cursor-pointer p-4 rounded-bl-2xl rounded-br-2xl md:rounded-tr-2xl 
            md:rounded-br-2xl md:rounded-bl-none lg:rounded-br-2xl lg:rounded-tr-none lg:rounded-bl-2xl md:h-[310px] lg:h-auto md:flex flex-col justify-center lg:block"
          >
            <h2 className="uppercase font-medium text-xl text-[#e7816b] tracking-widest">
              loopstudios
            </h2>
            <p className="text-[#333136] md:w-80 lg:w-auto">
              A VR experience app made for Loopstudios
            </p>
          </div>
        </div>
      </section>

      <section className="w-auto lg:w-7xl mx-auto my-20">
        <div className="flex flex-col lg:flex-row gap-8">
          <Link to="/web-design">
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
