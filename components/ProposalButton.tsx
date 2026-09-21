"use client";

import { useState } from "react";
import ProposalModal from "./ProposalModal";

export default function ProposalButton({
  className = "",
  label = "Request proposal",
}: {
  className?: string;
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  const [origin, setOrigin] = useState<{ x: number; y: number } | null>(null);

  return (
    <>
      <button
        type="button"
        onClick={(e) => {
          // The modal's reveal grows from the button; keyboard clicks report
          // (0, 0), so fall back to the button's own centre.
          const r = e.currentTarget.getBoundingClientRect();
          setOrigin(
            e.clientX || e.clientY
              ? { x: e.clientX, y: e.clientY }
              : { x: r.left + r.width / 2, y: r.top + r.height / 2 }
          );
          setOpen(true);
        }}
        data-cursor-hover
        className={className}
      >
        {label}
      </button>
      <ProposalModal open={open} origin={origin} onClose={() => setOpen(false)} />
    </>
  );
}
