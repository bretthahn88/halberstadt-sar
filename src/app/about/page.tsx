import { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about the Anthony Halberstadt Chapter of the Sons of the American Revolution in Fort Wayne, Indiana. Chapter history, officers, and the frontier history of the American Revolution in Indiana.",
};

const officers = [
  { name: "President", title: "Chapter President" },
  { name: "Vice President", title: "Chapter Vice President" },
  { name: "Secretary", title: "Chapter Secretary" },
  { name: "Treasurer", title: "Chapter Treasurer" },
  { name: "Registrar", title: "Chapter Registrar" },
  { name: "Chaplain", title: "Chapter Chaplain" },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-navy text-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">About Our Chapter</h1>
          <p className="text-parchment/70 text-lg">Preserving the legacy of the American Revolution in northeast Indiana</p>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-gold" />
        </div>
      </section>

      {/* Chapter History */}
      <section className="py-20 bg-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Chapter History" />
          <div className="space-y-4 text-navy/80 text-lg leading-relaxed">
            <p>
              The Anthony Halberstadt Chapter was chartered by the Indiana Society of the Sons of the American Revolution to serve compatriots in the Fort Wayne and northeast Indiana region. Named for the Hessian soldier who chose the American cause at the Battle of Trenton, the chapter embodies the spirit of those who risked everything for liberty.
            </p>
            <p>
              Since its founding, the chapter has been dedicated to preserving the history, principles, and ideals of the American Revolution. Our members participate in patriotic observances, historical education programs, and community service activities that honor the sacrifices of our patriot ancestors.
            </p>
            <p>
              The chapter meets regularly in Fort Wayne, hosting speakers, conducting ceremonies, and building fellowship among compatriots who share a proven lineage to the founding generation.
            </p>
          </div>
        </div>
      </section>

      {/* Fort Wayne Frontier History */}
      <section className="py-20 bg-navy text-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Fort Wayne and the Revolution" light />
          <div className="space-y-4 text-parchment/80 text-lg leading-relaxed">
            <p>
              While the most famous battles of the American Revolution took place along the eastern seaboard, the war extended deep into the frontier. The land that would become Indiana was contested territory, home to the Miami, Shawnee, and other nations, and a strategic prize for both British and American forces.
            </p>
            <p>
              In 1779, Colonel George Rogers Clark led a legendary expedition through the Illinois Country. His audacious winter march to Fort Vincennes (Fort Sackville) stunned the British garrison under Lieutenant Governor Henry Hamilton. Clark&apos;s capture of Vincennes secured the Northwest Territory for the American cause and laid the groundwork for Indiana&apos;s future statehood.
            </p>
            <p>
              The Three Rivers area, where Fort Wayne now stands, was the heart of the Miami Confederacy and a vital crossroads of trade and military routes. The struggles and alliances formed here during the Revolution shaped the region for decades to come.
            </p>
          </div>
        </div>
      </section>

      {/* Officers */}
      <section className="py-20 bg-parchment">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Chapter Officers" subtitle="Current leadership" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {officers.map((officer) => (
              <div key={officer.title} className="bg-white p-6 rounded-lg border border-navy/5 shadow-sm text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-navy/10 flex items-center justify-center">
                  <span className="text-navy/40 font-serif text-xl">SAR</span>
                </div>
                <p className="text-sm text-gold font-semibold uppercase tracking-wide">{officer.title}</p>
                <p className="font-serif text-lg text-navy mt-1">Name TBD</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Presidents */}
      <section className="py-16 bg-navy/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Past Chapter Presidents" />
          <div className="bg-white rounded-lg border border-navy/5 p-8 text-center">
            <p className="text-navy/60 italic">Past presidents list coming soon.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
