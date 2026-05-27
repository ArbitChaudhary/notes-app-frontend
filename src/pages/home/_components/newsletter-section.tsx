import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";

export function NewsletterSection() {
  return (
    <section className="py-16 px-4">
      <SectionHeader
        title="Subscribe to Our Newsletter"
        description="Get the latest notes and articles delivered straight to your inbox."
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mx-auto mt-8 flex max-w-md gap-2"
      >
        <input
          type="email"
          required
          placeholder="Enter your email"
          className="flex-1 rounded-md border bg-background px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
        />
        <Button type="submit">Subscribe</Button>
      </form>
    </section>
  );
}
