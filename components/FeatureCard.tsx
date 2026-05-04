import type { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <article className="rounded-3xl border border-rose-100 bg-white p-6 shadow-[0_10px_36px_-30px_rgba(136,19,55,0.5)]">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-rose-100 text-rose-800">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-rose-950">
        <span
          className="inline-block"
          style={{ textShadow: "0 0 14px rgba(136,19,55,0.28), 0 0 8px rgba(251,191,36,0.2)" }}
        >
          {title}
        </span>
      </h3>
      <p className="mt-2 text-sm leading-6 text-stone-600">{description}</p>
    </article>
  );
}
