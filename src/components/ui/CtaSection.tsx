import React from "react";
import PopoverForm from "./PopoverForm";

export default function HelpCTA() {
  const avatars = [
    "https://i.pravatar.cc/100?img=11",
    "https://i.pravatar.cc/100?img=22",
    "https://i.pravatar.cc/100?img=33",
    "https://i.pravatar.cc/100?img=44",
  ];

  return (
    <div className="w-full flex items-center justify-center p-6">
      <div className="w-full max-w-6xl">
        {/* 'isolate' önemli, içeriğin bg üzerinde kalmasını sağlar */}
        <div className="relative isolate overflow-hidden rounded-3xl shadow-2xl">
          
          {/* --- DÜZELTME BURADA --- */}
          <div
            className="absolute inset-0 bg-cover bg-center w-full h-full -z-10"
            style={{ backgroundImage: "url(/backgrounds/cards_bg2.webp)" }}
          />
          {/* ----------------------- */}

          <div className="grid grid-cols-1 md:grid-cols-2 items-center relative"> 
            {/* Sol içerik */}
            <div className="px-8 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-20 sm:px-10 md:px-16 lg:px-14 text-center">
              <h2 className="max-w-xl font-semibold tracking-tight text-white text-3xl sm:text-4xl md:text-3xl">
                Let's connect, we're ready!
              </h2>{" "}
              <div className="mx-auto  pt-4 flex justify-center items-center">
                <div className="flex -space-x-3">
                  {avatars.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="h-10 w-10 rounded-full ring-1 ring-white object-cover grayscale"
                    />
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <PopoverForm />
              </div>
            </div>

            {/* Sağ görsel */}
            <div className="hidden md:flex items-center justify-center ">
              <div className=" overflow-hidden shadow-lg ">
                <img
                  src="mockuptcta.png"
                  alt="Support illustration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}