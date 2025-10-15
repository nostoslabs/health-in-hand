import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SERVICES } from "@/lib/constants";

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {SERVICES.map((service) => (
        <Card key={service.name} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg">{service.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              {service.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
