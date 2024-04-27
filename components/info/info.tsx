import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Info() {
  return (
    <section className="p-4" id="info">
      <div className="flex items-center justify-center h-screen bg-white dark:bg-black rounded-3xl ring-black/20 dark:ring-white/30 ring-1">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="text-xl md:text-4xl font-semibold text-black dark:text-white mb-6">
            Colab Tools
          </div>
          <div className="md:text-8xl text-5xl font-bold bg-clip-text text-transparent gradient-text-info">
            Tu equipo, <br /> siempre sincronizado.
          </div>
          <div className="mt-5 md:px-24 lg:px-44 px-6">
            <p className="text-xl md:text-3xl text-zinc-500 dark:text-gray-400">
              Potencia la colaboración de tu equipo con nuestra completa suite
              de herramientas integradas. Desde la creación de documentos hasta
              el desarrollo de software, nuestro conjunto de editores de código,
              texto, diagramas y hojas de cálculo te proporciona todo lo que
              necesitas para trabajar en conjunto de manera eficiente y en
              tiempo real.
            </p>
          </div>
          <div className="mt-16">
            <Button asChild variant="me">
              <Link href="#apps">Ver herramientas</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
