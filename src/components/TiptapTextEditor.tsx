import type { TiptapTextEditorProps } from "../types/note";
import { Bold, Italic, List, Strikethrough, Underline } from "lucide-react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CharacterCount from "@tiptap/extension-character-count";
import Placeholder from "@tiptap/extension-placeholder";
import useToolStatus from "../hooks/useToolStatus";

const TiptapTextEditor = ({
  setText,
  text,
  theme,
  handleSaveBtn,
  editMode,
}: TiptapTextEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CharacterCount.configure({ limit: 500 }),
      Placeholder.configure({
        placeholder: "What's on your mind? (Ctrl+Enter to save)", // shows only when empty
      }),
    ],
    editorProps: {
      handleKeyDown: (_, e) => {
        if (e.ctrlKey && e.key === "Enter") {
          handleSaveBtn(text, theme, editMode?.note.id);
          return true;
        }
        return false;
      },
    },
    content: editMode?.note.text || "",
    onUpdate: ({ editor }) => {
      setText(editor.getHTML());
    },
  });

  const status = useToolStatus(editor);

  return (
    <div className="flex flex-col bg-white/70 min-h-[100px] rounded-md border border-gray-400">
      <EditorContent
        editor={editor}
        onClick={() => editor?.chain().focus().run()}
        className="flex-1 cursor-text p-2"
      />

      {/* Toolbar */}
      <div className="flex gap-2.5 pl-1.5 pt-1.5 mb-1.5 text-black/75 border-t-1 border-black/40">
        <button
          onClick={() => editor?.chain().focus().toggleBold().run()}
          aria-label="bold button"
          className={`cursor-pointer ${status.bold && theme.text}`}
        >
          <Bold size={17} strokeWidth={3} />
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          aria-label="italic button"
          className={`cursor-pointer ${status.italic && theme.text}`}
        >
          <Italic size={17} strokeWidth={3} />
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleUnderline().run()}
          aria-label="underline button"
          className={`cursor-pointer ${status.underline && theme.text}`}
        >
          <Underline size={17} strokeWidth={3} />
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleStrike().run()}
          aria-label="strikethrough button"
          className={`cursor-pointer ${status.strikethrough && theme.text}`}
        >
          <Strikethrough size={17} strokeWidth={3} />
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
          aria-label="bulletList button"
          className={`cursor-pointer ${status.bulletList && theme.text}`}
        >
          <List size={17} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
};

export default TiptapTextEditor;
