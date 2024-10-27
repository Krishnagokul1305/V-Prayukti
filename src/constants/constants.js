import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { HiCamera } from "react-icons/hi2";
import { voucher } from "../assets/index";

const linksData = [
  {
    Icon: HiOutlineMail,
    link: "mailto:bitvprayukti@bitsathy.ac.in",
  },
  {
    Icon: HiCamera,
    link: "https://www.instagram.com/vprayuktibit/",
  },
  {
    Icon: HiOutlinePhone,
    link: "https://wa.me/6381137437",
  },
];

const navItems = [
  { name: "Home", link: "#home" },
  { name: "Events", link: "#events" },
  { name: "Competitions", link: "#competitions" },
  { name: "Workshops", link: "#workshops" },
  { name: "Accommodation", link: "#accommodation" },
  { name: "voucher", link: voucher },
];

const glimpseImg = [
  "https://bitvprayukti.in/static/media/g1.911871089557adcd7799.jpg",
  "https://bitvprayukti.in/static/media/g2.86f6ef1acee37bea2b33.jpg",
  "https://bitvprayukti.in/static/media/g3.12cdb10930b204ae57bc.jpg",
  "https://bitvprayukti.in/static/media/g6.c5b87adbcee50692e146.jpg",
  "https://bitvprayukti.in/static/media/g7.388416e043dadb10f6b8.jpg",
  "https://bitvprayukti.in/static/media/g8.15b308c4a65ac3bc6eb3.jpg",
  "https://bitvprayukti.in/static/media/g9.c5b87adbcee50692e146.jpg",
];

const socialLinks = {
  instagram: "https://www.instagram.com/vprayuktibit/",
  email: "mailto:bitvprayukti@bitsathy.ac.in",
  phoneNo: "https://wa.me/6381137437",
  voucher: voucher,
};

export { navItems, glimpseImg, linksData, socialLinks };
