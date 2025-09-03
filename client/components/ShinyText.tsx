import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

const ShinyText = ({
  children,
  speedInMs = 5000,
  className,
  ...props
}: {
  children: ReactNode;
  speedInMs?: number;
} & ComponentProps<"span">) => {
  return (
    <>
      <style>
        {`
        @keyframes shine {
          0% {
            background-position: 200% center;
          }
          100% {
            background-position: -200% center;
          }
        }
        `}
      </style>
      <span
        className={cn(
          "bg-clip-text text-transparent",
          "bg-gradient-to-r",
          "from-neutral-400 via-neutral-950 to-neutral-400",
          "dark:from-neutral-500 dark:via-neutral-50 dark:to-neutral-500",
          className,
        )}
        style={{
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          animation: `shine ${speedInMs}ms ease-in-out infinite`,
        }}
        {...props}
      >
        {children}
      </span>
    </>
  );
};

export default ShinyText;
