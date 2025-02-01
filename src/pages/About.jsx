import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import heroImg from "../../images/about/desktop/image-about-hero.jpg";

export default function About() {
  return (
    <>
      <Navbar />

      <section className="flex items-center w-7xl mx-auto">
        <div className="bg-[#e7816b]">
          <h1>About Us</h1>
          <p className="">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
        <div>
          <img src={heroImg} alt="" />
        </div>
      </section>

      <Footer />
    </>
  );
}
