import { Search } from "lucide-react";
const NoNotesFound = () => {
  return (
    <div className="flex flex-col items-center gap-2 py-20">
      <Search size={50} color="#6b7280" />
      <p className="text-lg font-medium text-black/65">No notes found</p>
      <p className="text-gray-400 text-center">Try adjusting your search or filters</p>
    </div>
  )
}

export default NoNotesFound
