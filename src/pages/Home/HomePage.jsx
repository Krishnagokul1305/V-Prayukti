import Links from "../../components/Links";
import Press from "../../components/Press";
import AboutSection from "./AboutSection";
import EventLineUp from "./EventLineUp";
import Glimpse from "./Glimpse";
import HeroSection from "./HeroSection";
import ContactUs from "./ContactUs";

function HomePage() {
  return (
    <div className="relative">
      <Links />
      <HeroSection />
      <AboutSection />
      <Press />
      <EventLineUp />
      <Glimpse />
      <ContactUs />
    </div>
  );
}

export default HomePage;
