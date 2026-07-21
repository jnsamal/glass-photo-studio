"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import ApertureMark from "./ApertureMark";

const links = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
      <div className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-display text-lg font-medium tracking-tight text-ink-900"
          onClick={() => setOpen(false)}
        >
          <ApertureMark className="h-6 w-6 text-sky-600" />
          Skyglass
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "rounded-full px-4 py-2 text-sm transition-colors",
                  active
                    ? "bg-white/70 text-ink-900 shadow-sm"
                    : "text-ink-700 hover:bg-white/40 hover:text-ink-900"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full bg-gradient-to-b from-sky-500 to-sky-600 px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_24px_-10px_rgba(46,134,190,0.7)] transition hover:from-sky-400 hover:to-sky-500 sm:inline-block"
        >
          Book a session
        </Link>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink-900 sm:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="glass glass-strong mx-auto mt-2 max-w-6xl rounded-2xl p-3 sm:hidden">
          <nav className="flex flex-col">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "rounded-xl px-4 py-3 text-sm",
                  pathname === link.href
                    ? "bg-white/70 text-ink-900"
                    : "text-ink-700"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-gradient-to-b from-sky-500 to-sky-600 px-4 py-3 text-center text-sm font-medium text-white"
            >
              Book a session
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
