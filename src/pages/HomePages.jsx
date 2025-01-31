import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import hero from "../assets/img/testimonial/hero.jpg";
import kelas1 from "../assets/img/kelas/kelas-1.jpg";
import kelas2 from "../assets/img/kelas/kelas-2.jpg";
import kelas3 from "../assets/img/kelas/kelas-3.jpg";

const CourseCard = ({ image, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 1 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold text-dark dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-secondary">{description}</p>
    </motion.div>
  );
};

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
      className="w-full px-4 sm:w-3/4 md:w-2/3 lg:w-1/2"
    >
      <h1 className="text-base font-semibold text-primary dark:text-dark md:text-xl">
        Welcome to EduTech
        <span className="mt-1 block text-4xl font-bold text-dark dark:text-white lg:text-5xl">
          Learn Anytime, Anywhere
        </span>
      </h1>
      <h2 className="mb-5 text-lg font-medium text-secondary lg:text-2xl">
        Platform Belajar Online Terbaik
      </h2>
      <p className="mb-10 font-medium leading-relaxed text-secondary">
        Tingkatkan keterampilan Anda dengan kursus online berkualitas tinggi
        yang dirancang oleh para ahli industri. Mulai belajar hari ini dan raih
        masa depan yang lebih cerah!
      </p>
    </motion.div>
  );
};

const ImageSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 1 }}
      className="w-full px-4 sm:w-3/4 md:w-2/3 lg:w-1/2 flex justify-center"
    >
      <div className="relative rounded-full w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
        <img
          src={hero}
          alt="hero-img"
          className="relative z-10 mx-auto max-w-full"
        />
      </div>
    </motion.div>
  );
};

const ExploreButton = ({ onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="text-center mt-10"
    >
      <button
        onClick={onClick}
        className="rounded-full bg-primary mb-20 py-3 px-8 text-base font-semibold dark:bg-white text-white dark:text-primary transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
      >
        Explore Courses
      </button>
    </motion.div>
  );
};

const HomePages = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      id="home"
      className="pt-36 dark:bg-primary overflow-auto"
    >
      <div className="container">
        <div className="flex flex-wrap items-center gap-10 lg:flex-nowrap">
          <HeroSection />
          <ImageSection />
        </div>

        <div className="container mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold text-center text-dark dark:text-white mb-6">
            Tentang Platform Kursus Kami
          </h2>
          <p className="text-secondary text-center leading-relaxed max-w-2xl mx-auto">
            Kami menyediakan berbagai kursus online berkualitas tinggi dalam
            bidang teknologi, desain, bisnis, dan lainnya. Mulai belajar
            sekarang untuk mencapai kesuksesan Anda!
          </p>
        </div>

        <div className="container mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold text-center text-dark dark:text-white mb-6">
            Kursus Unggulan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CourseCard
              image={kelas1}
              title="React Fundamentals"
              description="Pelajari dasar-dasar React dan cara membangun aplikasi web modern."
            />
            <CourseCard
              image={kelas2}
              title="UI/UX Design"
              description="Pelajari cara mendesain antarmuka yang menarik dan ramah pengguna."
            />
            <CourseCard
              image={kelas3}
              title="Full-Stack Development"
              description="Kuasai pengembangan full-stack dengan teknologi modern."
            />
          </div>
        </div>
        <ExploreButton onClick={() => navigate("/course")} />
      </div>
    </motion.div>
  );
};

export default HomePages;
