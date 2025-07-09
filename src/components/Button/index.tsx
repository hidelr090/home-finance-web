import type { ButtonHTMLAttributes } from "react";
import '@components/Button/style.css';

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className,
  style,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${className ?? ""} default-button`.trim()}
      style={style}
      {...rest}
    >
      {children}
    </button>
  );
}
