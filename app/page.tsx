
import { Hero } from "@/components/hero/hero";
import { Info } from "@/components/info/info";
import { Tools } from "@/components/tools/tools";
import { Characters } from "@/components/characters/characters";
import { Subcomponent1 } from "@/components/characters/subcomponent1";
import  Cursor  from "@/components/ui/cursor";

export default function page() {
  return (
    <main>
      <Cursor />
      <Hero />
      <Info />
      {/* <Tools /> */}
      <Characters />
      <Subcomponent1 />
    </main>
  );
}