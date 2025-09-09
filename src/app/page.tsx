"use client";

import { Download } from "@deemlol/next-icons";
import Link from "next/link";
import { motion } from "motion/react";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="container mx-auto mt-16 max-w-md sm:max-w-2xl">
        <motion.div className="p-4 sm:p-8">
          <motion.div
            className="mb-6 flex flex-wrap w-fit items-center gap-2 px-3 py-1 text-xs sm:text-sm font-medium border border-gray-300 rounded-full text-gray-700"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available For Work
          </motion.div>

          <motion.p
            className="mb-4 text-gray-500 font-medium text-sm sm:text-base"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hey there 👋, I am{" "}
            <span className="text-gray-800 font-semibold">
              Riza Nur Maulana
            </span>
          </motion.p>

          <motion.h1
            className="mb-5 text-2xl sm:text-3xl font-semibold text-gray-950 leading-snug"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I build responsive and user-friendly websites that deliver seamless
            digital experiences.
          </motion.h1>

          <motion.p
            className="mb-8 text-gray-700 text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I am a Web Developer passionate about turning designs into
            interactive, responsive, and visually appealing websites.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="#"
              className="bg-gray-950 px-4 sm:px-5 h-10 inline-flex items-center text-white text-sm font-medium rounded-md hover:bg-gray-800 transition w-full sm:w-auto justify-center"
            >
              View My Work
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-5 h-10 inline-flex items-center gap-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition w-full sm:w-auto justify-center"
            >
              <Download size={16} />
              Download CV
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
