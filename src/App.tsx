import NoteComposer from "./components/NoteComposer";
import NoteCard from "./components/NoteCard";
import { Plus } from "lucide-react";
import useNote from "./hooks/useNote";

function App() {

  const {handleAddBtn, isAdding, notes ,addnote} = useNote()

  return (
    <div className="p-5">
      <div className="flex flex-col">
        <h1 className="font-bold text-3xl">Sticky Notes</h1>

        <div className="flex justify-end">
          <button className="flex items-center gap-1 w-28 note-btn mb-5" onClick={handleAddBtn}>
            <Plus size={15} />
            New Note
          </button>
        </div>
        {isAdding && <NoteComposer addnote={addnote}/>}

        {notes.map((note) => 
          <ul key={note.id} >
            <NoteCard note={note}/>
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
