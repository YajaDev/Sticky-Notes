# 📝 Sticky Notes

A simple and modern **sticky notes app** built with **React + TypeScript** and styled with **Tailwind CSS**.  
You can **create, edit, delete, pin, and search notes** — with support for filtering notes by color and persistent storage using `localStorage`.

## 🚀 Demo

🔗 [Live Demo](https://simplestickynote.netlify.app/)

## Features

- ➕ **Add Notes** – Create new sticky notes with custom colors.
- ✏️ **Rich Text Editor** – Bold, italic, underline, strikethrough, and bullet lists powered by Tiptap
- 🗑 **Delete Notes** – Remove notes permanently.
- 📌 **Pin Notes** – Keep important notes on top.
- 🔍 **Search & Filter** – Search by text or filter notes by color.
- 🎨 **Color Themes** – Choose from multiple note colors.
- 💾 **Persistent Storage** – Auto-save to localStorage
- ⌨️ **Keyboard Shortcut** – Save note with `Ctrl + Enter`.
- 📱 **Responsive Design** – Works on mobile, tablet, and desktop
- ♿ **Accessible** – ARIA labels and keyboard navigation support

## Tech Stack

- **React 18 + TypeScript** – App logic and components
- **Tailwind CSS** – Styling system
- **Lucide React** – Icons (`Plus`, `Pin`, `Trash`, etc.)
- **Day.js** – Formatting date & time
- **LocalStorage** – Persistent storage
- **TypeScript** – Type safety and better DX
- **Tiptap** – Rich text editor framework

## Development Reflection

### What Went Well

- Implementing CRUD operations was straightforward with React hooks
- The unified NoteComposer component for both create/edit modes worked elegantly
- Custom hooks (useNote, useFilteredNote) kept the code organized
- Tailwind CSS made responsive styling quick
- Tiptap's extensible architecture made implementing rich text features straightforward.

### Challenges

- Managing filter state persistence when adding new notes required rethinking the data flow
- Coordinating search and filter state across components needed careful prop drilling
- Ensuring pinned notes stayed at the top while maintaining sort order
- Created a custom useToolStatus hook to track active formatting (bold, italic, etc.) by subscribing to Tiptap's transaction events. 
  This separated concerns and kept the editor component clean.

### Technical Decisions

- **TypeScript**: Chose TypeScript for type safety and better developer experience
- **No backend**: localStorage meets the requirements and keeps the app simple
- **Vite**: Faster than CRA for development and builds
- **Tailwind CSS**: Utility-first CSS without configuration overhead
- **Day.js**: Lightweight alternative to Moment.js for date formatting
- **useMemo for Filtering**: Prevents unnecessary recalculation of filtered notes on every render
- **Tiptap over Draft.js**: More modern, better TypeScript support, smaller bundle

### What I'd Refactor First

1. Fix the typo: `toglePin` should be `togglePin` throughout the codebase
2. Improve accessibility: Add comprehensive aria-label attributes (partially done)
3. Fix the filter persistence bug in useFilteredNote
4. Extract localStorage logic: Create a utility module for storage operations
5. Add text formating using Tiptap library

### Next Refactoring Priorities

1. Add React Testing Library tests for core functionality
2. Implement proper error boundaries
3. Add debounce to search input for better performance
4. Improve accessibility with ARIA labels and focus management
5. Better ID generation: `Date.now() * Math.random()` could cause collisions - use UUID

## Installation

```bash
# Clone the repository
git clone https://github.com/your-username/sticky-notes.git

# Enter the project folder
cd sticky-notes

# Install dependencies
npm install

# Start the development server
npm run dev
```
