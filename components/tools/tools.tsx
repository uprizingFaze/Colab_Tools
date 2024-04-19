import React from "react";
import Image from "next/image";

export function Tools() {
  return (
    <section className="p-4">
      <div className="pt-40 px-10 md:px-40">
        <div className="md:text-8xl text-5xl font-semibold py-4 text-black dark:text-white">
          Código
        </div>
        <div className="md:text-8xl text-5xl font-semibold text-blue-500 py-4">
          Live coding en equipo.
        </div>
        <div className="py-4">
          <p className="text-xl md:text-3xl text-zinc-500 dark:text-gray-400 ">
            Nuestro editor de código te permite codificar con confianza y
            <span className="text-blue-500">
              {" "}
              colaborar sin problemas con tu equipo.{" "}
            </span>{" "}
            Descubre cómo podemos mejorar tu flujo de trabajo hoy mismo.
          </p>
          {/* <div className="py-4">
            <Image
              src="/code_1.png"
              width={900}
              height={900}
              alt="Picture of the author"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}
