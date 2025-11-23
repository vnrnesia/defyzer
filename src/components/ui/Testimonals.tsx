"use client";

import { MarqueeDemo } from "./MarqueeDemo";
import { ArrowRight } from "lucide-react";


export default function Testimonials() {
  return (
   <>
      <div className="max-w-xs md:max-w-4xl flex justify-center text-center mx-auto">
        
      </div>
    <div className="bg-white relative flex flex-col md:flex-row w-full justify-center mx-auto items-center  py-16 dark:bg-black">
      {/* Фоновый узор */}
              

      {/* Левая часть */}
      <div className="max-w-xs pb-4 space-y-6">
        <button className="px-4 py-1 rounded-full bg-gray-100 text-gray-700 text-sm dark:bg-gray-800 dark:text-gray-200">
          Отзывы
        </button>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Что говорят наши клиенты <br />
          <span className="bg-rose-950 text-gray-200 px-1">о работе с нами</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Посмотрите, как мы помогли таким же компаниям, как ваша, достичь новых высот.
        </p>

        <button className="flex items-center gap-2 text-rose-900 font-medium">
          Смотреть все <ArrowRight size={20} />
        </button>
      </div>

      {/* Правая часть */}
      <div className="flex-1 max-w-3xl">
        <MarqueeDemo />
      </div>
    </div>
   </>
  );
}
