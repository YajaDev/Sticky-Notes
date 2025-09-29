import NoteComposer from "./components/NoteComposer";
import NoteCard from "./components/NoteCard";
import { Plus } from "lucide-react";
import useNote from "./hooks/useNote";
import EmptyNote from "./components/EmptyNote";
import SearchBar from './components/SearchBar'
import useFilteredNote from "./hooks/useFilteredNote";
import NoNotesFound from "./components/NoNotesFound";

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
    toglePin
  } = useNote();

  const {notesToShow, notefilter} = useFilteredNote(notes)
  
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

        <SearchBar notefilter={notefilter}/>

        {/* Conditional Render */}
        {notesToShow.map((note) =>
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
                toglePin={toglePin}
              />
            </ul>
          )
        )}

        {/* Render if notes is empty */}
        {notes.length === 0 && <EmptyNote handleAddBtn={handleAddBtn} />}

        {/* Render if No notes found after filtering notes*/}
        {(notes.length > 0 && notesToShow.length === 0) && <NoNotesFound />}
      </div>
    </div>
  );
}

export default App;
