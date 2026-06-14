import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ChipProps {
  to: string;
  children: ReactNode;
  className?: string;
}

export function Chip({ to, children, className = "" }: ChipProps) {
  return (
    <Link to={to} className={`chip ${className}`}>
      {children}
    </Link>
  );
}
