import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chapter Committees",
  description: "Chapter committees and their leads for the Anthony Halberstadt Chapter, Sons of the American Revolution, 2025-2026.",
};

const committees = [
  { name: "Programs", lead: "Jeffrey W. Jones" },
  { name: "Membership", lead: "Jeffrey W. Jones" },
  { name: "Service", lead: "A. Ronald Kohart" },
  { name: "Youth Poster", lead: "A. Ray King" },
  { name: "Youth Brochure", lead: "A. Ray King" },
  { name: "Knight Essay", lead: "A. Ray King" },
  { name: "Orations", lead: "TBD" },
  { name: "History Teacher", lead: "Asa D. Dunnington" },
  { name: "Eagle Scout", lead: "James T. Burk" },
  { name: "ROTC/JRTOC", lead: "Gary R. Stebbins" },
  { name: "Veterans & Patriotism", lead: "Gary R. Stebbins" },
  { name: "Flag Recognition", lead: "Gary R. Stebbins" },
  { name: "America 250th", lead: "A. Ron Kohart" },
  { name: "American Legion Boys State", lead: "TBD" },
  { name: "Newsletter & Publications", lead: "Brett Hahn" },
  { name: "Press Awareness", lead: "TBD" },
  { name: "Medals & Awards", lead: "Dr. William Pond" },
  { name: "Public Service and Heroism", lead: "Gregory L. Stier" },
  { name: "Patriot Grave Marking", lead: "Gregory L. Stier" },
  { name: "Webmaster", lead: "Brett Hahn" },
  { name: "Americanism", lead: "Jeffrey W. Jones" },
  { name: "DAR Liaison", lead: "TBD" },
  { name: "CAR Liaison", lead: "Benita Stayer" },
  { name: "Library", lead: "TBD" },
];

export default function CommitteesPage() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-navy text-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-parchment mb-4">Chapter Committees</h1>
          <p className="text-gold text-lg">2025-2026</p>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-gold" />
        </div>
      </section>

      <section className="py-20 bg-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link href="/about" className="inline-flex items-center gap-1 text-colonial hover:text-colonial/80 font-semibold mb-8 transition-colors">
            &larr; Back to About
          </Link>
          <p className="text-navy/70 text-lg mb-8">
            The following committees have been established within the Anthony Halberstadt Chapter.
          </p>
          <div className="overflow-hidden rounded-lg border border-navy/10">
            <table className="w-full">
              <thead>
                <tr className="bg-gold text-navy">
                  <th className="text-left px-5 py-3 font-semibold text-sm uppercase tracking-wide">Committee</th>
                  <th className="text-left px-5 py-3 font-semibold text-sm uppercase tracking-wide">Lead</th>
                </tr>
              </thead>
              <tbody>
                {committees.map((c, i) => (
                  <tr key={c.name} className={i % 2 === 0 ? "bg-white" : "bg-parchment"}>
                    <td className="px-5 py-3 text-navy font-medium">{c.name}</td>
                    <td className="px-5 py-3 text-navy/70">{c.lead}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
