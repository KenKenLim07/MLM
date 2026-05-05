"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

type NavbarProps = {
  brandName: string;
  logoPath?: string;
};

function PremiumMenuIcon({ open }: { open: boolean }) {
  const curve = "cubic-bezier(0.4, 0, 0.2, 1)";
  return (
    <span className="relative block h-3.5 w-6 shrink-0 text-current" aria-hidden>
      <span
        className="absolute left-0 top-0 h-0.5 w-full rounded-full bg-current transition-transform duration-[250ms]"
        style={{
          transform: open ? "translateY(6px) rotate(45deg)" : "none",
          transitionTimingFunction: curve,
        }}
      />
      <span
        className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded-full bg-current transition-opacity duration-200 ease-out"
        style={{ opacity: open ? 0 : 1 }}
      />
      <span
        className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-current transition-transform duration-[250ms]"
        style={{
          transform: open ? "translateY(-6px) rotate(-45deg)" : "none",
          transitionTimingFunction: curve,
        }}
      />
    </span>
  );
}

export default function Navbar({ brandName, logoPath }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="relative sticky top-0 z-40 border-b border-rose-100/80 bg-white/85 shadow-[0_8px_28px_-26px_rgba(136,19,55,0.55)] backdrop-blur-lg">
      <nav
        className="relative z-50 mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8"
        aria-label="Primary"
      >
        <a href="#home" className="flex min-w-0 items-center gap-3">
          {logoPath ? (
            <Image
              src={logoPath}
              alt={`${brandName} logo`}
              width={40}
              height={40}
              className="h-10 w-10 shrink-0 rounded-full object-cover"
              priority
            />
          ) : null}
          <span className="truncate font-serif text-xl font-semibold tracking-wide text-rose-950 transition-colors duration-200 hover:text-rose-700">
            {brandName}
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex md:gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-stone-700 transition-colors duration-200 hover:bg-rose-50 hover:text-rose-800"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex h-11 w-11 shrink-0 cursor-pointer touch-manipulation items-center justify-center rounded-full text-rose-950 transition-colors hover:bg-rose-50 active:bg-rose-100/80 md:hidden [-webkit-tap-highlight-color:transparent]"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <PremiumMenuIcon open={open} />
        </button>
      </nav>

      <div className="md:hidden">
        <div
          className={`fixed inset-0 top-16 z-30 transition-opacity duration-300 ease-out ${
            open
              ? "bg-stone-950/45 opacity-100 backdrop-blur-md"
              : "pointer-events-none bg-transparent opacity-0 backdrop-blur-0"
          }`}
          aria-hidden
          onClick={() => setOpen(false)}
        />
        <div
          id={menuId}
          role="region"
          aria-label="Mobile navigation"
          aria-hidden={!open}
          inert={!open}
          className={`absolute left-2 right-2 top-[calc(100%+0.4rem)] z-40 grid rounded-2xl transition-[grid-template-rows,opacity,transform] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[grid-template-rows,transform] sm:left-4 sm:right-4 ${
            open
              ? "grid-rows-[1fr] border border-rose-100/80 bg-white/95 opacity-100 shadow-[0_20px_55px_-24px_rgba(76,29,29,0.26)] ring-1 ring-rose-100/60 backdrop-blur-xl"
              : "pointer-events-none grid-rows-[0fr] border-transparent bg-transparent opacity-0 shadow-none ring-0 backdrop-blur-0"
          } rounded-2xl`}
        >
          <div className="min-h-0 overflow-hidden">
            <ul
              className={`flex flex-col px-5 py-4 transition-[opacity,transform] ease-[cubic-bezier(0.4,0,0.2,1)] sm:px-8 ${
                open
                  ? "translate-y-0 opacity-100 duration-300"
                  : "translate-y-0 opacity-0 duration-100"
              }`}
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex min-h-11 touch-manipulation items-center rounded-xl px-4 py-3 text-base font-medium text-stone-800 transition-[background-color,color,transform] duration-200 hover:bg-rose-50 hover:text-rose-900 active:scale-[0.99] active:bg-rose-100/60"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
