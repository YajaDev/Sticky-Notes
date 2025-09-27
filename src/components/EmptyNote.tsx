import { Plus } from "lucide-react";
import type { HandleAddBtnProp } from "../types/note"

const EmptyNote = ({handleAddBtn}:HandleAddBtnProp) => {

  return (
    <div className="flex flex-col justify-center items-center gap-2 py-20">
      <Plus size={50} color="#6b7280"/>
      <p className="text-lg font-medium">No notes yet</p>
      <p className="text-gray-400 text-center mb-5">Create your first sticky note to get started!</p>
      <button className="note-btn" onClick={handleAddBtn}>Create Your First Note</button>
    </div>
  )
}

export default EmptyNote
