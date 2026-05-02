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

export default function Navbar({ brandName, logoPath }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-rose-100/80 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="flex items-center gap-3">
          {logoPath ? (
            <Image
              src={logoPath}
              alt={`${brandName} logo`}
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
              priority
            />
          ) : null}
          <span className="font-serif text-xl font-semibold tracking-wide text-rose-950 transition-colors duration-200 hover:text-rose-700">
            {brandName}
          </span>
        </a>
        <ul className="flex items-center gap-1 sm:gap-2">
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
      </nav>
    </header>
  );
}
