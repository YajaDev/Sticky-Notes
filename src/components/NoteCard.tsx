import { Pin, Star, PinOff, PenLine, Trash2 } from "lucide-react";
import type { NoteCardProps } from "../types/note";

const NoteCard = ({ note, deleteNote, editNote, toglePin }: NoteCardProps) => {
  return (
    <li
      className={`flex flex-col gap-2 relative w-full p-3 mb-3 rounded-sm border-2 ${note.colorTheme.border} ${note.colorTheme.bg}`}
    >
      {/* Render if note is pinned */}
      {note.isPinned && (
        <Star
          className="absolute -top-2 -right-2"
          size={18}
          fill="#ca8a04"
          strokeWidth={0}
        />
      )}

      <p className="text-lg capitalize">{note.text}</p>
      <div className="text-xs text-gray-400">
        <p>{note.created.time}</p>
        <p>{note.created.date}</p>
      </div>
      <div className="flex gap-2">
        <button onClick={() => toglePin(note.id)}>
          {note.isPinned ? (
            <PinOff className="text-yellow-600" size={15} />
          ) : (
            <Pin size={15} />
          )}
        </button>
        <button onClick={() => editNote(note.id)}>
          <PenLine size={15} color="#3b82f6" />
        </button>
        <button onClick={() => deleteNote(note.id)}>
          <Trash2 size={15} color="#ef4444" />
        </button>
      </div>
    </li>
  );
};

export default NoteCard;
