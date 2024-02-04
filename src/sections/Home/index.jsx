import React from "react";
import hero from "../../assets/hero.png";
import { logos } from "../../Data";
import { motion } from "framer-motion";

const Home = () => {
  const container = {
    hidden: {
      opacicty: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacicty: 0 },
    visible: { y: 0, opacicty: 1 },
  };
  return (
    <div className="section" id="home">
      <div className="md:flex items-center justify-center">
        <div>
          <div className="font-bold text-s text-amber-500 mb-4">
            Beyond Powerfull
          </div>

          <div className="sm:text-[3.0rem] text:-[1.825rem] font-extrabold">
            IRIS <br /> FUTURE<br /> FORGE
          </div>
          <p className="text-sm leading-7 text-gray max-w-sm">
          Perusahaan inovatif di bidang pendidikan melalui platform bimbingan belajar online, AsahOtak. Dengan fokus pada persiapan ujian UTBK-SNBT, tak hanya memberikan layanan pendidikan berkualitas, tetapi juga aktif dalam proyek-proyek sosial.
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 font-bold text-white bg-purple-700 hover:bg-purple-900 rounded-lg mr-4 text-sm">
              Tentang Kami
            </button>
            <button className="px-6 py-3 font-bold border border-solid hover:text-Teal border-gray rounded-lg text-sm">
              Selanjutnya
            </button>
          </div>
        </div>
        <div className="md:w-[30%]">
          <img src={hero} alt="Hero Image" />
        </div>
      </div>
      <div>
        <p className="text-center text-xl">
          Kami menghasilkan lulusan siswa yang mendapatkan{" "}
          <span>Perguruan Negri Indonesia</span>
        </p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center flex-wrap gap-8 p-2"
        >
          {logos.map((logo, index) => (
            <motion.div variants={item} className="w-28" key={index}>
              <img src={logo} alt=".." className="w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
