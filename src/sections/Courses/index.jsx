import React from "react";
import { CategoryItem, CourseItem } from "../../components";
import { courses, categories } from "../../Data";
import { motion } from "framer-motion";

const Courses = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div className="section" id="courses">
      <div className="text-center">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Nilai Perusahaan <span className="text-purple-700">IRIS Future Forge</span>
        </div>
        <p className="text-sm text-gray leading-7 msx-w-[700px] mx-auto">
          IRIS Future Forge lahir dari tekad untuk mengubah wajah pendidikan dengan menyediakan solusi inovatif melalui platform bimbingan belajar online, AsahOtak. Didirikan dengan keyakinan bahwa setiap individu berhak mendapatkan akses pendidikan yang berkualitas
        </p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-5 sm:grid-cols-2 mt-12 gap-8"
      >
        {categories.map((category) => {
          return <CategoryItem key={category.id} {...category} />;
        })}
      </motion.div>
      <div className="text-xl font-bold mt-32">MATERI TRY OUT 2024</div>
      <div className="mt-12 overflow-x-hidden w-full relative">
        <div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide">
          {courses.map((course) => {
            return <CourseItem key={course.id} {...course} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
