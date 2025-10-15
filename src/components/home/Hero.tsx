import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { SITE_NAME, PHONE } from "@/lib/constants";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative py-20 md:py-32">
      <Container>
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-6">
            {SITE_NAME}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Natural Healthcare in Eva, Alabama
          </p>
          <p className="text-lg mb-8 leading-relaxed">
            Health in Hand is a natural health care business. We use Nutrition
            Response Testing (NRT), Electro-dermal Screening (EDS),
            Neurofeedback, Thyroid Reflex Testing, Iris Analysis, Emotional
            modalities, and detox therapies to discern imbalances in the body,
            and we use natural remedies along with diet and lifestyle changes to
            bring the body into homeostasis and back to optimum health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <a href={`tel:${PHONE.replace(/\D/g, "")}`}>Call {PHONE}</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/new-patient-form">New Patient Form</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
