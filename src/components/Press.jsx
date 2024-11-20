import { Link } from "react-router-dom";

function Press() {
  return (
    <div className="fixed bottom-10 z-20 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
      <div className="animate-spin-slow">
        <img
          src="https://minhpham.design/assets/icons/ic-text-ring.svg"
          alt="Rotating Ring"
          className="w-14 h-14"
        />
      </div>
      {/* Static Icon */}
      <Link to="/events" className="absolute">
        <img
          src="https://minhpham.design/assets/icons/ic-touch.svg"
          alt="Touch Icon"
          className="w-5 h-5"
        />
      </Link>
    </div>
  );
}

export default Press;
