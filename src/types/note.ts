export interface Note {
  id: number;
  text: string;
  colorTheme: NoteColorTheme;
  isPinned: boolean;
  created: {
    date: string;
    time: string;
  };
}

export interface ColorPaletteProps {
  changeTheme: (c: NoteColor) => void;
  theme: NoteColorTheme;
  filterMode?: {
    text: string;
    notefilter: (text: string, color: NoteColor) => void;
  };
}

export interface NoteCardProps {
  note: Note;
  deleteNote: (id: number) => void;
  editNote: (id: number) => void;
  togglePin: (id: number) => void;
}

export interface NoteComposerProps {
  handleSaveBtn: (text: string, theme: NoteColorTheme, id?: number) => void;
  editMode?: {
    cancelEdit: () => void;
    note: Note;
  };
}

export interface HandleAddBtnProp {
  handleAddBtn: () => void;
}

export interface SearchBarPros {
  notefilter: (text: string, color: NoteColor) => void;
}

// Color System types
export type NoteColor =
  | "yellow"
  | "pink"
  | "blue"
  | "green"
  | "purple"
  | "null";

type NoteBackgroundColor =
  | "null"
  | "bg-yellow-200"
  | "bg-pink-200"
  | "bg-blue-200"
  | "bg-green-200"
  | "bg-purple-200";

type NoteBorderColor =
  | "null"
  | "border-yellow-300"
  | "border-pink-300"
  | "border-blue-300"
  | "border-green-300"
  | "border-purple-300";

export interface NoteColorTheme {
  name: NoteColor;
  bg: NoteBackgroundColor;
  border: NoteBorderColor;
}
