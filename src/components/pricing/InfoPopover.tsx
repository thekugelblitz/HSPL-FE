import React, { useState, useRef, useEffect } from "react";
import { HelpCircle } from "lucide-react";

interface InfoPopoverProps {
  content: string;
}

export function InfoPopover({ content }: InfoPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-flex items-center ml-1" ref={popoverRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        className="text-muted-foreground hover:text-primary transition-colors p-0.5 rounded-full focus:outline-none"
        aria-label="More Information"
      >
        <HelpCircle className="w-3.5 h-3.5" />
      </button>

      {isOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 p-3 bg-popover text-popover-foreground text-[11px] rounded-xl border border-border shadow-xl z-50 animate-in fade-in-0 zoom-in-95">
          <p className="leading-snug font-medium text-foreground/90">{content}</p>
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-popover" />
        </div>
      )}
    </div>
  );
}
