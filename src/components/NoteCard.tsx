import { Pin, PinOff, PenLine, Trash2 } from "lucide-react";
import type { NoteCardProps } from "../types/note";

const NoteCard = ({ note, deleteNote, editNote, togglePin }: NoteCardProps) => {
  return (
    <li
      className={`group flex flex-col gap-2 relative p-3 rounded-sm border-2 ${note.colorTheme.border} ${note.colorTheme.bg}`}
    >
      {/* Render if note is pinned */}
      {note.isPinned && (
        <Pin
          className="absolute -top-2 -right-2 rotate-50 h-5 lg:h-10 lg:w-6 lg:-top-4"
          fill="red"
          strokeWidth={1}
        />
      )}

      <p className="text-lg capitalize">{note.text}</p>
      <div className="text-xs text-gray-400">
        <p>{note.created.time}</p>
        <p>{note.created.date}</p>
      </div>
      <div className="flex gap-2 lg:opacity-0 group-hover:opacity-100">
        <button onClick={() => togglePin(note.id)}>
          {note.isPinned ? (
            <PinOff className="text-yellow-600 w-4 hover:scale-125" />
          ) : (
            <Pin className="w-4 hover:scale-125" />
          )}
        </button>
        <button onClick={() => editNote(note.id)}>
          <PenLine
            className="text-yellow-600 w-4 hover:scale-125"
            color="#3b82f6"
          />
        </button>
        <button onClick={() => deleteNote(note.id)}>
          <Trash2
            className="text-yellow-600 w-4 hover:scale-125"
            color="#ef4444"
          />
        </button>
      </div>
    </li>
  );
};

export default NoteCard;
