import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  primary: "bg-memorial-red text-white hover:bg-memorial-red/90 shadow-lg shadow-memorial-red/20",
  secondary: "bg-emerald text-white hover:bg-emerald/90 shadow-lg shadow-emerald/20",
  outline: "border-2 border-navy/20 text-navy hover:bg-navy/5",
  ghost: "text-navy hover:bg-navy/5",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 cursor-pointer",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    if (href.startsWith("http")) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
