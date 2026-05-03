import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

type NavbarProps = {
  brandName: string;
  logoPath?: string;
};

/** Burger → X driven only by CSS (`details.group` + `group-open:`), no client JS. */
function AnimatedBurgerIcon() {
  return (
    <span className="relative block h-3.5 w-6 shrink-0" aria-hidden>
      <span className="absolute left-0 top-0 h-0.5 w-full origin-center rounded-full bg-current transition-[transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-open:translate-y-[6px] group-open:rotate-45" />
      <span className="absolute left-0 top-1/2 h-0.5 w-full origin-center -translate-y-1/2 rounded-full bg-current transition-opacity duration-200 ease-out group-open:opacity-0" />
      <span className="absolute bottom-0 left-0 h-0.5 w-full origin-center rounded-full bg-current transition-[transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-open:-translate-y-[6px] group-open:-rotate-45" />
    </span>
  );
}

/**
 * Mobile menu uses <details>/<summary> so open/close works with zero JavaScript
 * (hydration, HMR, or blocked scripts won’t break the dropdown).
 */
export default function Navbar({ brandName, logoPath }: NavbarProps) {
  return (
    <header className="sticky top-0 z-[100] border-b border-rose-100/80 bg-white/90 backdrop-blur-md">
      <nav
        className="relative mx-auto grid h-16 w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 sm:px-8"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="flex min-w-0 items-center gap-3 pr-1 [-webkit-tap-highlight-color:transparent]"
        >
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
          <span className="min-w-0 truncate font-serif text-xl font-semibold tracking-wide text-rose-950 transition-colors duration-200 hover:text-rose-700">
            {brandName}
          </span>
        </a>

        <div className="flex items-center justify-end gap-1">
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

          <details className="group relative z-[110] md:hidden">
            <summary
              className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full text-rose-950 [-webkit-tap-highlight-color:transparent] touch-manipulation transition-colors hover:bg-rose-50 active:bg-rose-100/80 [&::-webkit-details-marker]:hidden"
              aria-label="Menu"
            >
              <span className="sr-only">Open or close menu</span>
              <AnimatedBurgerIcon />
            </summary>
            <div className="fixed inset-x-0 top-16 z-[95] max-h-[min(80dvh,24rem)] overflow-y-auto overscroll-contain border-b border-rose-100/90 bg-white/98 shadow-[0_12px_40px_-12px_rgba(76,29,29,0.15)]">
              <ul className="flex flex-col px-5 py-4 sm:px-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="flex min-h-12 items-center rounded-xl px-4 text-lg font-medium text-stone-800 transition-colors hover:bg-rose-50 hover:text-rose-900 active:bg-rose-100/60"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
