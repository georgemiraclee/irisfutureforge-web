import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="section" id="contact">
      <div className="text-center max-w-[600px] mx-auto">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Kontak Kami
        </div>
        <p className="text-sm leading-7 text-gray">
          Jika ada pertanyaan yang ingin anda lontarkan atau anda ingin selalu update Tentang
          IRIS FUTURE FORGE, kami dengan sangat senang hati untuk mengabarkan kepada anda
        </p>
        <motion.form
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-5"
        >
          <input
            type="text"
            placeholder="Masukan Email Anda"
            className="sm:p-3 p-2 outline-none text-sm shadow-md sm:w-72 w-60"
          />
          <button className="text-sm text-white bg-purple-700 sm:p-3 p-2 shadow-md font-bold">
            Subscribe
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
