import { Search } from "lucide-react";
import useColor from "../hooks/useColor";
import ColorPalette from "./ColorPalette";
import type { SearchBarPros } from "../types/note";
import { useState } from "react";

const SearchBar = ({ notefilter }: SearchBarPros) => {
  const [text, setText] = useState("");
  const { theme, changeTheme } = useColor("null");

  return (
    <div className="flex flex-col gap-2 relative mb-3 md:mb-5 lg:mb-5">
      <input
        type="text"
        id="searchText"
        placeholder="Search notes..."
        onChange={(e) => {
          setText(e.target.value);
          notefilter(e.target.value, theme.name);
        }}
        className="w-full py-2 px-10 border-1 border-black/40 rounded-sm md:text-lg"
      />

      <label htmlFor="searchText">
        <Search
          className="absolute top-[10px] left-2.5 w-5 md:w-5 md:top-[11px]"
          color="gray"
          strokeWidth={2.2}
        />
      </label>

      <div className="flex items-center gap-1 md:gap-2 text-black/70">
        <p className="font-medium text-sm mr-1">Filter by color:</p>
        <button
          className={`text-xs px-3 py-1 border-1 rounded-full md:text-sm hover:scale-105 ${
            theme.name === "null"
              ? "font-medium bg-black/10 border-black/40"
              : "border-black/30"
          }`}
          disabled={theme.name === "null"}
          onClick={() => {
            changeTheme("null");
            notefilter(text, "null");
          }}
        >
          All
        </button>

        <ColorPalette
          changeTheme={changeTheme}
          theme={theme}
          filterMode={{ text, notefilter }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
