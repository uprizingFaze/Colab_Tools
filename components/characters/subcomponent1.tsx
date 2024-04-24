import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export function Subcomponent1() {
  return (
    <section className="p-4">
      <div className="">
        <div className="grid md:grid-cols-6 gap-6">
          <div className="grid-bg-2 col-span-4 p-8 rounded-3xl ">
            <h3 className="text-xl font-medium text-white">Editor de texto</h3>
            <p className="text-lg pt-6 mr-12 md:mr-40 text-white">
              Nuestro editor de texto te permite trabajar en conjunto con tu
              equipo en la creación de documentos, informes y más. Con
              características avanzadas como edición en tiempo real, control de
              versiones y resaltado de sintaxis, simplificamos el proceso de
              redacción colaborativa, asegurando que todos estén en la misma
              página y puedan contribuir de manera efectiva.
            </p>
            <p className=" text-4xl md:text-6xl font-bold mt-8 md:pt-24 md:px-24  text-white">
              Redacción colaborativa, sin complicaciones.
            </p>
            <div className="md:px-24 mt-8">
              <Link
                href="https://one-simulation.vercel.app/"
                className="underline text-xl font-bold text-blue-600 hover:text-blue-700 inline-flex items-center"
              >
                Vamos! <FaExternalLinkAlt className="ml-2" />
              </Link>
            </div>
          </div>
          <div className="relative col-span-4 md:col-span-2 rounded-3xl p-10">
            <Image
              src="/grid-bg.jpg" // reemplaza esto con la ruta a tu imagen
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="rounded-3xl  dark:filter dark:grayscale"
            />
            <div className="relative">
              <h3 className="text-2xl font-medium mb-32 text-white">
                Editor de Diagramas
              </h3>
              <span className=" text-3xl text-white">
                Visualización en tiempo real.
              </span>
              <p className="text-zinc-400 dark:text-gray-400 text-3xl">
                Nuestro editor de diagramas te permite colaborar en la
                visualización de ideas y procesos de manera clara y concisa.
                Desde organigramas hasta diagramas de flujo, facilitamos la
                comunicación y la colaboración entre tu equipo, asegurando que
                todos estén alineados en la misma dirección y puedan contribuir
                de manera efectiva a la creación de diagramas profesionales y
                precisos.
              </p>
              <Link
                href="https://one-simulation.vercel.app/"
                className="underline text-2xl font-bold text-blue-500 hover:text-blue-700 inline-flex items-center py-4"
              >
                Vamos! <FaExternalLinkAlt className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
