import NoteComposer from "./components/NoteComposer";
import NoteCard from "./components/NoteCard";
import { Plus } from "lucide-react";
import useNote from "./hooks/useNote";
import EmptyNote from "./components/EmptyNote";

function App() {
  const {
    handleAddBtn,
    isAdding,
    EditingId,
    notes,
    handleSaveBtn,
    deleteNote,
    editNote,
    cancelEdit,
  } = useNote();

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

        {/* Render when add note is clicked */}
        {isAdding && <NoteComposer handleSaveBtn={handleSaveBtn} />}

        {/* Conditional Render */}
        {notes.map((note) =>
          note.id === EditingId ? (
            // Render NoteComposer if status is "editing"
            <NoteComposer
              key={note.id}
              handleSaveBtn={handleSaveBtn}
              editMode={{ note, cancelEdit }}
            />
          ) : (
            // Render Note
            <ul key={note.id}>
              <NoteCard
                note={note}
                deleteNote={deleteNote}
                editNote={editNote}
              />
            </ul>
          )
        )}

        {/* Render if notes is empty */}
        {notes.length === 0 && <EmptyNote handleAddBtn={handleAddBtn} />}
      </div>
    </div>
  );
}

export default App;
