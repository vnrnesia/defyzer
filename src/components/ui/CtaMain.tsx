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
      <div className="w-full max-w-6xl">
        <div className="relative isolate overflow-hidden rounded-3xl shadow-2xl">
          {/* Arka plan */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-40%,#ffffff_0%,#f7f7f8_30%,#e5e7eb_70%,#d1d5db_100%)]" />

          <div className=" items-center">
            {/* Sol içerik */}
            <div className="px-8 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-20 sm:px-10 md:px-16 lg:px-14 text-center">
              <h2 className="max-w-xl font-semibold tracking-tight text-neutral-900 text-3xl sm:text-4xl md:text-3xl">
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
              <div className=" mt-4">
                <PopoverForm />
              </div>
            </div>

            {/* Sağ görsel */}
          </div>
        </div>
      </div>
    </div>
  );
}
