import { Pin, PenLine, Trash2 } from "lucide-react";
import dayjs from 'dayjs'

interface Note {
  id: number
  text: string
}

interface NoteCardProps {
  note:Note
}

const NoteCard = ({note}:NoteCardProps) => {
  
  const date = dayjs().format("M/DD/YYYY")
  
  return (
    <div className="flex flex-col gap-2 w-full p-3 mb-3 rounded-sm border-2">
      <p>{note.text}</p>
      <p className="text-sm text-gray-400">{date}</p>
      <div className="flex gap-2">
        <button>
          <Pin size={15} />
        </button>
        <button>
          <PenLine size={15} color="#3b82f6" />
        </button>
        <button>
          <Trash2 size={15} color="#ef4444" />
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
