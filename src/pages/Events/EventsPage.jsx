import HeroSection from "./HeroSection.jsx";
import Countdown from "./Countdown.jsx";
import Events from "./Events.jsx";
import { Suspense } from "react";
import FallBackLoader from "../../components/FallBackLoader.jsx";

export default function EventsPage() {
  return (
    <div className="relative">
      <HeroSection />
      {/* <DeadlineExtended/> */}
      <Countdown />
      <Suspense fallback={<FallBackLoader />}>
        <Events />
      </Suspense>
    </div>
  );
}
