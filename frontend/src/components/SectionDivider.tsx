import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
  showLines?: boolean;
}

export function SectionDivider({
  className,
  showLines = false,
}: SectionDividerProps): JSX.Element {
  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={cn("flex items-center justify-center gap-3", className)}
    >
      {showLines ? <span className="h-px w-10 bg-rose-deep/25" /> : null}
      <svg
        viewBox="0 0 24 24"
        className="h-3 w-3 text-rose-deep"
        fill="currentColor"
        focusable="false"
      >
        <path d="M12 2c-1 6-4 9-10 10 6 1 9 4 10 10 1-6 4-9 10-10-6-1-9-4-10-10z" />
      </svg>
      {showLines ? <span className="h-px w-10 bg-rose-deep/25" /> : null}
    </div>
  );
}
