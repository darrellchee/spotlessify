import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  [key: string]: any;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2 relative overflow-hidden";

  const variants = {
    primary: "bg-gradient-to-r from-accent-cyan to-accent-teal text-dark-bg hover:shadow-lg hover:shadow-accent-cyan/50",
    ghost:
      "bg-transparent text-white hover:bg-white/10 border border-white/20",
    outline:
      "border-2 border-accent-cyan text-accent-cyan hover:bg-accent-cyan/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        "button-shine",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
