import { useEffect, useState } from "react";
import type { Note, NoteColor } from "../types/note";

const useFilteredNote = (notes: Note[]) => {
  const [notesToShow, setNotesToShow] = useState<Note[]>([]);
  const [serchText, setserchText] = useState<string>("");
  const [filterColor, setfilterColor] = useState<NoteColor>("null");

  useEffect(() => {
    notefilter(serchText, filterColor);
  }, [notes]);

  function notefilter(text: string, color: NoteColor) {
    let filteredNotes: Note[] = notes;

    setserchText(text);
    setfilterColor(color);

    if (text.trim()) {
      filteredNotes = filteredNotes.filter((note) =>
        note.text.toLowerCase().includes(text.trim().toLowerCase())
      );
    }

    if (color !== "null") {
      filteredNotes = filteredNotes.filter(
        (note) => note.colorTheme.name === color
      );
    }

    setNotesToShow(filteredNotes);
  }

  return { notesToShow, notefilter };
};

export default useFilteredNote;
