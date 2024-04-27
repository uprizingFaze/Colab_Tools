"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";

export function Cards() {
  const tabs = [
    {
      title: "Código",
      value: "Editor de codigo",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black ring-white/30 ring-1 ">
          <p>Editor de Código</p>
          <CodeImg />
        </div>
      ),
    },
    {
      title: "Texto",
      value: "Editor de Texto",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black ring-white/30 ring-1">
          <p>Editor de Texto</p>
          <TextImg />
        </div>
      ),
    },
    {
      title: "Diagramas",
      value: "Editor de diagramas",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black ring-white/30 ring-1">
          <p>Editor de diagramas</p>
          <DiagramImg />
        </div>
      ),
    },
    {
      title: "Calculo",
      value: "Hoja de calculo",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-black ring-white/30 ring-1">
          <p>Hoja de calculo</p>
          <HojaImg />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-10">
      <Tabs tabs={tabs} />
    </div>
  );
}

const CodeImg = () => {
  return (
    <Image
      src="/code.png"
      alt="Editor de codigo"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};


const TextImg = () => {
  return (
    <Image
      src="/text.png"
      alt="Editor de Texto"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const DiagramImg = () => {
    return (
      <Image
        src="/flowshart.png"
        alt="Editor de diagramas"
        width="1000"
        height="1000"
        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    );
  };

  const HojaImg = () => {
    return (
      <Image
        src="/spreadsheet.png"
        alt="Hoja de calculo"
        width="1000"
        height="1000"
        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    );
  };