import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { HiCamera } from "react-icons/hi2";
import {
  aimlHackathon,
  captureFlag,
  connexions,
  g1,
  g2,
  g3,
  g4,
  g5,
  g6,
  g7,
  iotHackathon,
  lineFollower,
  masterMind,
  mazeSolver,
  paperPresentation,
  productExpo,
  roboSoccer,
  seriesQuiz,
  themePhotography,
  voucher,
  workshop,
} from "../assets/index";

export const linksData = [
  {
    Icon: HiOutlineMail,
    link: "mailto:bitvprayukti@bitsathy.ac.in",
  },
  {
    Icon: HiCamera,
    link: "https://www.instagram.com/vprayuktibit/",
  }
];

const glimpseImg = [
  g1,
  g2,
  g3,
  g4,
  g5,
  g6,
  g7,
];

const socialLinks = {
  instagram: "https://www.instagram.com/vprayuktibit/",
  email: "mailto:bitvprayukti@bitsathy.ac.in",
  phoneNo: "https://wa.me/6381137437",
  voucher: voucher,
};

const events = [
  {
    title: "paper-presentation",
    img: paperPresentation,
    type: "technical",
    teamSize: "1-4",
    deadline: "31st January 2025",
    fee: "Rs. 499/-",
    description:
      "Step into the Spotlight at 'Paper Presentation'! Share your innovative research, foster meaningful discussions, and showcase your scholarly expertise. A great paper ignites curiosity and sparks change. This is your platform to make an impactful contribution to the world of academia.",
  },
  {
    title: "product-expo",
    img: productExpo,
    type: "technical",
    teamSize: "1-4",
    deadline: "27th January 2025",
    fee: "Rs. 599/-",
    description:
      "Show off your innovations – Share it with the world. This initiative invites students to display their creative solutions for real-world problems through bold, imaginative, and practical approaches. Leave your mark by demonstrating your vision and ingenuity.",
  },
  {
    title: "workshop",
    img: workshop,
    type: "technical",
    teamSize: "1",
    deadline: "27th January 2025",
    fee: "Rs. 199/-",
    description:
      "Get ready to dive into the world of creativity, technology, and innovation with our diverse range of workshops! Whether you're looking to master 3D design in Blender, learn video editing with DaVinci Resolve, or build your own custom blockchain, we have something for everyone. Explore cutting-edge tools like Unity, SolidWorks, and Figma, or unlock your entrepreneurial spirit with personal branding and no-code portfolio building. From podcasting and blogging to productivity hacks and virtual reality tours, you'll gain hands-on experience with industry-leading software and techniques. Join us for a journey of learning, networking, and endless possibilities! Let’s create, innovate, and elevate together!",
  },
  {
    title: "capture-the-flag",
    img: captureFlag,
    type: "technical",
    teamSize: "2-3",
    deadline: "27th January 2025",
    fee: "Rs. 499/-",
    description:
      "Unleash your inner cyber detective and embark on a journey through the fascinating realms of ethical hacking, digital forensics, cryptography, and system exploitation.Whether you're a seasoned hacker sharpening your expertise or a curious beginner exploring the thrilling universe of cybersecurity, this CTF promises to test your problem-solving abilities and strategic thinking like never before. Get ready to tackle adrenaline-pumping challenges, decode mysteries, and conquer the digital battlefield in an electrifying competitive environment.",
  },
  {
    title: "line-follower",
    img: lineFollower,
    type: "technical",
    teamSize: "1-5",
    deadline: "27th January 2025",
    fee: "Rs. 549/-",
    description:
      "Celebrating robotics innovation, the Fastest Line Follower Competition challenges engineers to create autonomous robots that skillfully navigate complex tracks. This high-stakes event pushes technological boundaries, showcasing precision engineering and collaborative problem-solving among robotics enthusiasts who race against time to demonstrate cutting-edge autonomous technology.",
  },
  {
    title: "iot-hackathon",
    img: iotHackathon,
    type: "hackathon",
    teamSize: "2-4",
    deadline: "27th January 2025",
    fee: "Rs. 799/-",
    description:
      "Immerse yourself in the transformative world of the Internet of Things (IoT) at this dynamic hackathon event. Collaborate with like-minded innovators to develop cutting-edge IoT solutions that address real-world challenges. Unleash your creativity, harness the power of connected devices, and push the boundaries of technology in an environment designed to inspire and innovate.",
  },
  {
    title: "aiml-hackathon",
    img: aimlHackathon,
    type: "hackathon",
    teamSize: "2-4",
    deadline: "27th January 2025",
    fee: "Rs. 799/-",
    description:
      "Transform your visions into reality, join us in the AIML arena, where creativity sparks innovation and intelligent solutions come to life!. Whether you're cooking up a masterpiece of digital art, crafting poetic masterpieces, engineering the next big thing in creative tech, or turning data into an impactful product that solves real-world challenges, the canvas is wide open. Let's showcase what's possible when passion meets technology at this Hackathon!",
  },
  {
    title: "maze-solver",
    img: mazeSolver,
    type: "technical",
    teamSize: "1-5",
    deadline: "27th January 2025",
    fee: "Rs. 549/-",
    description:
      "The Maze Solver Competition challenges robotics enthusiasts to design autonomous robots that navigate complex mazes with speed and precision. Participants showcase advanced pathfinding algorithms and real-time decision-making skills. This event demonstrates the potential of robotics in solving intricate navigation problems, offering a thrilling platform for innovation.",
  },
  {
    title: "robo-soccer",
    img: roboSoccer,
    type: "technical",
    teamSize: "1-5",
    deadline: "27th January 2025",
    fee: "Rs. 549/-",
    description:
      "Unleash your creativity on the field – Shape the future of Robo Soccer! This initiative challenges students to design, build, and program robotic players to excel in teamwork, strategy, and skill. Show the world your innovation in action and leave your mark in the thrilling arena of robotic sports!",
  },
  {
    title: "theme-photography",
    img: themePhotography,
    type: "non-technical",
    teamSize: "1",
    deadline: "27th January 2025",
    fee: "Rs. 99/-",
    description:
      "Event Theme Photography celebrates the art of visual storytelling through meticulously crafted images. This competition invites photographers to explore and interpret diverse themes, transforming abstract concepts into compelling visual narratives. Join us in celebrating the transformative power of photographic art.",
  },
  {
    title: "connexions",
    img: connexions,
    type: "non-technical",
    teamSize: "1-2",
    deadline: "27th January 2025",
    fee: "Rs. 149/-",
    description:
      "Dive into the fun-filled world of Connexions, a non-technical event that sparks your creativity and quick thinking! This game challenges participants to showcase their pop culture by making clever connections between movies, songs, logos and iconic moments. Gear up for a playful yet brain-tickling journey through the cinematic universe.",
  },
  {
    title: "series-quiz",
    img: seriesQuiz,
    type: "non-technical",
    teamSize: "1-2",
    deadline: "27th January 2025",
    fee: "Rs. 149/-",
    description:
      "On this rushing journey of life, take a moment to relax and unwind. Spend some pressure-free, happy hours in this fun-filled, non-technical event, Series Quiz. Step into the cinematic universe with Series Quiz, a thrilling competition that tests your knowledge of movie series, iconic characters, and unforgettable dialogues. This exciting event challenges participants to showcase their fandom and outsmart the competition across three fun-packed rounds. Dive into the world of movies and let your passion for cinema shine!",
  },
  {
    title: "master-mind",
    img: masterMind,
    type: "non-technical",
    teamSize: "1-3",
    deadline: "27th January 2025",
    fee: "Rs. 99/- per person",
    description:
      "Get ready to ignite your intellect and instincts in Master Mind! This thrilling event is packed with brain-teasing challenges that test your wit, perception, and problem-solving skills. From cracking puzzles to uncovering hidden clues, every moment will keep you engaged and on your toes. Dive into the excitement, outsmart the competition, and prove you’ve got what it takes to be the ultimate Master Mind!",
  },
];

export { glimpseImg, socialLinks, events };
