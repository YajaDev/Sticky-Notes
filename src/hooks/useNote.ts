import { useState, useEffect } from "react";
import dayjs from "dayjs";
import type { Note, NoteColorTheme } from "../types/note";

const useNote = () => {
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [EditingId, setEditingId] = useState<number | null>(null);

  // notes
  const [notes, setNotes] = useState<Note[]>(() =>
    JSON.parse(localStorage.getItem("sticky-notes") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("sticky-notes", JSON.stringify(notes));
  }, [notes]);

  // Add Button
  function handleAddBtn() {
    setIsAdding(!isAdding);
    setEditingId(null);
  }

  // Add Note Button
  function addNote(note: Note) {
    setNotes((prev) => [...prev, note]);
    setIsAdding(false);
  }

  function handleSaveBtn(
    newtext: string,
    newtheme: NoteColorTheme,
    id?: number
  ) {
    if (!newtext.trim()) {
      setIsAdding(false);
      setEditingId(null);
      alert("Note cannot be empty.");
      return;
    }

    id
      ? // do if props has id
        setNotes((notes) => {
          setEditingId(null);
          return notes.map((note) =>
            note.id === id
              ? { ...note, colorTheme: newtheme, text: newtext }
              : note
          );
        })
      : // do if props has id
        addNote({
          id: Date.now() * Math.random(),
          text: newtext,
          colorTheme: newtheme,
          isPinned: false,
          created: {
            date: dayjs().format("MM/DD/YYYY"),
            time: dayjs().format("h:mm A"),
          },
        });
  }

  // Edit Note Utilities
  function editNote(id: number) {
    setEditingId(id);
    setIsAdding(false); // Close NoteComposer component
  }

  function cancelEdit() {
    setEditingId(null);
  }

  // Delete Note Button
  function deleteNote(id: number) {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  }

  // Handle pin button
  function togglePin(id: number) {
    setNotes((prev) =>
      prev
        .map((note) =>
          note.id === id ? { ...note, isPinned: !note.isPinned } : note
        )
        .sort((n1, n2) => (n2.isPinned ? 1 : -1) - (n1.isPinned ? 1 : -1))
    );
  }

  return {
    handleAddBtn,
    isAdding,
    EditingId,
    notes,
    handleSaveBtn,
    deleteNote,
    editNote,
    cancelEdit,
    togglePin,
  };
};

export default useNote;
