import type { ColorPaletteProps, NoteColor } from "../types/note";

// Moved outside component to prevent re-render
const colors: NoteColor[] = ["yellow", "pink", "blue", "green", "purple"];

const ColorPalette = ({
  changeTheme,
  theme,
  filterMode,
}: ColorPaletteProps) => {
  return (
    <ul className="flex gap-1 md:gap-2">
      {colors.map((color, i) => (
        <button
          aria-label={`Filter by ${color} color`}
          disabled={theme.name === color} // disable to avoid re-render(Prevent re-selecting the current color)
          onClick={() => {
            changeTheme(color);
            if (filterMode) filterMode.notefilter(filterMode.text, color);
          }}
          key={i}
          className={`h-6 w-6 rounded-full border-2 bg-${color}-200 cursor-pointer hover:scale-110 ${
            theme.name === color
              ? "outline-2 outline-gray-400 border-white/50"
              : "border-gray-300"
          }`}
        />
      ))}
    </ul>
  );
};

export default ColorPalette;
