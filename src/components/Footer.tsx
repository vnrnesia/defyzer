"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black mt-24 rounded-xl text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* --- Sol Kısım --- */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">Defyzer</h3>
            <p className="text-gray-400">
              We build delightful digital experiences using cutting-edge
              technology and creative design.
            </p>
          </div>

          {/* --- Orta Kısım: Linkler --- */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="hover:text-gray-300 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-gray-300 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gray-300 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* --- Sağ Kısım: Sosyal Medya --- */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-2xl"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-2xl"
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="text-2xl"
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </div>
        </div>

        {/* --- Alt Satır --- */}
        <div className="mt-8 border-t border-gray-800 pt-8 flex justify-between items-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Defyzer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
