import { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Join",
  description: "Join the Anthony Halberstadt Chapter of the Sons of the American Revolution. Learn about eligibility, how to prove patriot lineage, and apply for membership.",
};

export default function JoinPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-navy text-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Join the SAR</h1>
          <p className="text-parchment/70 text-lg">Take your place in the unbroken chain of American patriot heritage</p>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-gold" />
        </div>
      </section>

      {/* What is SAR */}
      <section className="py-20 bg-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeading title="What Is the SAR?" />
          <div className="space-y-4 text-navy/80 text-lg leading-relaxed">
            <p>
              The Sons of the American Revolution is the leading male lineage society in the United States, founded in 1889. With over 37,000 members and more than 500 chapters across the country, the SAR is dedicated to promoting patriotism, preserving American history, and honoring the men and women who achieved our independence.
            </p>
            <p>
              Membership is open to any man who can prove lineal descent from a patriot who served the American cause during the period 1774 to 1783. This includes military service, civil service, or other forms of support for American independence.
            </p>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Eligibility" subtitle="Who can join?" />
          <div className="space-y-4 text-navy/80 text-lg leading-relaxed">
            <p>
              Any male, 18 years of age or older, who can establish his lineal descent from an ancestor who was a patriot during the American Revolution is eligible.
            </p>
            <p className="font-semibold text-navy">A &quot;patriot&quot; includes anyone who:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Served in the military forces of the colonies or states</li>
              <li>Served in a civil capacity in the colonies or states</li>
              <li>Signed the Declaration of Independence, Articles of Confederation, or the Constitution</li>
              <li>Provided material aid or support to the American cause</li>
              <li>Took an oath of allegiance or fidelity to one of the new states</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How to Prove Lineage */}
      <section className="py-20 bg-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Proving Your Lineage" subtitle="Step by step" />
          <div className="space-y-6">
            {[
              { step: "1", title: "Research your family tree", desc: "Trace your family history generation by generation back to the Revolutionary era. Birth, marriage, and death records are key." },
              { step: "2", title: "Identify your patriot ancestor", desc: "Determine which ancestor(s) served the American cause. Military records, pension files, and DAR records are excellent sources." },
              { step: "3", title: "Gather documentation", desc: "Collect copies of vital records, census data, and service records that establish each generational link." },
              { step: "4", title: "Submit your application", desc: "Complete the SAR application with your documented lineage. Our chapter registrar can help you through the process." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-colonial text-parchment flex items-center justify-center font-serif font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-serif text-xl text-navy font-bold">{item.title}</h3>
                  <p className="text-navy/70 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="https://www.sar.org/how-to-apply/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-colonial text-parchment px-8 py-3 font-semibold rounded hover:bg-colonial/90 transition-colors"
            >
              Apply at SAR.org
            </a>
          </div>
        </div>
      </section>

      {/* Interest Form */}
      <section className="py-20 bg-navy text-parchment">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Express Interest" subtitle="We'll help you get started" light />
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
