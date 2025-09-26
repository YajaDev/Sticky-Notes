import { useState, useEffect } from "react";
import dayjs from "dayjs";
import type { Note, NoteColorTheme } from "../types/note";

const useNote = () => {
  const [isAdding, setIsAdding] = useState(false);

  // notes
  const [notes, setNotes] = useState<Note[]>(() =>
    JSON.parse(localStorage.getItem("notes") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Add Button
  function handleAddBtn() {
    setIsAdding(!isAdding);
  }

  // Add Note Button
  function addNote(note: Note) {
    setNotes((prev) => [...prev, note]);
    setIsAdding(false);
  }

  function handleSaveBtn(text: string, theme: NoteColorTheme) {
    if (!text.trim()) {
      setIsAdding(false);
      alert("Note cannot be empty.");
      return;
    }

    addNote({
      id: Date.now(),
      text: text,
      colorTheme: theme,
      created: {
        date: dayjs().format("MM/DD/YYYY"),
        time: dayjs().format("h:m A"),
      },
    });
  }

  // Delete Note Button
  function deleteNote(id: number) {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  }

  return { handleAddBtn, isAdding, notes, handleSaveBtn, deleteNote };
};

export default useNote;
