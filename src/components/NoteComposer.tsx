import ColorPalette from "./colorPalette";

const NoteComposer = () => {
  return (
    <div className="flex flex-col p-5 bg-yellow-200 border-2 border-yellow-300 rounded-lg">
      <label 
        htmlFor="note-text" 
        className="text-sm pb-1 ">
        New Note
      </label>
      <textarea
        className="border border-gray-400 rounded-md p-2 bg-white/70"
        id="note-text"
        rows={3}
        placeholder="What's on your mind? (Ctrl+Enter to save)"
      />
      <p className="text-xs text-gray-500 pt-2">0/500 characters</p>
      <p className="text-sm my-1">Color</p>
      <ColorPalette />
      <button className="note-btn mt-2">Save Note</button>
    </div>
  );
};

export default NoteComposer;
