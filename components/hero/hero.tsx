import React from "react";
import  {Button}  from "@/components/ui/button";

function Hero() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center mt-40 ">
        <button className="bg-slate-300 dark:bg-black no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-white dark:bg-black py-0.5 px-4 ring-1 ring-black/20 dark:ring-white/30 ">
            <span className="text-black dark:text-white">Spots Available</span>
            <svg
              className="text-black dark:text-white"
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
        <div className="p-12 text-center">
          <h1>Sitio web para trabajos colaborativos </h1>
          <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl gradient-text">
            Colabora rápido y eficientemente
          </div>
          <p className="text-xl mt-7 text-center ">
            Pon en marcha tus grandes ideas con tus compañeros rapidamente
            <br />
            en esta facil y rapida plataforma
          </p>
          <div>
            <Button size="lg" className="mt-10">Vamos a colaboarar</Button>
          </div>
          <div className="text-xs text-slate-600 dark:text-gray-400 mt-5">excelente rendimiento en tiempo real </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
