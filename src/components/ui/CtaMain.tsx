import React from "react";
import PopoverForm from "./PopoverForm";

export default function CtaMain() {
  const avatars = [
    "https://i.pravatar.cc/100?img=11",
    "https://i.pravatar.cc/100?img=22",
    "https://i.pravatar.cc/100?img=33",
    "https://i.pravatar.cc/100?img=44",
  ];

  return (
    <div className="w-full max-w-md flex items-center justify-center p-">
      <div className="w-full  max-w-6xl">
        <div className="relative isolate overflow-hidden rounded-3xl shadow-2xl">
          {/* Arka plan */}
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center"
            style={{ backgroundImage: "url(/backgrounds/bg_cta.webp)" }}
          />
          <div className="flex items-center mt-4 ml-4">
            <h3 className="text-base px-4 py-2 rounded-full bg-white inline-flex items-center gap-2 ">
              {/* Pulse efekti */}
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3  bg-green-500"></span>
              </span>
              Start today
            </h3>
          </div>

          <div className=" items-center">
            {/* Sol içerik */}
            <div className="px-8 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-20 sm:px-10 md:px-16 lg:px-14 text-center">
              <h2 className="max-w-xl font-semibold tracking-tight text-neutral-50 text-3xl sm:text-4xl md:text-3xl pt-16">
                Let's connect, we're ready!
              </h2>{" "}
              <div className="mx-auto  pt-2 flex justify-center items-center">
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
              <div className=" mt-10 pb-10">
                <PopoverForm buttonSize="small" />
              </div>
            </div>

            {/* Sağ görsel */}
          </div>
        </div>
      </div>
    </div>
  );
}


