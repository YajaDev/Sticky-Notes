# 📝 Sticky Notes

A simple and modern **sticky notes app** built with **React + TypeScript** and styled with **Tailwind CSS**.  
You can **create, edit, delete, pin, and search notes** — with support for filtering notes by color and persistent storage using `localStorage`.

## 🚀 Demo

🔗 [Live Demo](https://simplestickynote.netlify.app/)

## Features

- ➕ **Add Notes** – Create new sticky notes with custom colors.
- ✏️ **Edit Notes** – Update existing notes inline.
- 🗑 **Delete Notes** – Remove notes permanently.
- 📌 **Pin Notes** – Keep important notes on top.
- 🔍 **Search & Filter** – Search by text or filter notes by color.
- 🎨 **Color Themes** – Choose from multiple note colors.
- 💾 **Local Storage** – Notes are saved automatically in the browser.
- ⌨️ **Keyboard Shortcut** – Save note with `Ctrl + Enter`.

## Tech Stack

- **React 18 + TypeScript** – App logic and components
- **Tailwind CSS** – Styling system
- **Lucide React** – Icons (`Plus`, `Pin`, `Trash`, etc.)
- **Day.js** – Formatting date & time
- **LocalStorage** – Persistent storage

## Development Reflection

### What Went Well

- Implementing CRUD operations was straightforward with React hooks
- The unified NoteComposer component for both create/edit modes worked elegantly
- Custom hooks (useNote, useFilteredNote) kept the code organized
- Tailwind CSS made responsive styling quick

### Challenges

- Managing filter state persistence when adding new notes required rethinking the data flow
- Coordinating search and filter state across components needed careful prop drilling
- Ensuring pinned notes stayed at the top while maintaining sort order

### Technical Decisions

- **TypeScript**: Chose TypeScript for type safety and better developer experience
- **No backend**: localStorage meets the requirements and keeps the app simple
- **Vite**: Faster than CRA for development and builds
- **Tailwind CSS**: Utility-first CSS without configuration overhead
- **Day.js**: Lightweight alternative to Moment.js for date formatting

### What I'd Refactor First

1. Fix the typo: `toglePin` should be `togglePin` throughout the codebase
2. Improve accessibility: Add comprehensive aria-label attributes (partially done)
3. Fix the filter persistence bug in useFilteredNote
4. Better ID generation: `Date.now() * Math.random()` could cause collisions - use UUID
5. Extract localStorage logic: Create a utility module for storage operations

### Next Refactoring Priorities

1. Add React Testing Library tests for core functionality
2. Implement proper error boundaries
3. Add debounce to search input for better performance
4. Improve accessibility with ARIA labels and focus management

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
