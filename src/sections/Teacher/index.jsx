import React from "react";
import teacher1 from "../../assets/teacher1.png";
import teacher2 from "../../assets/teacher2.png";
import { accordions } from "../../Data";
import { TeacherItem } from "../../components";

const Teacher = () => {
  return (
    <div className="section" id="teacher">
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
          Platform bimbingan belajar online,<span className="text-blue-800">AsahOtak </span>
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
          IRIS Future Forge lahir dari tekad untuk mengubah wajah pendidikan dengan menyediakan 
          solusi inovatif melalui platform bimbingan belajar online, AsahOtak. Didirikan dengan keyakinan 
          bahwa setiap individu berhak mendapatkan akses pendidikan yang berkualitas
          </p>
          <button className="py-3 px-4 bg-blue-800 hover:bg-blue-900 text-white rounded-lg text-sm font-bold">
            Lebih Kenal
          </button>
        </div>
        <div className="p-4 md:w-3/4 sm:row-start-1">
          <img src={teacher1} alt="Teacher Img" />
        </div>
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Bergabung menjadi <span className="text-purple-700">Staff Tutor</span> <br /> Platform Kami
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
          Pendidikan berkualitas menjadi salah satu poin penting dalam Sustainable Development Goals (SDGs) 2030. Nahh buat kamu para Gen Z, bisaa banget loh mulai berkontribusi terhadap pendidikan di Indonesia.
           Ayo gabung sebagai Tutor bimbel online AsahOtak by IRIS Future Forge!!!
          </p>
          <button className="py-3 px-4 bg-purple-700 hover:bg-purple-800 text-white rounded-lg text-sm font-bold">
            Daftar
          </button>
        </div>
        <div className="p-4 md:w-3/4">
          <img src={teacher2} alt="Teacher Imagw" />
        </div>
      </div>
      <div className="text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]">
        Frequently <span className="text-purple-700">Ada Pertanyaan?</span>
      </div>
      <div className="mt-12 max-w-[700px] mx-auto">
        {accordions.map((accordion) => {
          return <TeacherItem key={accordion.id} {...accordion} />;
        })}
      </div>
    </div>
  );
};

export default Teacher;
