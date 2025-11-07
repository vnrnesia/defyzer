import React from "react";
import PopoverForm from "./PopoverForm";

/**
 * HelpCTA
 * A polished CTA panel inspired by the provided mock.
 * - Dark page background
 * - Soft light gradient card with rounded corners
 * - Overlapped avatar group
 * - Punchy headline
 * - Primary button with arrow
 *
 * TailwindCSS required.
 */
export default function HelpCTA() {
  const avatars = [
    "https://i.pravatar.cc/100?img=11",
    "https://i.pravatar.cc/100?img=22",
    "https://i.pravatar.cc/100?img=33",
    "https://i.pravatar.cc/100?img=44",
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6">
      <div className="w-full max-w-6xl">
        <div className="relative isolate overflow-hidden rounded-3xl shadow-2xl">
         
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-40%,#ffffff_0%,#f7f7f8_30%,#e5e7eb_70%,#d1d5db_100%)]" />

          <div className="px-6 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 sm:px-10 md:px-16 lg:px-24 text-center">
           
            <div className="mx-auto mb-6 flex items-center justify-center">
              <div className="flex -space-x-3">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="h-14 w-14 rounded-full ring-4 ring-white object-cover grayscale"
                  />
                ))}
              </div>
            </div>

            {/* Headline */}
            <h2 className="mx-auto max-w-3xl font-semibold tracking-tight text-neutral-900 text-3xl sm:text-4xl md:text-5xl">
              Need help? We're here for you.
            </h2>

            {/* CTA Button */}
            <div className="mt-10 flex items-center justify-center">
             <PopoverForm/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Notes / Tweaks:
 * - Replace avatar URLs with your team photos or local assets.
 * - Change headline text in the <h2> above.
 * - Wire the button's href to your contact form or Intercom launcher.
 * - Card background uses a radial gradient; adjust stops in class for different looks.
 */
