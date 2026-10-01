import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/logo";
import { footerNavigation } from "@/config/navigation";
import { crmLinks, siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy text-white">
      <Container>
        <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.2fr_2fr] lg:gap-20">
          <div>
            <Link href="/" aria-label="Vantex CRM, inicio" className="inline-flex rounded-lg">
              <Logo inverse />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/48">
              El CRM configurable para gestionar clientes, procesos y oportunidades en cualquier industria.
            </p>
            <a href={`mailto:${siteConfig.email}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white">
              <Mail className="size-4 text-accent" /> {siteConfig.email}
            </a>
            <a href={crmLinks.register} data-track="footer_register_clicked" className="mt-7 flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-navy transition-transform hover:-translate-y-0.5">
              Comenzar gratis <ArrowUpRight className="size-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {Object.entries(footerNavigation).map(([group, links]) => (
              <div key={group}>
                <h2 className="text-xs font-bold tracking-[.12em] text-white uppercase">{group}</h2>
                <ul className="mt-5 space-y-3">
                  {links.map((link) => (
                    <li key={`${group}-${link.label}`}>
                      <Link href={link.href} className="text-sm text-white/45 transition-colors hover:text-white">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.copyrightOwner}. Todos los derechos reservados.</p>
          <p>Diseñado para adaptarse. Construido para crecer.</p>
        </div>
      </Container>
    </footer>
  );
}
