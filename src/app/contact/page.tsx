import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import GlassPane from "@/components/GlassPane";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Skyglass Studio",
  description:
    "Get in touch with Skyglass Studio to book a portrait, wedding, or editorial session.",
};

const details = [
  { icon: MapPin, label: "Studio", value: "12 Glasshouse Lane, Millbrook" },
  { icon: Clock, label: "Hours", value: "Tue–Sat, 10am–6pm · Sessions by appointment" },
  { icon: Mail, label: "Email", value: "hello@skyglass.studio" },
  { icon: Phone, label: "Phone", value: "+91 123 456 7890" },
];

export default function ContactPage() {
  return (
    <section className="relative px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
      <div
        className="sky-blob animate-drift left-[10%] top-[6%] h-72 w-72 bg-sky-300/50"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <p className="font-mono text-[11px] uppercase tracking-wider text-sky-700">
          Get in touch
        </p>
        <h1 className="mt-2 max-w-xl text-balance font-display text-4xl font-medium text-ink-900 sm:text-5xl">
          Let&apos;s talk about your session
        </h1>
        <p className="mt-4 max-w-lg text-balance text-base leading-relaxed text-ink-700">
          Share a few details below and we&apos;ll reply within one business
          day with availability and next steps.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <GlassPane className="p-6 sm:p-9">
            <ContactForm />
          </GlassPane>

          <div className="flex flex-col gap-6">
            <GlassPane className="p-6 sm:p-7">
              <h2 className="font-display text-lg text-ink-900">Studio details</h2>
              <ul className="mt-4 space-y-4">
                {details.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                      <Icon className="h-4 w-4" strokeWidth={1.6} />
                    </span>
                    <span>
                      <span className="block font-mono text-[10px] uppercase tracking-wider text-ink-500">
                        {label}
                      </span>
                      <span className="text-sm text-ink-900">{value}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </GlassPane>

            <GlassPane
              tone="soft"
              className="relative flex h-48 items-center justify-center overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--sky-300) 1px, transparent 1px), linear-gradient(90deg, var(--sky-300) 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />
              <div className="relative flex flex-col items-center gap-2 text-sky-700">
                <MapPin className="h-7 w-7" strokeWidth={1.6} />
                <span className="font-mono text-[11px] uppercase tracking-wider">
                  Millbrook Studio District
                </span>
              </div>
            </GlassPane>
          </div>
        </div>
      </div>
    </section>
  );
}
