"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { mainNavigation } from "@/config/navigation";
import { crmLinks } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4">
      <Container>
        <nav
          aria-label="Navegación principal"
          className="glass relative flex min-h-16 items-center justify-between rounded-2xl border border-white/60 px-3 shadow-[0_8px_32px_rgba(22,32,60,.08)] dark:border-white/10 sm:px-4"
        >
          <Link
            href="/"
            aria-label="Vantex CRM, inicio"
            className="rounded-lg px-1 py-1"
            onClick={() => setIsOpen(false)}
          >
            <Logo />
          </Link>

          <div className="hidden items-center gap-0.5 xl:flex">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                scroll
                aria-current={pathname === item.href ? "page" : undefined}
                className={cn(
                  "rounded-full px-3 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-surface-soft hover:text-foreground",
                  pathname === item.href && "bg-primary-soft text-primary",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <Button asChild variant="ghost" size="sm">
              <a href={crmLinks.login} data-track="navbar_login_clicked">
                Iniciar sesión
              </a>
            </Button>
            <Button asChild size="sm">
              <a href={crmLinks.register} data-track="navbar_register_clicked">
                Comenzar gratis
                <ArrowUpRight />
              </a>
            </Button>
          </div>

          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-full border border-border bg-surface text-foreground sm:hidden"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>

          <div
            id="mobile-navigation"
            className={cn(
              "absolute inset-x-0 top-[calc(100%+.65rem)] origin-top rounded-2xl border border-border bg-surface p-3 shadow-float transition-all duration-200 sm:hidden",
              isOpen
                ? "visible translate-y-0 scale-100 opacity-100"
                : "invisible -translate-y-2 scale-[.98] opacity-0",
            )}
          >
            <div className="grid gap-1">
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  scroll
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={cn(
                    "rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-surface-soft hover:text-foreground",
                    pathname === item.href && "bg-primary-soft text-primary",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-border pt-3">
              <Button asChild variant="secondary" size="sm">
                <a href={crmLinks.login} data-track="mobile_login_clicked">
                  Ingresar
                </a>
              </Button>
              <Button asChild size="sm">
                <a href={crmLinks.register} data-track="mobile_register_clicked">
                  Comenzar
                </a>
              </Button>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
