import { shortLogo } from "../assets";
import Link from "./Link";
import { HiOutlineMail, HiPlay,HiOutlinePhone } from "react-icons/hi";
import { HiCamera } from "react-icons/hi2";

const linksData = [
  {
    Icon: HiOutlineMail,
    link: "/mail",
  },
  {
    Icon: HiCamera,
    link: "/camera",
  },
  {
    Icon: HiOutlinePhone,
    link: "/play",
  },
];

function Links() {
  return (
    <div className="h-screen w-20 fixed z-20 left-5 md:left-10 flex flex-col justify-between md:top-10 top-5">
      <h1 className="mb-5">
        <img src={shortLogo} alt="" className="h-14" />
      </h1>
      <div className="space-y-16 mb-24 hidden md:block">
        {linksData.map(({ Icon, link }, index) => (
          <Link key={index} link={link} Icon={Icon} />
        ))}
      </div>
    </div>
  );
}

export default Links;
