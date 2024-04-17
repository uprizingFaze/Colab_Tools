"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";

export function Cards() {
  const tabs = [
    {
      title: "Editor de codigo",
      value: "Editor de codigo",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-black ring-white/30 ring-1 ">
          <p>Editor de codigo</p>
          <CodeImg />
        </div>
      ),
    },
    {
      title: "Editor de Texto",
      value: "Editor de Texto",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-black ring-white/30 ring-1">
          <p>Editor de Texto</p>
          <TextImg />
        </div>
      ),
    },
    {
      title: "Editor de diagramas",
      value: "Editor de diagramas",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-black ring-white/30 ring-1">
          <p>Editor de diagramas</p>
          <DiagramImg />
        </div>
      ),
    },
    {
      title: "Hoja de calculo",
      value: "Hoja de calculo",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-black ring-white/30 ring-1">
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
      src="/preview_1.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};


const TextImg = () => {
  return (
    <Image
      src="/preview_2.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const DiagramImg = () => {
    return (
      <Image
        src="/preview_3.webp"
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    );
  };

  const HojaImg = () => {
    return (
      <Image
        src="/preview_4.webp"
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    );
  };