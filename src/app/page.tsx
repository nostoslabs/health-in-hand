import { Hero } from "@/components/home/Hero";
import { Naturopathy } from "@/components/home/Naturopathy";
import { PractitionerCard } from "@/components/home/PractitionerCard";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Container } from "@/components/layout/Container";
import { PRACTITIONERS } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Naturopathy />

      <section className="py-16">
        <Container>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Meet Our Practitioners
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PRACTITIONERS.map((practitioner) => (
              <PractitionerCard key={practitioner.name} {...practitioner} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-muted/30">
        <Container>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Our Services
          </h2>
          <ServicesGrid />
        </Container>
      </section>
    </>
  );
}
