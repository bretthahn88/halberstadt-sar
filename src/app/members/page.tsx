import { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Member Resources",
  description: "Member resources for the Anthony Halberstadt Chapter SAR. Newsletters, meeting minutes, photo gallery, and useful links for compatriots.",
};

const newsletters = [
  { title: "Spring 2026", date: "April 2026" },
  { title: "Winter 2025", date: "January 2026" },
  { title: "Fall 2025", date: "October 2025" },
  { title: "Summer 2025", date: "July 2025" },
];

export default function MembersPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-navy text-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Member Resources</h1>
          <p className="text-parchment/70 text-lg">Tools and information for compatriots</p>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-gold" />
        </div>
      </section>

      {/* Newsletters */}
      <section className="py-20 bg-parchment">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Newsletters" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsletters.map((nl) => (
              <div key={nl.title} className="bg-white p-6 rounded-lg border border-navy/5 shadow-sm text-center">
                <div className="w-full h-32 bg-navy/5 rounded mb-4 flex items-center justify-center">
                  <span className="text-navy/20 font-serif">PDF</span>
                </div>
                <h3 className="font-serif text-lg text-navy font-bold">{nl.title}</h3>
                <p className="text-navy/60 text-sm mt-1">{nl.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting Minutes */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Meeting Minutes" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsletters.map((nl) => (
              <div key={nl.title} className="bg-parchment p-6 rounded-lg border border-navy/5 shadow-sm text-center">
                <h3 className="font-serif text-lg text-navy font-bold">{nl.title}</h3>
                <p className="text-navy/60 text-sm mt-1">Minutes available soon</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dues & Links */}
      <section className="py-20 bg-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Dues & Resources" />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-navy/5 shadow-sm">
              <h3 className="font-serif text-2xl text-navy font-bold mb-3">Annual Dues</h3>
              <p className="text-navy/70 mb-4">
                Annual dues information and payment instructions will be posted here. Contact the chapter treasurer for current rates.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-navy/5 shadow-sm">
              <h3 className="font-serif text-2xl text-navy font-bold mb-3">SAR University</h3>
              <p className="text-navy/70 mb-4">
                Online educational resources from the National SAR, including courses on genealogy, history, and chapter management.
              </p>
              <a
                href="https://www.sar.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-colonial font-semibold hover:text-colonial/80 transition-colors"
              >
                Visit SAR.org &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Useful Links */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Useful Links" />
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "National SAR", url: "https://www.sar.org" },
              { label: "Indiana Society SAR", url: "https://www.indiana-sar.org" },
              { label: "Daughters of the American Revolution", url: "https://www.dar.org" },
              { label: "Ancestry.com", url: "https://www.ancestry.com" },
              { label: "FamilySearch.org", url: "https://www.familysearch.org" },
              { label: "Fold3 Military Records", url: "https://www.fold3.com" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-parchment p-4 rounded-lg border border-navy/5 hover:border-gold/50 transition-colors"
              >
                <span className="text-navy font-semibold">{link.label}</span>
                <span className="text-navy/40 text-sm block mt-1">{link.url}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-parchment">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Photo Gallery" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-square bg-navy/5 rounded-lg flex items-center justify-center">
                <span className="text-navy/20 font-serif text-sm">Photo {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
