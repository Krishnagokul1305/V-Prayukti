import Marquee from "react-fast-marquee";

function PricePool({  ruppee }) {
  return (
    <div className="bg-stone-900/50 py-3">
      <Marquee
        gradient={false}
        speed={50}
        className=" text-lg font-bold tracking-wider"
      >
        🏆 Win{" "}
        <span className="mx-3 text-secondary">
          {ruppee ? `Rs.${ruppee} /-` : " MEMENTOS AND CERTIFICATES "}
        </span>{" "}
        in this event! 🎉 Don&apos;t miss the chance to showcase your skills and
        claim the reward.
      </Marquee>
    </div>
  );
}

export default PricePool;
