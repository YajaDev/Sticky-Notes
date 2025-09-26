import { useState, useEffect } from "react";

interface Note {
  id: number;
  text: string;
  created: {
    date:string
    time: string
  };
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
  function addNote(note: Note) {
    setNotes((prev) => [...prev, note]);
    setIsAdding(false);
  }

  // Delete Note Button
  function deleteNote(id:number) {
    setNotes(prev => prev.filter(note => note.id !== id))
  }

  return { handleAddBtn, isAdding, notes, addNote, deleteNote };
};

export default useNote;
