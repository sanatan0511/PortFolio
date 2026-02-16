import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const certificates = [
  {
    title: "Introduction to Hardware and operating Systems-IBM",
    issuer: "Coursera",
    image: "/images/cert-1.png",
    link: "https://www.coursera.org/account/accomplishments/verify/KVPW3PIU2W3P",
  },
  {
    title: "The Bits and Bytes of Computer Networking - Google",
    issuer: "Coursera",
    image: "/images/cert-2.png",
    link: "https://www.coursera.org/account/accomplishments/verify/PI4FWDPTC83K",
  },
  {
    title: "Get-in depth understanding of kafka and zookeeper",
    issuer: "Scaler",
    image: "/images/cert-3.png",
    link: "https://drive.google.com/file/d/175Kbm03DqRZaDtAgEkIlXYoYx9x6RkAc/view",
  },
];

export const Certificates = () => {
  return (
    <section
      id="certificates"
      className="min-h-screen py-20 px-6 bg-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          My Certificates
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-violet-500/40 transition-all duration-300"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {cert.issuer}
                </p>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors"
                >
                  View Certificate <FiExternalLink />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
