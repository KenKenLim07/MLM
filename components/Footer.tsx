type FooterProps = {
  brandName: string;
  location: string;
};

export default function Footer({ brandName, location }: FooterProps) {
  return (
    <footer className="border-t border-rose-100 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-stone-600 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>&copy; {new Date().getFullYear()} {brandName}. All rights reserved.</p>
        <p>{location}</p>
      </div>
    </footer>
  );
}
