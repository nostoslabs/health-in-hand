import Link from "next/link";
import { Facebook } from "lucide-react";
import {
  SITE_NAME,
  PHONE,
  EMAIL,
  ADDRESS,
  CITY_STATE_ZIP,
  BUSINESS_HOURS,
  NAVIGATION_LINKS,
  SOCIAL_LINKS,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-serif text-lg font-bold text-primary mb-4">
              {SITE_NAME}
            </h3>
            <p className="text-sm text-muted-foreground">
              Natural Healthcare Clinic
              <br />
              {ADDRESS}
              <br />
              {CITY_STATE_ZIP}
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Contact</h3>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Phone:</strong> {PHONE}
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="hover:text-primary transition-colors"
              >
                {EMAIL}
              </a>
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              <strong>Hours:</strong>
              <br />
              {BUSINESS_HOURS.weekdays}
              <br />
              {BUSINESS_HOURS.weekend}
            </p>
            <div className="flex items-center gap-2">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation Section */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
