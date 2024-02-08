import { useState } from "react";

export function initalStatus() {
  const [paletVisible, setPaletVisible] = useState(false);

  const [color, setColor] = useState("bg-slate-200");

  function handleClick() {
    setPaletVisible(!paletVisible);
  }

  function handleSelect(newColor) {
    setColor(newColor);
    setPaletVisible(!paletVisible);
  }
  const optionsColors = [
    "bg-slate-200",
    "bg-[#FECACA]",
    "bg-[#FED7AA]",
    "bg-[#FEF08A]",
    "bg-[#D9F99D]",
    "bg-[#BFDBFE]",
    "bg-[#FBCFE8]",
    "bg-[#DDD6FE]",
  ];

  return { optionsColors, color, handleClick, handleSelect, paletVisible };
}
