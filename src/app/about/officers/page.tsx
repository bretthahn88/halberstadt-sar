import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chapter Officers",
  description: "Meet the 2025-2026 officers and executive committee of the Anthony Halberstadt Chapter, Sons of the American Revolution, Fort Wayne, Indiana.",
};

const officers = [
  { role: "President", name: "Compatriot Jeffrey W. Jones" },
  { role: "Vice President", name: "Compatriot William Pond" },
  { role: "Secretary", name: "Compatriot Brett Hahn" },
  { role: "Assistant Secretary", name: "Ray King" },
  { role: "Registrar", name: "Compatriot Zach Washler" },
  { role: "Treasurer & Chaplain", name: "Compatriot Bob Scott" },
  { role: "Sergeant-At-Arms", name: "Compatriot Gary R. Stebbins" },
  { role: "Service Committee Chairman", name: "Compatriot Ron Kohart" },
  { role: "Genealogist", name: "Compatriot Jeffrey W. Jones" },
  { role: "Historian", name: "Compatriot Archie Lintz" },
];

export default function OfficersPage() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-navy text-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-parchment mb-4">Chapter Officers & Executive Committee</h1>
          <p className="text-gold text-lg">2025-2026</p>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-gold" />
        </div>
      </section>

      <section className="py-20 bg-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link href="/about" className="inline-flex items-center gap-1 text-colonial hover:text-colonial/80 font-semibold mb-8 transition-colors">
            &larr; Back to About
          </Link>
          <div className="grid sm:grid-cols-2 gap-4">
            {officers.map((officer) => (
              <div key={officer.role} className="bg-navy rounded-lg border-t-2 border-gold p-5">
                <p className="text-gold text-sm font-semibold uppercase tracking-wide">{officer.role}</p>
                <p className="font-serif text-lg text-parchment mt-1">{officer.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
