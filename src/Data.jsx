import { FiPenTool } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { BsBarChartLine } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";
import { MdChatBubble } from "react-icons/md";

import courses1 from "./assets/courses1.jpg";
import courses2 from "./assets/courses2.jpg";
import courses3 from "./assets/courses3.jpg";
import courses4 from "./assets/courses4.jpg";
import courses5 from "./assets/courses5.jpg";
import courses6 from "./assets/courses6.jpg";
import courses7 from "./assets/courses7.jpg";
import courses8 from "./assets/courses8.jpg";

import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";
import logo5 from "./assets/logo5.png";
import logo6 from "./assets/logo6.png";

export const navLinks = [
  {
    id: 1,
    href: "home",
    link: "Beranda",
  },
  {
    id: 2,
    href: "about",
    link: "Tentang",
  },
  {
    id: 3,
    href: "courses",
    link: "Courses",
  },
  {
    id: 4,
    href: "teacher",
    link: "Tutor",
  },
  {
    id: 5,
    href: "contact",
    link: "Kontak",
  },
];

export const categories = [
  {
    id: 1,
    icon: <FiPenTool />,
    category: "Kepedulian",
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    category: "Inovasi",
  },
  {
    id: 3,
    icon: <BsBarChartLine />,
    category: "Integritas",
  },
  {
    id: 4,
    icon: <MdOutlineScience />,
    category: "Pendidikan",
  },
  {
    id:5,
    icon: <MdChatBubble/>,
    category: "Keterbukaan"
  }
];

export const courses = [
  {
    id: 1,
    image: courses1,
    category: "SAINTEK",
    title: "Paket Course SBMPTN Saintek",
    rating: 4.9,
    participants: 500,
    price: 100000,
  },
  {
    id: 2,
    image: courses2,
    category: "SOSHUM",
    title: "Paket Course SBMPTN Soshum",
    rating: 4.8,
    participants: 700,
    price: 90000,
  },
  {
    id: 3,
    image: courses3,
    category: "SAINTEK",
    title: "FISIKA DASAR",
    rating: 4.9,
    participants: 300,
    price: 50000,
  },
  {
    id: 4,
    image: courses4,
    category: "SAINTEK",
    title: "BIOLOGI DAN KIMIA",
    rating: 4.7,
    participants: 600,
    price: 65000,
  },
  {
    id: 5,
    image: courses5,
    category: "SOSHUM",
    title: "HUKUM EKONOMI",
    rating: 4.9,
    participants: 500,
    price: 45000,
  },
  {
    id: 6,
    image: courses6,
    category: "SAINTEK",
    title: "MATEMATIKA ALJABAR",
    rating: 4.9,
    participants: 500,
    price: 50000,
  },
  {
    id: 7,
    image: courses7,
    category: "SOSHUM",
    title: "BAHASA INGGRIS",
    rating: 4.9,
    participants: 500,
    price: 45000,
  },
  {
    id: 8,
    image: courses8,
    category: "SBMPTN",
    title: "TES PSIKOTES",
    rating: 4.9,
    participants: 500,
    price: 35000,
  },
];

export const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

export const accordions = [
  {
    id: 1,
    title: "Apa itu IRIS Future Forge?",
  },
  {
    id: 2,
    title: "Apa Misi IRIS Future Forge ?",
  },
  {
    id: 3,
    title: "Apakah saya bisa menjadi tutor untuk IRIS?",
  },
  {
    id: 4,
    title: "Latar Belakang IRIS?",
  },
];
