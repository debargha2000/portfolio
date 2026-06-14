import { ReactNode, CSSProperties } from "react";
import { Link } from "react-router-dom";

interface UnderlineLinkProps {
  to?: string;
  href?: string;
  children: ReactNode;
  className?: string;
  type?: "u-link" | "link-line";
  onClick?: () => void;
  style?: CSSProperties;
}

export function UnderlineLink({ 
  to, 
  href, 
  children, 
  className = "", 
  type = "u-link",
  onClick, 
  style 
}: UnderlineLinkProps) {
  const baseClasses = `${type} ${className}`;
  
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
