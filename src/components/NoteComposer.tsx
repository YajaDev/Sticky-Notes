import { useState } from "react";
import ColorPalette from "./ColorPalette";
import useColor from "../hooks/useColor";
import type { NoteComposerProps } from "../types/note";

const NoteComposer = ({ handleSaveBtn, editMode }: NoteComposerProps) => {
  const [text, setText] = useState(editMode?.note.text || "");
  const { theme, changeTheme } = useColor(
    editMode?.note.colorTheme.name || "yellow"
  );

  return (
    <div
      className={`flex flex-col p-5 mb-3 ${theme.bg} ${theme.border} border-2 rounded-lg duration-200 transition-colors`}
    >
      <label htmlFor="note-text" className="text-sm pb-1 ">
        {editMode?.note ? "Edit Note" : "New Note"}
      </label>

      <textarea
        className="border border-gray-400 rounded-md p-2 bg-white/70"
        maxLength={500}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.ctrlKey && e.key === "Enter")
            handleSaveBtn(text, theme, editMode?.note.id);
        }}
        value={text}
        id="note-text"
        rows={3}
        placeholder="What's on your mind? (Ctrl+Enter to save)"
      />

      <p className="text-xs text-gray-500 pt-2">{text.length}/500 characters</p>
      <p className="text-sm my-1">Color</p>

      <ColorPalette changeTheme={changeTheme} theme={theme} />

      {/* Render edit controls or new note button  */}
      {editMode?.note ? (
        // Editing mode: show Save and Cancel buttons
        <>
          <p className="flex flex-col py-2 text-xs text-gray-500">
            <span>Created: {editMode.note.created.time}</span>
            <span>{editMode.note.created.date}</span>
          </p>

          <div className="flex flex-1 justify-center gap-3">
            <button
              className="note-btn w-30"
              onClick={() => {
                handleSaveBtn(text, theme, editMode.note.id);
              }}
            >
              Save
            </button>
            <button
              className="w-30 border-1 border-gray-500 rounded-md "
              onClick={() => editMode.cancelEdit()}
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        // Creating a new note: show single Save button
        <button
          className="note-btn mt-2"
          onClick={() => {
            handleSaveBtn(text, theme);
          }}
        >
          Save Note
        </button>
      )}
    </div>
  );
};

export default NoteComposer;
