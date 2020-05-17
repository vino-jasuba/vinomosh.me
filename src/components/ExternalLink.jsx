import React from "react";

export default function ExternalLink({ children, to }) {
  return (
    <a
      className="text-white underline"
      target="_blank"
      rel="noopener noreferrer"
      href={to}
    >
      {children}
    </a>
  );
}
