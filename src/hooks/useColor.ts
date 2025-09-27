import { useState } from "react";
import type { NoteColor, NoteColorTheme } from "../types/note";

const Colors: NoteColorTheme[] = [
  { name: "yellow", bg: "bg-yellow-200", border: "border-yellow-300" },
  { name: "pink", bg: "bg-pink-200", border: "border-pink-300" },
  { name: "blue", bg: "bg-blue-200", border: "border-blue-300" },
  { name: "green", bg: "bg-green-200", border: "border-green-300" },
  { name: "purple", bg: "bg-purple-200", border: "border-purple-300" },
];

// Utils that search a theme (NoteColorTheme)
const findtheme = (color: NoteColor) => {
  return Colors.find((c) => c.name === color) || Colors[0];
};

const useColor = (color: NoteColor) => {
  const [theme, setTheme] = useState<NoteColorTheme>(() => findtheme(color));

  // Change the theme
  function changeTheme(color: NoteColor) {
    const newTheme: NoteColorTheme = findtheme(color);
    setTheme(newTheme);
  }

  return { theme, changeTheme };
};

export default useColor;
