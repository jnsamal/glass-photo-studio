import { Aperture, Heart, Users } from "lucide-react";
import GlassPane from "./GlassPane";

const services = [
  {
    icon: Users,
    title: "Portrait sessions",
    price: "From ₹6,500",
    description:
      "One-on-one or family sessions in the studio or on location, edited to look like you on a good day.",
    includes: ["60–90 minute session", "20 edited images", "Print-ready + web files"],
  },
  {
    icon: Heart,
    title: "Wedding coverage",
    price: "From ₹45,000",
    description:
      "Full-day documentary coverage that follows the light and the room, not a rigid shot list.",
    includes: ["Up to 10 hours", "Two photographers", "400+ edited images"],
  },
  {
    icon: Aperture,
    title: "Editorial & brand",
    price: "From ₹18,000",
    description:
      "Product, lifestyle, and portrait work for small brands who want their imagery to feel considered.",
    includes: ["Half or full day", "Art direction included", "Fast 5-day turnaround"],
  },
];

export default function Services() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-[11px] uppercase tracking-wider text-sky-700">
          What we shoot
        </p>
        <h2 className="mt-2 max-w-lg text-balance font-display text-3xl font-medium text-ink-900 sm:text-4xl">
          Three ways to work with the studio
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {services.map(({ icon: Icon, title, price, description, includes }) => (
            <GlassPane key={title} className="flex h-full flex-col p-6 sm:p-7">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                <Icon className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <h3 className="mt-5 font-display text-xl text-ink-900">{title}</h3>
              <p className="mt-1 font-mono text-xs text-sky-700">{price}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">{description}</p>
              <ul className="mt-5 space-y-2 border-t border-sky-200/70 pt-4 text-sm text-ink-700">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sky-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassPane>
          ))}
        </div>
      </div>
    </section>
  );
}
