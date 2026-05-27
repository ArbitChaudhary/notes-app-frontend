import type { Note } from "@/data/notes";

interface NoteCardProps {
  note: Note;
}

export function NoteCard({ note }: NoteCardProps) {
  return (
    <div className="group relative aspect-4/5 overflow-hidden shadow-sm transition-shadow hover:shadow-md hover:cursor-pointer">
      <img
        src={note.image}
        alt={note.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform group-hover:scale-105 duration-300"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <h3 className="font-semibold text-lg text-white">{note.title}</h3>
      </div>
    </div>
  );
}
