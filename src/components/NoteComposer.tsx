import { useState } from "react";
import ColorPalette from "./ColorPalette";
import dayjs from "dayjs";
import type { NoteComposerProps } from "../types/note"

const NoteComposer = ({ addNote }: NoteComposerProps) => {
  const [text, setText] = useState("");

  function handletextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }

  return (
    <div className="flex flex-col p-5 bg-yellow-200 border-2 border-yellow-300 rounded-lg">
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
      <ColorPalette />
      <button
        className="note-btn mt-2"
        onClick={() => {
          if (!text) return;
          addNote({
            id: Date.now(),
            text: text,
            created: {
              date: dayjs().format("MM/DD/YYYY"),
              time: dayjs().format("h:m A")
            },
          });
        }}
      >
        Save Note
      </button>
    </div>
  );
};

export default NoteComposer;
