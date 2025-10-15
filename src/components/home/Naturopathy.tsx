import { Container } from "@/components/layout/Container";

export function Naturopathy() {
  return (
    <section className="py-16 bg-muted/30">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
            What is Naturopathy?
          </h2>
          <p className="text-lg leading-relaxed">
            Naturopathy is a science-based healing art which employs natural
            agencies such as heat, water, light, air, and massage along with
            natural remedies. It encourages right mental attitudes, proper
            nutrition, internal cleanliness, and beneficial lifestyle and
            livity.
          </p>
        </div>
      </Container>
    </section>
  );
}
