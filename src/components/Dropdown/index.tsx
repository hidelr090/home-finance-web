// components/Dropdown.tsx
import { useState } from "react";
import "@components/Dropdown/style.css";

type DropdownProps = {
  options: string[];
  placeholder?: string;
  onSelect?: (value: string) => void;
};

export default function Dropdown({ options, placeholder = "Selecione", onSelect }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelected(value);
    setIsOpen(false);
    onSelect?.(value);
  };

  return (
    <div className="dropdown">
      <button type="button" className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        {selected || placeholder}
      </button>

      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((opt) => (
            <li key={opt} onClick={() => handleSelect(opt)}>
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
