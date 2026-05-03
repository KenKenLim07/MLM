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
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden
    >
      <path
        d="M5 7h14"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        className="origin-center transition-[transform,opacity] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          transform: open
            ? "translateY(5px) rotate(45deg)"
            : "translateY(0) rotate(0deg)",
          transformOrigin: "12px 7px",
        }}
      />
      <path
        d="M5 12h14"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        className="transition-opacity duration-200 ease-out"
        style={{ opacity: open ? 0 : 1 }}
      />
      <path
        d="M5 17h14"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        className="origin-center transition-[transform,opacity] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          transform: open
            ? "translateY(-5px) rotate(-45deg)"
            : "translateY(0) rotate(0deg)",
          transformOrigin: "12px 17px",
        }}
      />
    </svg>
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
    <header className="relative sticky top-0 z-40 border-b border-rose-100/80 bg-white/90 backdrop-blur-md">
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
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-rose-950 transition-colors hover:bg-rose-50 active:bg-rose-100/80 md:hidden"
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
          className={`fixed inset-0 top-16 z-30 bg-stone-900/20 backdrop-blur-[2px] transition-opacity duration-200 ease-out ${
            open ? "opacity-100" : "pointer-events-none opacity-0"
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
          className={`absolute left-0 right-0 top-full z-40 overflow-hidden border-b border-rose-100/90 bg-white/95 shadow-[0_12px_40px_-12px_rgba(76,29,29,0.12)] backdrop-blur-md transition-[max-height,opacity,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open
              ? "max-h-64 translate-y-0 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-1 opacity-0"
          }`}
        >
          <ul className="flex flex-col px-5 py-4 sm:px-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex min-h-11 items-center rounded-xl px-4 text-base font-medium text-stone-800 transition-colors hover:bg-rose-50 hover:text-rose-900 active:bg-rose-100/60"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
