import canadaMap from "../../images/locations/desktop/image-map-canada.png";
import canadaMapTablet from "../../images/locations/tablet/image-map-canada.png";
import australiaMap from "../../images/locations/desktop/image-map-australia.png";
import australiaMapTablet from "../../images/locations/tablet/image-map-australia.png";
import ukMap from "../../images/locations/desktop/image-map-uk.png";
import ukMapTablet from "../../images/locations/tablet/image-map-uk.png";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function Locations() {
  return (
    <>
      <Navbar />

      <section className="w-auto lg:w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center md:gap-8">
          <div className="bg-[#fdf3f0] md:rounded-2xl p-10 lg:p-20 w-full md:w-[689px] lg:w-[730px] text-center md:text-start">
            <h1 className="text-4xl text-[#e7816b] font-medium mb-5">Canada</h1>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div>
                <h3 className="font-bold text-[#333136]">
                  Designo Central Office
                </h3>
                <p>3886 Wellington Street</p>
                <p>Toronto, Ontario, M9C 3J5</p>
              </div>
              <div>
                <h3 className="font-bold text-[#333136]">Contact</h3>
                <p>P: +1 253-863-8967</p>
                <p>M: contact@designo.co</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={canadaMap}
              alt=""
              className="md:rounded-2xl md:h-[220px] md:hidden lg:block"
            />
            <img
              src={canadaMapTablet}
              alt=""
              className="hidden md:block lg:hidden rounded-2xl"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center md:gap-8 my-10 md:my-20">
          <div>
            <img
              src={australiaMap}
              alt=""
              className="md:rounded-2xl md:h-[220px] md:hidden lg:block"
            />
            <img
              src={australiaMapTablet}
              alt=""
              className="hidden md:block lg:hidden rounded-2xl"
            />
          </div>
          <div className="bg-[#fdf3f0] md:rounded-2xl p-10 lg:p-20 w-full md:w-[689px] lg:w-[730px] text-center md:text-start">
            <h1 className="text-4xl text-[#e7816b] font-medium mb-5">
              Australia
            </h1>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div>
                <h3 className="font-bold text-[#333136]">Designo AU Office</h3>
                <p>19 Balonne Street</p>
                <p>New South Wales 2443</p>
              </div>
              <div>
                <h3 className="font-bold text-[#333136]">Contact</h3>
                <p>P: (02) 6720 9092</p>
                <p>M: contact@designo.au</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center md:gap-8">
          <div className="bg-[#fdf3f0] md:rounded-2xl p-10 md:p-20 w-full md:w-[689px] lg:w-[730px] text-center md:text-start">
            <h1 className="text-4xl text-[#e7816b] font-medium mb-5">
              United Kingdom
            </h1>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div>
                <h3 className="font-bold text-[#333136]">Designo UK Office</h3>
                <p>13 Colorado Way</p>
                <p>Rhydyfro SAB 9GA</p>
              </div>
              <div>
                <h3 className="font-bold text-[#333136]">Contact</h3>
                <p>P: 078 3115 1400</p>
                <p>M: contact@designo.uk</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={ukMap}
              alt=""
              className="md:rounded-2xl md:h-[220px] md:hidden lg:block"
            />
            <img
              src={ukMapTablet}
              alt=""
              className="hidden md:block lg:hidden rounded-2xl"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
