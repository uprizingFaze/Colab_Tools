import React from "react";
import { Button } from "@/components/ui/button";
import { Cards } from "@/components/hero/cards";
import Link from "next/link";

export function Hero() {
  return (
    <section className="pt-44 mx-5">
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center ">
          <button className="bg-slate-300 dark:bg-black no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <Link href="https://github.com/uprizingFaze">
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-white dark:bg-black py-0.5 px-4 ring-1 ring-black/20 dark:ring-white/30 ">
                <span className="text-black dark:text-white">
                  by uprizingFaze
                </span>
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
            </Link>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
          <div className="text-center mt-10">
            <div className="md:text-8xl text-5xl font-bold gradient-text">
              Colabora. Sin límites. Sin demoras.
            </div>
            <p className="text-xl md:text-3xl text-zinc-500 dark:text-gray-400 mt-8">
              Edita, codifica, colabora y crea juntos en tiempo real
              <br />
              con nuestra plataforma integral
            </p>
          </div>
        </div>
        <Cards />
        <div className="p-10"></div>
      </div>
    </section>
  );
}
