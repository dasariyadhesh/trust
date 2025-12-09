import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('h-8 w-8 text-primary', className)}
    >
      <title>Bhusha Meditation Logo</title>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M12 12m-4 0a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
      <path d="M8.5 15.5c.62-.63 1.4-1 2.22-1.21" />
      <path d="M15.5 15.5c-.62-.63-1.4-1-2.22-1.21" />
      <path d="M12 6.5V9" />
      <path d="M17.5 12h-2.5" />
      <path d="M6.5 12h2.5" />
    </svg>
  );
}
