import { ReactNode, CSSProperties } from "react";
import { Link } from "react-router-dom";

interface ChipProps {
  to?: string;
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  style?: CSSProperties;
}

export function Chip({ to, href, children, className = "", onClick, style }: ChipProps) {
  const baseClasses = `chip ${className}`;
  
  if (to) {
    return (
      <Link to={to} className={baseClasses} style={style} onClick={onClick}>
        {children}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a href={href} className={baseClasses} style={style} onClick={onClick}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={baseClasses} style={style} onClick={onClick}>
      {children}
    </button>
  );
}
