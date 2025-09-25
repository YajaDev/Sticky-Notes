import { useState, useEffect } from "react";

interface Note {
  id: number;
  text: string;
}

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
  function addnote(note: Note) {
    setNotes((prev) => [...prev, note]);
    setIsAdding(false);
  }

  return { handleAddBtn, isAdding, notes, addnote };
};

export default useNote;
