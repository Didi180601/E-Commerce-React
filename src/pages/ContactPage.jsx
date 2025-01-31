import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { motion } from "framer-motion";

const schema = yup.object().shape({
  nama: yup.string().required("Nama wajib diisi"),
  email: yup.string().email("Email tidak valid").required("Email wajib diisi"),
  pesan: yup.string().required("Pesan wajib diisi"),
});

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Data yang dikirim:", data);
    alert("Pesan Anda telah berhasil dikirim!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gray-100 flex items-center justify-center mt-20"
    >
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        {/* Judul */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Hubungi Kami
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Jika Anda memiliki pertanyaan atau ingin bekerja sama, jangan ragu
          untuk menghubungi kami melalui formulir di bawah ini.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Formulir Kontak */}
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Nama
                </label>
                <input
                  type="text"
                  {...register("nama")}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    errors.nama ? "border-red-500" : ""
                  }`}
                  placeholder="Masukkan nama Anda"
                />
                {errors.nama && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.nama.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email")}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  placeholder="Masukkan email Anda"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Pesan
                </label>
                <textarea
                  {...register("pesan")}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    errors.pesan ? "border-red-500" : ""
                  }`}
                  rows="4"
                  placeholder="Tulis pesan Anda"
                ></textarea>
                {errors.pesan && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.pesan.message}
                  </p>
                )}
              </div>

              <motion.button
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 1 }}
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Kirim Pesan
              </motion.button>
            </form>
          </div>

          {/* Informasi Kontak */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 5, y: 0 }}
            exit={{ opacity: 0, y: 70 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center space-y-4"
          >
            <div className="flex items-center space-x-3">
              <i className="ri-mail-fill text-2xl text-blue-500"></i>
              <p className="text-gray-700">enquiry@edutech.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <i className="ri-map-pin-line text-2xl text-blue-500"></i>
              <p className="text-gray-700">
                Graha Merah Putih Buah Batu, Jl. Terusan Buah Batu No.33,
                Batununggal, Kota Bandung
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <i className="ri-phone-fill text-2xl text-blue-500"></i>
              <p className="text-gray-700">+62 812-3456-7890</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
