import React from "react";
import '@components/Input/style.css';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ id, className = "", ...rest }: InputProps) {
  return <input id={id} className={`${className} default-input`} {...rest} />;
}
