import { Hero } from "@/components/hero/hero";
import { Info } from "@/components/info/info";
import { Tools } from "@/components/tools/tools";
import { Characters } from "@/components/characters/characters";
import { Subcomponent1 } from "@/components/characters/subcomponent1";

export default function Home() {
  return (
    <main>
      <Hero />
      <Info />
      <Tools />
      <Subcomponent1 />
      <Characters />
    </main>
  );
}
