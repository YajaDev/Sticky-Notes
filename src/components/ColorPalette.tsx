import type { ColorPaletteProps, NoteColor } from "../types/note";

// Move outside component to prevent re-render
const colors: NoteColor[] = ["yellow", "pink", "blue", "green", "purple"];

const ColorPalette = ({ changeTheme, theme }: ColorPaletteProps) => {

  return (  
    <ul className="flex gap-1">
      {colors.map((color, i) => (
        <li
          className={`h-6 w-6 rounded-full border-2 bg-${color}-200 cursor-pointer ${
            theme.name === color
              ? "outline-2 outline-gray-400 border-white/50"
              : "border-gray-300"
          }`}
          onClick={() => {
            changeTheme(color);
          }}
          key={i}
        />
      ))}
    </ul>
  );
};

export default ColorPalette;
