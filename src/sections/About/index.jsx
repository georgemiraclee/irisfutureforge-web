import React from "react";
import about from "../../assets/About.jpg";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-Teal rounded-lg">
          <img src={about} alt="About" />
        </div>
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5 text-amber-700">
            Visi dari <span>IRIS FUTURE</span>
          </div>
          <p className="text-sm text-gray leading-7 mb-4">
          Menjadi pionir dalam transformasi pendidikan dengan membuka pintu akses
           menuju perguruan tinggi untuk setiap individu, menciptakan generasi yang siap menghadapi
            tantangan global.
          </p>
          <button className="py-3 px-6 font-bold text-white bg-purple-700 hover:bg-purple-900 rounded-lg mr-4 text-sm">
            Lebih Dekat
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
