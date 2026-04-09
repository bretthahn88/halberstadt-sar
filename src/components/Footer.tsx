import Link from "next/link";

const quickLinks = [
  { href: "/about", label: "About the Chapter" },
  { href: "/join", label: "Become a Member" },
  { href: "/history", label: "History" },
  { href: "/members", label: "Member Resources" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-parchment/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl text-parchment mb-2">Anthony Halberstadt Chapter</h3>
            <p className="text-sm italic text-gold/80">Libertas et Patria</p>
            <p className="text-sm mt-3">Sons of the American Revolution<br />Fort Wayne, Indiana</p>
          </div>

          <div>
            <h4 className="font-serif text-lg text-parchment mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-parchment mb-3">National Organizations</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.sar.org" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  National SAR (sar.org)
                </a>
              </li>
              <li>
                <a href="https://www.indiana-sar.org" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  Indiana Society SAR
                </a>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-gold/10 rounded border border-gold/20">
              <p className="text-xs text-gold font-semibold">America 250</p>
              <p className="text-xs mt-1">Celebrating 250 years of American independence, July 4, 2026</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-parchment/10 text-center text-xs text-parchment/40">
          &copy; 2026 Anthony Halberstadt Chapter, Indiana Society SAR. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
