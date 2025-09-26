export interface Note {
  id: number;
  text: string;
  created: {
    date:string
    time: string
  };
}

export interface NoteCardProps {
  note: Note;
  deleteNote: (id: number) => void
}

export interface NoteComposerProps {
  addNote: (note: Note) => void;
}

export interface HandleAddBtnProp {
  handleAddBtn:() => void
}