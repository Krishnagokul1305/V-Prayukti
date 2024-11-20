import HeroSection from "./HeroSection.jsx";
import Countdown from "./Countdown.jsx";
import Events from "./Events.jsx";
import Hacks from "./Hacks.jsx";

export default function EventsPage() {
  return (
    <div className="relative">
      <HeroSection />
      <Countdown />
      <Events />
      <Hacks />
    </div>
  );
}
