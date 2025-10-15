import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "The Clinic Story",
  description:
    "Learn about the history of Health in Hand, from its founding in 2002 to the renovation of our historic 1892 church building in Eva, Alabama.",
};

export default function ClinicStoryPage() {
  return (
    <article className="py-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8">
            The Clinic Story
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Health in Hand started in 2002 when Martha began seeing clients in
              her home. As the practice grew, it became clear that a dedicated
              space was needed to better serve the community&apos;s health needs.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              In 2012, the clinic moved into an old church building in Eva,
              Alabama. This historic structure, built in 1892, had been vacant
              for approximately 25 years before Health in Hand breathed new life
              into it.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              The original deed of the church expressed a beautiful mission: to
              &ldquo;advance knowledge and morality.&rdquo; This purpose resonated deeply
              with the vision for Health in Hand—a place dedicated to advancing
              knowledge about natural health and supporting the community&apos;s
              physical, emotional, and spiritual well-being.
            </p>

            <Separator className="my-12" />

            <h2 className="font-serif text-3xl font-bold text-primary mb-8">
              Before & After Renovation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="font-semibold text-xl mb-4">Before</h3>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border shadow-md">
                  <Image
                    src="/images/clinic-story/clinic-before.jpg"
                    alt="Historic church building before renovation in Eva, Alabama"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  The 1892 church building stood vacant and weathered after 25
                  years of abandonment.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-4">After</h3>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border shadow-md">
                  <Image
                    src="/images/clinic-story/clinic-after.jpg"
                    alt="Renovated Health in Hand clinic building in Eva, Alabama"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  The restored clinic honors the building&apos;s history while
                  providing a welcoming space for natural healthcare.
                </p>
              </div>
            </div>

            <Separator className="my-12" />

            <h2 className="font-serif text-3xl font-bold text-primary mb-6">
              Our Location
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Located in rural Alabama between Huntsville and Cullman, the
              clinic serves a community that values natural remedies, wholesome
              living, and faith-based healing. The transformation of this
              abandoned church into a thriving health clinic represents more
              than just a renovation—it symbolizes the renewal and restoration
              that Health in Hand seeks to bring to each client.
            </p>

            <Separator className="my-12" />

            <h2 className="font-serif text-3xl font-bold text-primary mb-6">
              Spiritual Foundation
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              At Health in Hand, we recognize the importance of addressing not
              just the physical body, but also emotional and spiritual health.
              The clinic&apos;s foundation in a historic church building serves as a
              daily reminder of our commitment to holistic care—treating the
              whole person, not just symptoms.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              We believe in the healing power that comes from natural remedies,
              proper nutrition, emotional balance, and spiritual grounding. The
              hand of the Lord has guided this clinic from its beginning, and we
              continue to seek wisdom in serving our clients.
            </p>

            <Separator className="my-12" />

            <h2 className="font-serif text-3xl font-bold text-primary mb-6">
              Our Focus
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="p-6 border rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Health Conditions</h3>
                <p className="text-muted-foreground">
                  Chronic diseases and health conditions
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Emotional Health</h3>
                <p className="text-muted-foreground">
                  Emotional issues and stress management
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Natural Remedies</h3>
                <p className="text-muted-foreground">
                  Alternative therapies and holistic approaches
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Education</h3>
                <p className="text-muted-foreground">
                  Health care classes and nutritional guidance
                </p>
              </div>
            </div>

            <p className="text-lg leading-relaxed">
              Health in Hand serves the rural communities surrounding Eva,
              Alabama, providing access to natural healthcare options that might
              otherwise require traveling to larger cities. The clinic offers an
              alternative to conventional medicine for those seeking natural,
              holistic approaches to health.
            </p>
          </div>
        </div>
      </Container>
    </article>
  );
}
