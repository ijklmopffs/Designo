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

      <section className="my-40 w-7xl mx-auto flex justify-between gap-4">
        <div
          className="bg-cover bg-center bg-no-repeat w-[470px] h-[420px] rounded-2xl text-white flex justify-center flex-col space-y-6"
          style={{ backgroundImage: `url(${webImg})` }}
        >
          <h2 className="uppercase font-medium text-4xl">web design</h2>
          <p className="uppercase font-medium text-sm tracking-widest">
            view projects
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div
            className="bg-cover bg-center bg-no-repeat w-[470px] h-[197px] rounded-2xl text-white flex justify-center flex-col space-y-6"
            style={{ backgroundImage: `url(${appImg})` }}
          >
            <h2 className="uppercase font-medium text-4xl">app design</h2>
            <p className="uppercase font-medium text-sm tracking-widest">
              view projects
            </p>
          </div>
          <div
            className="bg-cover bg-center bg-no-repeat w-[470px] h-[197px] rounded-2xl text-white flex justify-center flex-col space-y-6"
            style={{ backgroundImage: `url(${graphicImg})` }}
          >
            <h2 className="uppercase font-medium text-4xl">graphic design</h2>
            <p className="uppercase font-medium text-sm tracking-widest">
              view projects
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
