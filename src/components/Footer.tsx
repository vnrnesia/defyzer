"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-300">
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        {/* CTA Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-16 border-b border-gray-800">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              Do you like what you see?
            </h2>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-lime-300"
              >
                Start a project
                <span className="text-lg">↗</span>
              </Link>
              <p className="text-sm text-gray-400">
                <span className="text-white font-medium">5.0</span> from 69 reviews
              </p>
            </div>
          </div>

       
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12">
          {/* Left Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Learn</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-lime-400">About</Link></li>
              <li><Link href="/culture" className="hover:text-lime-400">Culture</Link></li>
              <li><Link href="/testimonials" className="hover:text-lime-400">Testimonials</Link></li>
              <li><Link href="/process" className="hover:text-lime-400">Processes</Link></li>
              <li><Link href="/faqs" className="hover:text-lime-400">FAQs</Link></li>
              <li><Link href="/blog" className="hover:text-lime-400">Blog</Link></li>
            </ul>
          </div>

          {/* Middle Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-lime-400">Home</Link></li>
              <li className="flex items-center gap-2">
                <Link href="/work" className="hover:text-lime-400">Work</Link>
                <span className="text-[10px] bg-lime-400 text-black px-2 py-0.5 rounded-full font-semibold">NEW</span>
              </li>
              <li><Link href="/services" className="hover:text-lime-400">Services</Link></li>
              <li><Link href="/careers" className="hover:text-lime-400">Careers</Link></li>
              <li><Link href="/sectors" className="hover:text-lime-400">Sectors</Link></li>
              <li><Link href="/contact" className="hover:text-lime-400">Contact</Link></li>
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in touch</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-lime-400" />
                <span>01942 894 596</span>
              </li>
             
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-lime-400 mt-0.5" />
                <span>
                
                  1 Gibfield Park Avenue<br />
                  Atherton Manchester<br />
                  M46 0SU
                </span>
              </li>
              <li className="text-gray-400 text-xs">
                ///topped.little.pirate
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>
            <span className="text-white font-medium">Shape.</span> © MadeByShape Ltd 2025 | Company Reg Number 10529058
          </p>
          <p className="mt-2 md:mt-0">
            <Link href="/privacy" className="hover:text-lime-400">
            
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
