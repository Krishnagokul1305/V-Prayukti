import { Link } from "react-router-dom";
import { HiClipboardList } from "react-icons/hi";

function Press() {
  return (
    <Link to={"/events"} className="fixed bottom-10 z-20 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
      <div className="animate-spin-slow">
        <img
          src="https://minhpham.design/assets/icons/ic-text-ring.svg"
          alt="Rotating Ring"
          className="w-14 h-14"
        />
      </div>
      {/* Static Icon */}
      <div className="absolute text-secondary">
        {/* <img
          src="https://minhpham.design/assets/icons/ic-touch.svg"
          alt="Touch Icon"
          className="w-5 h-5"
        /> */}
        <HiClipboardList className="w-5 h-5" />
      </div>
    </Link>
  );
}

export default Press;
