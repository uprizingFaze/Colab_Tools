"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
  HoveredButton,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import { useTheme } from "next-themes";

export function Navbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <NavbarDemo className="top-2 mt-3" />
    </div>
  );
}

function NavbarDemo({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const { setTheme } = useTheme();
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Landing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#home">Home</HoveredLink>
            <HoveredLink href="#info">About</HoveredLink>
            <HoveredLink href="#apps">Apps</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Productos">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Editor de Código"
              href="https://algochurn.com"
              src="/code_1.png"
              description="Edita y Colabora en Proyectos de Desarrollo de Software en Tiempo Real con Tu Equipo."
            />
            <ProductItem
              title="Editor de Texto"
              href="https://tailwindmasterkit.com"
              src="/code_1.png"
              description="Colabora Simultáneamente en la Creación de Documentos y Contenidos con Nuestro Editor de Texto Integrado."
            />
            <ProductItem
              title="Editor de Diagramas"
              href="https://gomoonbeam.com"
              src="/code_1.png"
              description="Crea y Comparte Diagramas y Flujos de Trabajo con Tu Equipo de Forma Clara y Concisa."
            />
            <ProductItem
              title="Hoja de Cálculo"
              href="https://userogue.com"
              src="/code_1.png"
              description="Realiza Análisis de Datos y Seguimiento de Proyectos en Equipo con Nuestra Hoja de Cálculo Integrada."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Docs">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Documentación</HoveredLink>
            <HoveredLink href="/individual">Repositorio</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Mode">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredButton onClick={() => setTheme("light")}>
              Light
            </HoveredButton>
            <HoveredButton onClick={() => setTheme("dark")}>Dark</HoveredButton>
            <HoveredButton onClick={() => setTheme("system")}>
              System
            </HoveredButton>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
