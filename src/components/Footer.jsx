import { HiMiniPlay } from "react-icons/hi2";
import { linksData, socialLinks } from "../constants/constants";
import { voucher1, voucher2 } from "../assets/index";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-primary py-20 px-10 md:px-20">
      <div className="container md:mx-auto px-6 w-[90%] font-semibold text-lg md:text-[1.5vw]">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-col mb-6 md:mb-0">
            <span className="text-sm uppercase md:text-[1vw] mb-4 tracking-widest">
              Links
            </span>
            <ul className="space-y-5 md:space-y-[2vw]">
            <li className="flex items-center">
                <span className="text-orange-500 mr-2">
                  <HiMiniPlay className="h-6" />
                </span>
                <Link
                to={"/events"}
                  className="hover:text-orange-200"
                >
                  Events
                </Link>
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-2">
                  <HiMiniPlay className="h-6" />
                </span>
                <a
                  href={voucher1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-200"
                >
                  Brochure1
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-2">
                  <HiMiniPlay className="h-6" />
                </span>
                <a
                  href={voucher2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-200"
                >
                  Brochure2
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-2">
                  <HiMiniPlay className="h-6" />
                </span>
                <Link
                to={"/register/search"}
                  className="hover:text-orange-200"
                >
                  Your Registrations
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col mb-6 md:mb-0">
            <span className="text-sm md:text-[1vw] uppercase mb-4 tracking-widest">
              Connect
            </span>
            <ul className="space-y-5 md:space-y-[2vw]">
              <li className="flex items-center">
                <span className="text-orange-500 mr-2">
                  <HiMiniPlay className="h-6" />
                </span>
                <a
                  href={linksData[1].link}
                  className="hover:text-orange-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              {/* <li className="flex items-center">
                <span className="text-orange-500 mr-2">
                  <HiMiniPlay className="h-6" />
                </span>
                <a href="#" className="hover:text-orange-200">
                  Youtube
                </a>
              </li> */}
              <li className="flex items-center">
                <span className="text-orange-500 mr-2">
                  <HiMiniPlay className="h-6" />
                </span>
                <a href="#" className="hover:text-orange-200">
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-6 md:mt-0">
            <div className="space-y-[4vw] md:space-y-[2vw]">
              <div>
                <h4 className="text-sm uppercase tracking-widest md:text-[1vw]">
                  Email
                </h4>
                <a href={socialLinks.email} className="hover:text-orange-200">
                  bitvprayukti@bitsathy.ac.in
                </a>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-widest md:text-[1vw]">
                  FrontEnd
                </h4>
                <a
                  href={
                    "https://www.linkedin.com/in/gokula-krishnan-k-79a776277/"
                  }
                  className="hover:text-orange-200"
                >
                  Gokulakrishnan K
                </a>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-widest md:text-[1vw]">
                  Backend
                </h4>
                <a
                  href={"https://www.linkedin.com/in/premnath018/"}
                  className="hover:text-orange-200"
                >
                  Premnath M
                </a>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
