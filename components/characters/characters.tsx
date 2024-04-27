import React from "react";
import Image from "next/image";

export function Characters() {
  return (
    <section className="p-4" id="apps">
      <div className="grid-bg-1 rounded-3xl grid md:grid-cols-2 gap-4 pt-6 md:pt-0">
        <div>
          <h3 className="pl-4 md:pl-12 py-3 md:py-9 text-xl text-white">
            Editor de Código
          </h3>
          <h2 className="pl-4 md:pl-12 py-3 md:py-8 text-5xl font-bold text-white">
            Live coding en equipo.
          </h2>
          <p className="pl-4 md:pl-12 pr-8 md:pr-32 text-lg mt-10 md:my-8  text-white">
            Con nuestro editor de código integrado, tu equipo puede colaborar en
            el desarrollo de proyectos de software de manera eficiente y en
            tiempo real. Desde la corrección de errores hasta la creación de
            nuevas funciones, simplificamos el proceso de codificación para que
            tu equipo pueda alcanzar sus objetivos más rápido que nunca. Con
            características avanzadas como resaltado de sintaxis, sugerencias de
            código y control de versiones, nuestra herramienta proporciona un
            entorno de desarrollo robusto y seguro para todo tipo de proyectos.
            Únete a nosotros y lleva tu desarrollo al siguiente nivel.
          </p>
        </div>
        <div className="relative overflow-hidden flex items-center">
          <div className="py-8 justify-self-end px-4 ">
            <Image
              src="/code_1.png"
              alt="code"
              width={1000}
              height={1000}
              objectFit="cover"
              className="rounded-3xl max-w-7xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
