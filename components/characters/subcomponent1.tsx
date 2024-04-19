import React from "react";
import Image from "next/image";

export function Subcomponent1() {
  return (
    <section className="p-4">
      <div className="">
        <div className="grid md:grid-cols-6 gap-6">
          <div className="grid-bg-2 col-span-4 p-8 rounded-3xl ">
            <h3 className="text-xl font-medium text-white">Diseño</h3>
            <p className="text-lg pt-6 mr-12 md:mr-40 text-white">
              Gracias al rendimiento y la eficiencia de los chips M2 y M2 Pro de
              Apple, el Mac mini supera a computadores de escritorio mucho más
              grandes, sin modificar su icónico diseño cuadrado de 19,7 cm.
            </p>
            <p className="text-6xl font-bold mt-8 md:p-24 text-white">
              Un gran computador no tiene por qué ser grande.
            </p>
          </div>
          <div className="relative col-span-2 rounded-3xl p-10">
            <Image
              src="/grid-bg.jpg" // reemplaza esto con la ruta a tu imagen
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="rounded-3xl"
            />
            <div className="relative">
              <h3 className="text-2xl font-medium mb-32 text-white">Memoria unificada</h3>
              <span className=" text-3xl text-white">Una memoria prodigiosa.</span>
              <p className="text-zinc-400 dark:text-gray-400 text-3xl">
                La memoria unificada del Mac hace mucho más que la memoria RAM
                tradicional. Esta memoria de baja latencia y gran ancho de banda
                les permite a los chips de Apple transferir datos con más
                eficiencia, para que todo sea más fluido. Con el chip M2 puedes
                configurar tu Mac mini con memoria de 8 GB a 24 GB, y con el M2
                Pro puedes elegir entre 16 GB o 32 GB de memoria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
