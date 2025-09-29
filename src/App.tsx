import NoteComposer from "./components/NoteComposer";
import NoteCard from "./components/NoteCard";
import { Plus } from "lucide-react";
import useNote from "./hooks/useNote";
import EmptyNote from "./components/EmptyNote";
import SearchBar from "./components/SearchBar";
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
    togglePin,
  } = useNote();

  const { notesToShow, notefilter } = useFilteredNote(notes);

  return (
    <div className="flex flex-col min-h-screen max-w-[100rem] p-5 mx-auto lg:py-10">
      <header className="flex flex-col justify-between gap-1 mb-5 md:flex-row lg:mb-7">
        <h1 className="font-bold text-3xl lg:text-4xl xl:text-5xl">
          Sticky Notes
        </h1>
        <button
          className="flex items-center justify-center gap-1 note-btn self-end"
          onClick={handleAddBtn}
        >
          <Plus className="w-4 lg:w-5" /> New Note
        </button>
      </header>

      <main className="flex-1">
        {/* Render when add note is clicked */}
        {isAdding && <NoteComposer handleSaveBtn={handleSaveBtn} />}

        <SearchBar notefilter={notefilter} />

        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
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
              <NoteCard
                key={note.id}
                note={note}
                deleteNote={deleteNote}
                editNote={editNote}
                togglePin={togglePin}
              />
            )
          )}
        </ul>

        {/* Render if notes is empty */}
        {notes.length === 0 && <EmptyNote handleAddBtn={handleAddBtn} />}

        {/* Render if No notes found after filtering notes*/}
        {notes.length > 0 && notesToShow.length === 0 && <NoNotesFound />}
      </main>

      <footer className="text-center text-sm text-black/70 mt-5 pt-8 pb-5 border-t-2 border-gray-200">
        <p>
          {notes.length > 0 &&
            `${notes.length} note${notes.length !== 1 ? "s" : ""} total`}
          {notesToShow.length < notes.length &&
            ` • ${notesToShow.length} shown`}
        </p>
      </footer>
    </div>
  );
}

export default App;
