import { motion } from "framer-motion";
import background from "../assets/img/background/background.jpg";

const AboutPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 1 }}
      className="relative bg-gray-100"
    >
      {/* Hero Section dengan Background */}
      <div 
        className="relative w-full h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 1 }}
            className="text-5xl font-bold"
          >
            Tentang Kami
          </motion.h1>
          <motion.p 
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg mt-2 text-center max-w-2xl"
          >
            Kami adalah perusahaan edukasi yang berkomitmen memberikan pengalaman belajar terbaik dengan inovasi dan teknologi terkini.
          </motion.p>
        </div>
      </div>

      {/* Konten Utama */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ duration: 1, delay: 0.5 }}
        className="p-10 max-w-5xl mx-auto bg-white shadow-lg rounded-lg mt-[-50px] relative z-10"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Siapa Kami</h2>
        <p className="text-gray-600 text-center mb-6">
          Didirikan pada tahun 2010, kami telah berkembang menjadi penyedia layanan edukasi terkemuka di Indonesia, dengan fokus pada pengalaman belajar yang menyenangkan dan interaktif.
        </p>

        {/* Grid Visi & Mengapa Memilih Kami */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ x: -50, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-blue-600">Visi</h3>
            <p className="text-gray-700 mt-2 italic">
              "Menjadi pemimpin dalam inovasi pendidikan dengan solusi pembelajaran yang dapat diakses oleh semua orang."
            </p>
          </motion.div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1, delay: 1 }}
          >
            <h3 className="text-2xl font-bold text-blue-600">Mengapa Memilih Kami</h3>
            <p className="text-gray-700 mt-2">
              Kami menyediakan akses pendidikan berkualitas, memanfaatkan teknologi modern, dan berfokus pada pengembangan potensi siswa.
            </p>
          </motion.div>
        </div>

        {/* Tombol CTA */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-8 flex justify-center"
        >
          <button className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Pelajari Lebih Lanjut
          </button>
        </motion.div>
      </motion.div>

      {/* Spacer untuk memberi jarak dari footer */}
      <div className="h-32"></div>
    </motion.div>
  );
};

export default AboutPage;
