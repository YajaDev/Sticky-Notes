import { useEffect, useState } from "react";
import type { Note, NoteColor } from "../types/note";

const useFilteredNote = (notes: Note[]) => {
  const [notesToShow, setNotesToShow] = useState<Note[]>([]);
  const [serchText, setserchText] = useState<string>("");
  const [filterColor, setfilterColor] = useState<NoteColor>("null");

  useEffect(() => {
    let filteredNotes: Note[] = notes;

    if (serchText.trim()) {
      filteredNotes = filteredNotes.filter((note) =>
        note.text.toLowerCase().includes(serchText.trim().toLowerCase())
      );
    }

    if (filterColor !== "null") {
      filteredNotes = filteredNotes.filter(
        (note) => note.colorTheme.name === filterColor
      );
    }

    setNotesToShow(filteredNotes);
  }, [notes, filterColor, serchText]);

  function notefilter(text: string, color: NoteColor) {
    setserchText(text);
    setfilterColor(color);
  }

  return { notesToShow, notefilter };
};

export default useFilteredNote;
