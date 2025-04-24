import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa6";
import { g1, g2, g3, g5, g7 } from "../assets/index";

export const linksData = [
  {
    Icon: HiOutlineMail,
    link: "mailto:bitvprayukti@bitsathy.ac.in",
  },
  {
    Icon: FaInstagram,
    link: "https://www.instagram.com/vprayuktibit/",
  },
];

const glimpseImg = [g1, g3, g5, g7, g2];

const socialLinks = {
  instagram: "https://www.instagram.com/vprayuktibit/",
  email: "mailto:bitvprayukti@bitsathy.ac.in",
  phoneNo: "https://wa.me/6381137437",
};

const events = [
  {
    id: 1,
    name: "Paper Presentation",
    image_url:
      "https://vprayukti.kayteegee.in/public/storage/events/images/01JEJH423P370AZFXEVYS1X2RM.jpg",
    type: "Technical",
  },
  {
    id: 2,
    name: "Product Expo",
    image_url:
      "https://vprayukti.kayteegee.in/public/storage/events/images/01JEJH7W1DNCFNATTAWWXQM212.jpeg",
    type: "Technical",
  },
  {
    id: 3,
    name: "Line Follower",
    image_url:
      "https://vprayukti.kayteegee.in/public/storage/events/images/01JEJH9F2W99A6X441M8M3D9SP.jpeg",
    type: "Technical",
  },
];

export { glimpseImg, socialLinks, events };
