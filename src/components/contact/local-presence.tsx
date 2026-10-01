import { Building2, ExternalLink, MapPin } from "lucide-react";

import { MapEmbed } from "@/components/contact/map-embed";
import { businessLocation, hasBusinessAddress } from "@/config/site";

function getAddressLine() {
  return [
    businessLocation.street,
    businessLocation.city,
    businessLocation.region,
    businessLocation.postalCode,
    businessLocation.country,
  ]
    .filter(Boolean)
    .join(", ");
}

export function LocalPresence() {
  const address = getAddressLine();

  if (!hasBusinessAddress) {
    return (
      <section className="mx-auto mt-6 max-w-4xl rounded-2xl border border-dashed border-border-strong bg-surface/75 p-6 sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary">
            <Building2 className="size-5" />
          </span>
          <div>
            <h2 className="font-display text-xl font-semibold tracking-tight">Atención en línea</h2>
            <p className="mt-1.5 text-sm leading-6 text-muted">
              Actualmente atendemos consultas por canales digitales. El mapa y las indicaciones se publicarán cuando exista una dirección de atención confirmada.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const encodedAddress = encodeURIComponent(address);
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <section className="mx-auto mt-6 max-w-4xl overflow-hidden rounded-[2rem] border border-border bg-surface shadow-card">
      <div className="grid lg:grid-cols-[.78fr_1.22fr]">
        <div className="flex flex-col justify-center p-7 sm:p-9">
          <span className="flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
            <MapPin className="size-5" />
          </span>
          <h2 className="mt-6 font-display text-2xl font-semibold tracking-tight">Visítanos</h2>
          <address className="mt-3 not-italic text-sm leading-6 text-muted">{address}</address>
          {businessLocation.phone && (
            <a className="mt-2 text-sm font-semibold text-primary" href={`tel:${businessLocation.phone}`}>{businessLocation.phone}</a>
          )}
          <a
            href={directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-primary hover:text-primary-strong"
          >
            Cómo llegar <ExternalLink className="size-4" />
          </a>
        </div>
        <MapEmbed src={mapEmbedUrl} title={`Mapa de ${address}`} />
      </div>
    </section>
  );
}
