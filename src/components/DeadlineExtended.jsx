import Marquee from "react-fast-marquee";

function DeadlineExtended() {
  return (
    <div className="bg-st py-3">
      <Marquee
        gradient={false}
        speed={50}
        className="text-lg font-bold tracking-wider bg-black/30 text-red-700"
      >
        * Deadline Extended! Register now to participate in the event.
      </Marquee>
    </div>
  );
}

export default DeadlineExtended;
