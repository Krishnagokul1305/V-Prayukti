import AnimatedCursor from "react-animated-cursor";
import Footer from "../../components/Footer";
import Links from "../../components/Links";
import Navbar from "../../components/Navbar";
import Press from "../../components/Press";
import AboutSection from "./AboutSection";
import ComingSoon from "./ComingSoon";
import Glimpse from "./Glimpse";
import HeroSection from "./HeroSection";
import ContactUs from "./ContactUs";

function HomePage() {
  return (
    <div className="relative">
      <Links />
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "#eb5939",
        }}
        outerStyle={{
          backgroundColor: "#eb5939",
          zIndex: "10",
        }}
      />
      <div className="fixed top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent z-10 md:none"></div>
      <div className="fixed bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Press />
      <ComingSoon />
      <Glimpse />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default HomePage;
