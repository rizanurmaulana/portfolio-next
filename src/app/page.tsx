"use client";

import { Download, Globe, HTML5, Layout, Monitor } from "@deemlol/next-icons";
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

      {/* Services Section */}
      <section className="container mx-auto mt-4 max-w-md sm:max-w-2xl p-4 sm:p-8">
        <motion.h2
          className="text-xl font-semibold text-gray-950 mb-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Things I’ll do for you
        </motion.h2>
        <motion.p
          className="text-sm text-gray-500 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          I help bring your ideas to life with simple, modern, and user-friendly
          websites.
        </motion.p>

        <div className="mt-4 flex flex-col gap-4">
          <motion.div
            className="w-full p-4 border border-gray-100 rounded-xl flex items-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center border border-gray-100 rounded-lg">
              <HTML5 size={20} className="text-gray-950" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-950 mb-2">Web Design</h3>
              <p className="text-sm text-gray-500">
                I craft visually appealing, responsive, and user-friendly
                website interfaces that enhance user experience.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="w-full p-4 border border-gray-100 rounded-xl flex items-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center border border-gray-100 rounded-lg">
              <Globe size={20} className="text-gray-950" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-950 mb-2">
                Web Development
              </h3>
              <p className="text-sm text-gray-500">
                I build websites that are easy to use, visually appealing, and
                help bring your ideas to life online.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="w-full p-4 border border-gray-100 rounded-xl flex items-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center border border-gray-100 rounded-lg">
              <Monitor size={20} className="text-gray-950" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-950 mb-2">UI/UX Design</h3>
              <p className="text-sm text-gray-500">
                I design intuitive user interfaces and engaging user experiences
                that make websites easy and enjoyable to use.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
