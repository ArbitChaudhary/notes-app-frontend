import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[500px] items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&h=900&fit=crop"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto max-w-2xl px-4 text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Capture Your Ideas, Share Your Stories
        </h1>
        <p className="mt-4 text-lg text-white/80">
          A simple and beautiful place to write, organize, and share your notes
          with the world.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button size="lg">Write Blog</Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10"
          >
            Explore
          </Button>
        </div>
      </div>
    </section>
  );
}
