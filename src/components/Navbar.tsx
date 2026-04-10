"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/about", label: "About the Chapter" },
      { href: "/about/officers", label: "Chapter Officers" },
      { href: "/about/committees", label: "Chapter Committees" },
    ],
  },
  { href: "/join", label: "Join" },
  { href: "/history", label: "History" },
  { href: "/members", label: "Member Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center">
              <span className="text-gold font-serif text-sm font-bold">SAR</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-parchment font-serif text-sm font-semibold leading-tight">Anthony Halberstadt</p>
              <p className="text-gold/70 text-xs">Sons of the American Revolution</p>
            </div>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative group"
                  onMouseEnter={() => setAboutOpen(true)}
                  onMouseLeave={() => setAboutOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="text-parchment/80 hover:text-gold text-sm font-medium transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  {aboutOpen && (
                    <div className="absolute top-full left-0 pt-1">
                      <div className="bg-navy border border-gold/20 rounded-lg py-2 min-w-[200px] shadow-lg">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-parchment/80 hover:text-gold hover:bg-parchment/5 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-parchment/80 hover:text-gold text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-parchment p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy border-t border-gold/20">
          <div className="px-4 py-3 space-y-2">
            {links.map((link) =>
              link.children ? (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-parchment/80 hover:text-gold py-2 text-sm font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                  <div className="pl-4 space-y-1">
                    {link.children.filter((c) => c.href !== link.href).map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block text-parchment/60 hover:text-gold py-1.5 text-sm transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-parchment/80 hover:text-gold py-2 text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
