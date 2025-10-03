import { useMemo, useState } from "react";
import type { Note, NoteColor } from "../types/note";
import { htmlToText } from "../utils/text";

const useFilteredNote = (notes: Note[]) => {
  const [searchText, setserchText] = useState<string>("");
  const [filterColor, setfilterColor] = useState<NoteColor>("null");

  const notesToShow = useMemo(() => {
    return notes.filter((note) => {
      const plainText = htmlToText(note.text).toLowerCase();

      const matchesText = searchText.trim()
        ? plainText.includes(searchText.trim().toLowerCase())
        : true;

      const matchesColor =
        filterColor !== "null" ? note.colorTheme.name === filterColor : true;

      return matchesColor && matchesText;
    });
  }, [notes, searchText, filterColor]);

  function notefilter(text: string, color: NoteColor) {
    setserchText(text);
    setfilterColor(color);
  }

  return { notesToShow, notefilter };
};

export default useFilteredNote;
