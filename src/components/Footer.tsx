import Link from "next/link";
import { AtSign, Mail, Phone } from "lucide-react";
import ApertureMark from "./ApertureMark";

export default function Footer() {
  return (
    <footer className="px-4 pb-6 pt-16 sm:px-6 lg:px-10">
      <div className="glass mx-auto max-w-6xl rounded-3xl px-6 py-10 sm:px-10">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-display text-lg text-ink-900">
              <ApertureMark className="h-6 w-6 text-sky-600" />
              Skyglass Studio
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-700">
              Portraits, weddings, and editorial work, shot in natural light
              and framed with clarity.
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-sky-700">
              Navigate
            </p>
            <ul className="mt-3 space-y-2 text-sm text-ink-700">
              <li><Link href="/" className="hover:text-ink-900">Home</Link></li>
              <li><Link href="/gallery" className="hover:text-ink-900">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-ink-900">About</Link></li>
              <li><Link href="/contact" className="hover:text-ink-900">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-sky-700">
              Studio
            </p>
            <ul className="mt-3 space-y-2 text-sm text-ink-700">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-sky-600" strokeWidth={1.6} />
                <a href="mailto:hello@skyglass.studio" className="hover:text-ink-900">
                  hello@skyglass.studio
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-sky-600" strokeWidth={1.6} />
                <a href="tel:+911234567890" className="hover:text-ink-900">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <AtSign className="h-4 w-4 text-sky-600" strokeWidth={1.6} />
                <a href="#" className="hover:text-ink-900">
                  @skyglass.studio
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/60 pt-6 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Skyglass Studio. All rights reserved.</p>
          <p>Demonstration imagery courtesy of Unsplash photographers.</p>
        </div>
      </div>
    </footer>
  );
}
