import { cn } from "@/lib/utils";

function Input({ className, type = "text", ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Layout & Spacing
        "flex w-full rounded-md border px-3 py-2 text-base md:text-sm",

        // Background & Border
        "bg-white dark:bg-neutral-900 border-gray-300 dark:border-neutral-700",

        // Text & Placeholder
        "text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500",

        // Disabled State
        "disabled:cursor-not-allowed disabled:opacity-50",

        // Selection Style
        "selection:bg-blue-500 selection:text-white",

        // Error State via aria
        "aria-invalid:border-red-500 aria-invalid:ring-red-500/30",

        className
      )}
      {...props}
    />
  );
}

export { Input };
