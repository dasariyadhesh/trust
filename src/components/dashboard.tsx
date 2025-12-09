import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Dashboard() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-24 items-center justify-between px-4">
        <div className="flex gap-4 items-center">
          <Logo />
          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground font-headline">
              Bhu Seva Public Charitable Trust
            </h1>
            <p className="text-sm text-muted-foreground hidden md:block">
              Serving Humanity, Nurturing Nature
            </p>
          </div>
        </div>
        <nav className="hidden md:flex gap-4">
          <Button variant="ghost" asChild className="bg-saffron-100 text-saffron-900 hover:bg-saffron-100/80">
            <Link href="#about">About Us</Link>
          </Button>
          <Button variant="ghost" asChild className="bg-saffron-100 text-saffron-900 hover:bg-saffron-100/80">
            <Link href="#contact">Contact Us</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
