import { NoteCard } from "@/components/note-card";
import { SectionHeader } from "@/components/section-header";
import { notes } from "@/data/notes";

export function NotesSection() {
  return (
    <section className="py-16 px-4 container mx-auto">
      <SectionHeader
        title="Latest Notes"
        description="Explore our latest articles and tutorials on web development and technology."
      />
      <div className="max-w-5xl mx-auto mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </section>
  );
}
