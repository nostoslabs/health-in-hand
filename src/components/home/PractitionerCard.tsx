import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PractitionerCardProps {
  name: string;
  title: string;
  specialties: string[];
  bio: string;
  image: string;
}

export function PractitionerCard({
  name,
  title,
  specialties,
  bio,
  image,
}: PractitionerCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-start gap-4 mb-4">
          <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>
          <div>
            <CardTitle className="text-2xl font-serif mb-1">{name}</CardTitle>
            <p className="text-sm text-muted-foreground">{title}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed mb-4">{bio}</p>
        <div className="space-y-2">
          <p className="text-sm font-semibold">Specialties:</p>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty) => (
              <Badge key={specialty} variant="secondary">
                {specialty}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
