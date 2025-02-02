import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import heroImg from "../../images/about/desktop/image-about-hero.jpg";
import heroImgTablet from "../../images/about/tablet/image-about-hero.jpg";
import heroImg2 from "../../images/about/desktop/image-world-class-talent.jpg";
import heroImgTablet2 from "../../images/about/tablet/image-world-class-talent.jpg";
import canada from "../../images/about/canada.svg";
import australia from "../../images/about/australia.svg";
import unitedKingdom from "../../images/about/united-kingdom.svg";
import heroImg3 from "../../images/about/desktop/image-real-deal.jpg";
import heroImgTablet3 from "../../images/about/tablet/image-real-deal.jpg";
import { Link } from "react-router";

export default function About() {
  return (
    <>
      <Navbar />

      <section className="flex flex-col-reverse lg:flex-row items-center w-auto md:w-[689px] lg:w-7xl mx-auto bg-[#e7816b] lg:text-start text-white md:rounded-2xl md:my-14">
        <div className="p-18 lg:p-36">
          <h1 className="text-3xl md:text-5xl font-medium">About Us</h1>
          <p className="lg:w-[30rem] mt-8 text-sm md:text-base">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
        <div>
          <img
            src={heroImg}
            alt=""
            className="block md:hidden lg:block md:rounded-tr-2xl md:rounded-br-2xl"
          />
          <img
            src={heroImgTablet}
            alt=""
            className="rounded-tr-2xl rounded-tl-2xl hidden md:block lg:hidden"
          />
        </div>
      </section>

      <section className="flex flex-col lg:flex-row items-center w-auto md:w-[689px] lg:w-7xl mx-auto bg-[#fdf3f0] lg:text-start text-white md:rounded-2xl md:my-32">
        <div>
          <img
            src={heroImg2}
            alt=""
            className="md:rounded-tl-2xl md:rounded-bl-2xl md:hidden lg:block"
          />
          <img
            src={heroImgTablet2}
            alt=""
            className="hidden md:block lg:hidden rounded-tr-2xl rounded-tl-2xl"
          />
        </div>

        <div className="lg:text-start p-18 lg:p-36">
          <h2 className="font-medium text-2xl md:text-4xl text-[#e7816b]">
            World-class Talent
          </h2>
          <p className="text-[#333136] md:w-[28rem] mt-5 text-sm md:text-base">
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p className="text-[#333136] md:w-[28rem] mt-5 text-sm md:text-base">
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
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

      <section className="flex flex-col-reverse lg:flex-row items-center w-auto md:w-[689px] lg:w-7xl mx-auto bg-[#fdf3f0] text-center lg:text-start text-white rounded-2xl my-32">
        <div className="lg:text-start p-18 lg:p-36">
          <h2 className="font-medium text-4xl text-[#e7816b]">The real deal</h2>
          <p className="text-[#333136] lg:w-[28rem] mt-5">
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p className="text-[#333136] lg:w-[28rem] mt-5">
            We are visual storytellers in making content stand out in the
            overcrowded world. Let’s make something great together.
          </p>
        </div>
        <div>
          <img
            src={heroImg3}
            alt=""
            className="md:rounded-tr-2xl md:rounded-br-2xl md:hidden lg:block"
          />
          <img
            src={heroImgTablet3}
            alt=""
            className="hidden md:block lg:hidden rounded-tr-2xl rounded-tl-2xl"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
