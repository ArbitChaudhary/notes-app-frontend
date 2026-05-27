import { HeroSection } from "./_components/hero-section";
import { NotesSection } from "./_components/notes-section";
import { NewsletterSection } from "./_components/newsletter-section";
import { Footer } from "./_components/footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <NotesSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
