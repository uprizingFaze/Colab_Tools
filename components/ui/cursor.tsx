"use client"
import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursorText = document.getElementById("cursor-text");
    document.addEventListener("mousemove", (e) => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        if (cursorText) {
          cursorText.style.display = "block";
          cursorText.style.left = e.pageX + 17 + "px";
          cursorText.style.top = e.pageY + 14 + "px";
        }
      } else {
        if (cursorText) {
          cursorText.style.display = "none";
        }
      }
    });
  }, []);

  return (
    <div
      id="cursor-text"
      style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        pointerEvents: "none",
      }}
      className="text-white rounded-md px-2 bg-blue-600 z-50"
    >
      uprizingFaze
    </div>
  );
}