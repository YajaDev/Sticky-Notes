import { useState } from "react";
import ColorPalette from "./ColorPalette";
import type { NoteComposerProps } from "../types/note";

const NoteComposer = ({
  handleSaveBtn,
  changeTheme,
  theme,
}: NoteComposerProps) => {
  const [text, setText] = useState("");

  // handle text changes for textarea element
  function handletextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }

  return (
    <div
      className={`flex flex-col p-5 ${theme.bg} ${theme.border} border-2 rounded-lg duration-200 transition-colors`}
    >
      <label htmlFor="note-text" className="text-sm pb-1 ">
        New Note
      </label>
      <textarea
        className="border border-gray-400 rounded-md p-2 bg-white/70"
        maxLength={500}
        onChange={handletextChange}
        id="note-text"
        rows={3}
        placeholder="What's on your mind? (Ctrl+Enter to save)"
      />
      <p className="text-xs text-gray-500 pt-2">{text.length}/500 characters</p>
      <p className="text-sm my-1">Color</p>
      <ColorPalette changeTheme={changeTheme} theme={theme}/>
      <button
        className="note-btn mt-2"
        onClick={() => {
          handleSaveBtn(text, theme);
        }}
      >
        Save Note
      </button>
    </div>
  );
};

export default NoteComposer;
