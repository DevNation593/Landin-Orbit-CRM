"use client";

import { useState } from "react";
import { Map } from "lucide-react";

export function MapEmbed({ src, title }: { src: string; title: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  if (!isLoaded) {
    return (
      <div className="dot-grid flex h-[340px] items-center justify-center bg-surface-soft p-6 lg:h-full lg:min-h-[360px]">
        <div className="max-w-xs text-center">
          <span className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-surface text-primary shadow-card"><Map className="size-5" /></span>
          <p className="mt-4 text-sm font-bold">Mapa externo</p>
          <p className="mt-1.5 text-xs leading-5 text-muted">El mapa de Google se carga únicamente cuando lo solicitas.</p>
          <button
            type="button"
            onClick={() => setIsLoaded(true)}
            className="mt-4 rounded-full bg-primary px-4 py-2 text-xs font-bold text-white"
          >
            Cargar mapa
          </button>
        </div>
      </div>
    );
  }

  return (
    <iframe
      title={title}
      src={src}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="h-[340px] w-full border-0 lg:h-full lg:min-h-[360px]"
      allowFullScreen
    />
  );
}
