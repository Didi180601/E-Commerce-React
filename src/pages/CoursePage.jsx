import kelas1 from "../assets/img/kelas/kelas-1.jpg";
import kelas2 from "../assets/img/kelas/kelas-2.jpg";
import kelas3 from "../assets/img/kelas/kelas-3.jpg";
import kelas4 from "../assets/img/kelas/kelas-4.jpg";
import kelas5 from "../assets/img/kelas/kelas-5.jpg";
import kelas6 from "../assets/img/kelas/kelas-6.jpg";

import { motion } from "framer-motion";

const CoursePage = () => {
  const courses = [
    {
      id: 1,
      name: "React for Beginners",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
      price: "Rp.5.000.000",
      image: kelas1,
    },
    {
      id: 2,
      name: "Advanced JavaScript",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
      price: "RP.1.500.000",
      image: kelas2,
    },
    {
      id: 3,
      name: "Web Development Bootcamp",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
      price: "Rp.500.000",
      image: kelas3,
    },
    {
      id: 4,
      name: "Python for Data Science",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
      price: "Rp.2.500.000",
      image: kelas4,
    },
    {
      id: 5,
      name: "UI/UX Design Essentials",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
      price: "Rp.750.000",
      image: kelas5,
    },
    {
      id: 6,
      name: "Machine Learning Basics",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
      price: "Rp.890.000",
      image: kelas6,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 10 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 2 }}
      className="container mx-auto px-4 py-12 mt-20"
    >
      <h1 className="mb-8 text-center text-3xl font-bold">Our Courses</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.id}
            className="rounded-lg border shadow-md overflow-hidden"
          >
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{course.name}</h2>
              <p className="mt-2 text-gray-600">{course.description}</p>
              <p className="mt-2 font-bold text-primary">{course.price}</p>
              <motion.button
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 1 }}
                className="mt-4 w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700"
              >
                Enroll Now
              </motion.button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CoursePage;
