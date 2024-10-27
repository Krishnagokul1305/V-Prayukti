import { voucher } from "../assets";

function Press() {
  return (
    <div className="fixed bottom-10 z-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
      {/* Rotating Ring */}
      <div className="animate-spin-slow">
        <img
          src="https://minhpham.design/assets/icons/ic-text-ring.svg"
          alt="Rotating Ring"
          className="w-14 h-14"
        />
      </div>
      {/* Static Icon */}
      <a className="absolute" href={voucher} target="_blank" rel="noopener noreferrer">
        <img
          src="https://minhpham.design/assets/icons/ic-touch.svg"
          alt="Touch Icon"
          className="w-5 h-5"
        />
      </a>
    </div>
  );
}

export default Press;
