import NoteComposer from "./components/NoteComposer";
import NoteCard from "./components/NoteCard";
import { Plus } from "lucide-react";
import useNote from "./hooks/useNote";
import EmptyNote from "./components/EmptyNote";
import useColor from "./hooks/useColor";

function App() {
  const { theme, changeTheme } = useColor("yellow");
  const { handleAddBtn, isAdding, notes, handleSaveBtn, deleteNote } =
    useNote();

  return (
    <div className="min-h-screen p-5 ">
      <div className="flex flex-col">
        <h1 className="font-bold text-3xl">Sticky Notes</h1>

        <div className="flex justify-end">
          <button
            className="flex items-center gap-1 w-28 note-btn mb-5"
            onClick={handleAddBtn}
          >
            <Plus size={15} />
            New Note
          </button>
        </div>
        {isAdding && (
          <NoteComposer
            handleSaveBtn={handleSaveBtn}
            changeTheme={changeTheme}
            theme={theme}
          />
        )}

        {notes.map((note) => (
          <ul key={note.id}>
            <NoteCard note={note} deleteNote={deleteNote} />
          </ul>
        ))}

        {notes.length === 0 && <EmptyNote handleAddBtn={handleAddBtn} />}
      </div>
    </div>
  );
}

export default App;
