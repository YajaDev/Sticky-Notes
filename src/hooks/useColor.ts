import { useState } from "react";
import type { NoteColor, NoteColorTheme } from "../types/note";

const Colors: NoteColorTheme[] = [
  { name: "null", text: "null", bg: "null", border: "null" },
  {
    name: "yellow",
    text: "text-yellow-200",
    bg: "bg-yellow-200",
    border: "border-yellow-300",
  },
  {
    name: "pink",
    text: "text-pink-200",
    bg: "bg-pink-200",
    border: "border-pink-300",
  },
  {
    name: "blue",
    text: "text-blue-200",
    bg: "bg-blue-200",
    border: "border-blue-300",
  },
  {
    name: "green",
    text: "text-green-200",
    bg: "bg-green-200",
    border: "border-green-300",
  },
  {
    name: "purple",
    text: "text-purple-200",
    bg: "bg-purple-200",
    border: "border-purple-300",
  },
];

// Utils that search a theme (NoteColorTheme)
const findtheme = (color: NoteColor) => {
  return Colors.find((c) => c.name === color) || Colors[0];
};

const useColor = (color: NoteColor) => {
  const [theme, setTheme] = useState<NoteColorTheme>(() => findtheme(color));

  // Change the theme
  function changeTheme(color: NoteColor) {
    setTheme(findtheme(color));
  }

  return { theme, changeTheme };
};

export default useColor;
