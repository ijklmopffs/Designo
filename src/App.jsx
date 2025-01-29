import Navbar from "../components/Navbar";
import "./App.css";
import heroImg from "../images/home/image-hero-phone.png";
import webImg from "../images/home/desktop/image-web-design-large.jpg";
import appImg from "../images/home/desktop/image-app-design.jpg";
import graphicImg from "../images/home/desktop/image-graphic-design.jpg";

function App() {
  return (
    <>
      <Navbar />

      <section className="bg-[#E7816B] w-7xl mx-auto px-8 h-[45rem] overflow-hidden flex rounded-2xl mt-5">
        <div className="text-white text-start mt-40 space-y-5">
          <h1 className="font-medium text-5xl w-[30rem]">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="w-[26rem]">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <button className="text-black uppercase bg-white rounded-md px-6 py-2">
            learn more
          </button>
        </div>
        <div className="">
          <img src={heroImg} alt="" className="" />
        </div>
      </section>
    </>
  );
}

export default App;
