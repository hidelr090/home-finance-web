import type { FormHTMLAttributes } from "react";
import '@components/Form/style.css'

type FormProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
} & FormHTMLAttributes<HTMLFormElement>;

export default function Form({
  children,
  className = "",
  style,
  ...rest
}: FormProps) {
  return (
    <form className={`${className} default-form`.trim()} style={style} {...rest}>
      {children}
    </form>
  );
}
