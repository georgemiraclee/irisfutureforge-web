import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div initial={{ height: 0 }} whileInView={{ height: "auto" }} transition={{ duration: 1 }} className="bg-purple-700 p-10">
      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white">
        <div>
          <div className="font-bold mb-6">Berita Terkini</div>
          <p className="text-sm leading-7">
            Direktorat Jenderal Kependudukan dan Pencatatan Sipil, penduduk Indonesia berjumlah 275,36 juta jiwa pada Juni 2022. Sayangnya, dari jumlah tersebut hanya 6,41% yang sudah pendidikan perguruan tinggi.
          </p>
        </div>
        <div>
          <div className="font-bold mb-6">Layanan</div>
          <div className="flex flex-col gap-4">
            <a href="" className="text-sm hover:underline">
              Course
            </a>
            <a href="" className="text-sm hover:underline">
              Try Out
            </a>
            <a href="" className="text-sm hover:underline">
              Tutor dan Staff
            </a>
            <a href="" className="text-sm hover:underline">
              SNBT
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Company</div>
          <div className="flex flex-col gap-4">
            <a href="" className="text-sm hover:underline">
              Privacy Policy
            </a>
            <a href="" className="text-sm hover:underline">
              Sitemap
            </a>
            <a href="" className="text-sm hover:underline">
              Careers
            </a>
            <a href="" className="text-sm hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Social Media</div>
          <div className="text-sm mb-4">irisfutureforge@gmail.com</div>
          <div className="text-sm">+6285784753921</div>
          <div className="flex gap-4 mt-4">
            <a href="" className="hover:scale-110 text-xl">
              <BsFacebook />
            </a>
            <a href="" className="hover:scale-110 text-xl">
              <BsInstagram />
            </a>
            <a href="" className="hover:scale-110 text-xl">
              <BsTwitter />
            </a>
            <a href="" className="hover:scale-110 text-xl">
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
