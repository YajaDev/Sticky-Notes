import { useState } from "react";
import ColorPalette from "./ColorPalette";
import useColor from "../hooks/useColor";
import type { NoteComposerProps } from "../types/note";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CharacterCount from "@tiptap/extension-character-count";
import Placeholder from "@tiptap/extension-placeholder";

import { Bold, Italic, List, Strikethrough, Underline } from "lucide-react";
import { htmlToText } from "../utils/text";

const NoteComposer = ({ handleSaveBtn, editMode }: NoteComposerProps) => {
  const [text, setText] = useState(editMode?.note.text || "");
  const { theme, changeTheme } = useColor(
    editMode?.note.colorTheme.name || "yellow"
  );

  const editor = useEditor({
    extensions: [
      StarterKit,
      CharacterCount.configure({ limit: 500 }),
      Placeholder.configure({
        placeholder: "What's on your mind? (Ctrl+Enter to save)", // shows only when empty
      }),
    ],
    content: editMode?.note.text || "",
    onUpdate: ({ editor }) => {
      setText(editor.getHTML());
    },
  });

  return (
    <div
      className={`flex flex-col p-5 mb-3 ${theme.bg} ${theme.border} border-2 rounded-lg duration-200 transition-colors`}
    >
      <span className="text-sm pb-1 ">
        {editMode?.note ? "Edit Note" : "New Note"}
      </span>

      {/* text Area */}
      <div className="flex flex-col bg-white/70 min-h-[100px] rounded-md border border-gray-400">
        <EditorContent
          editor={editor}
          onKeyDown={(e) => {
            if (e.ctrlKey && e.key === "Enter")
              handleSaveBtn(text, theme, editMode?.note.id);
          }}
          onClick={() => editor?.chain().focus().run()}
          tabIndex={-1}
          className="flex-1 cursor-text p-2"
        />

        {/* Toolbar */}
        <div className="flex gap-2.5  pl-1.5 pt-0.5 mb-1 text-black/75 border-t-1 border-black/40">
          <Bold
            className={`w-4 cursor-pointer 
              ${editor.isActive("bold") ? theme.text : ""}
            `}
            strokeWidth={3}
            onClick={() => editor.chain().focus().toggleBold().run()}
          />
          <Italic
            className={`w-4 cursor-pointer 
              ${editor.isActive("italic") ? theme.text : ""}
            `}
            strokeWidth={3}
            onClick={() => editor.chain().focus().toggleItalic().run()}
          />
          <Underline
            className={`w-4 cursor-pointer 
              ${editor.isActive("underline") ? theme.text : ""}
            `}
            strokeWidth={3}
            onClick={() => editor.chain().focus().toggleUnderline().run()}
          />
          <Strikethrough
            className={`w-4 cursor-pointer 
              ${editor.isActive("strike") ? theme.text : ""}
            `}
            strokeWidth={3}
            onClick={() => editor.chain().focus().toggleStrike().run()}
          />
          <List
            className={`w-4 cursor-pointer 
              ${editor.isActive("bulletList") ? theme.text : ""}
            `}
            strokeWidth={3}
            onClick={() => editor.chain().focus().toggleBulletList().run()}
          />
        </div>
      </div>

      <p className="text-xs text-gray-500 pt-2">
        {htmlToText(text).length}/500 characters
      </p>
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
                handleSaveBtn(editor.getHTML(), theme, editMode.note.id);
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
            handleSaveBtn(editor.getHTML(), theme);
          }}
        >
          Save Note
        </button>
      )}
    </div>
  );
};

export default NoteComposer;
