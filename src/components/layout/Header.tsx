import Link from "next/link";
import { SITE_NAME, NAVIGATION_LINKS } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-serif text-2xl font-bold text-primary">
            {SITE_NAME}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation - Simplified for now */}
        <nav className="flex md:hidden">
          <Link href="/" className="text-sm font-medium px-3 py-2">
            Menu
          </Link>
        </nav>
      </div>
    </header>
  );
}
