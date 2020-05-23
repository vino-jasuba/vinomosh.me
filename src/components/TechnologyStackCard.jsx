import React from "react";

export default function TechnologyStackCard({ technology }) {
  return (
    <div className="bg-dusk p-8 mt-2 transform hover:scale-110 transition">
      <h3 className="uppercase text-xs font font-semibold tracking-widest">
        {technology.category}
      </h3>
      <h2 className="text-2xl">{technology.name}</h2>
      <p className="text-sx text-dawn">{technology.summary}</p>
      <div className="text-dawn text-xs ml-2">{technology.stars}</div>
    </div>
  );
}
