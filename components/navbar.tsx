"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem, HoveredButton, } from "@/components/ui/navbar-menu";
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
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Productos">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src=""
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src=""
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src=""
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src=""
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Docs">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
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
