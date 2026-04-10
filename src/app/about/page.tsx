import { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/SAR_about_page_hero_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-navy/50" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-parchment mb-4">About Our Chapter</h1>
          <p className="text-parchment/70 text-lg">Preserving the legacy of the American Revolution in northeast Indiana</p>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-gold" />
        </div>
      </section>

      {/* Our Namesake — Anthony Halberstadt */}
      <section className="py-20 bg-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Our Namesake: Anthony Halberstadt" />
          <div className="space-y-4 text-navy/80 text-lg leading-relaxed">
            <p>
              Anthony Halberstadt was born in Hessen-Kassel, Germany, around 1755. He came to America during the Revolutionary War as a Hessian soldier fighting for England. He was captured at Trenton on December 26, 1776, when General George Washington led his forces across the Delaware River and surprised the British garrison in the early morning hours.
            </p>
            <p>
              Rather than await prisoner exchange, Halberstadt made a fateful choice. His sympathies turned toward the American cause. He deserted the ranks of the English and became a driver for one of the Generals in the Continental Army. After independence was established, he retired to civil life, married an English lady named Sarah Miller, and had four children. He settled in Berks County, Pennsylvania, then around 1800 his family moved by flatboat down the Ohio River to Fort Washington (near Cincinnati), and then by ox-team to Cedar Grove, near Brookville, in Franklin County, Indiana. Anthony Halberstadt was buried on his farm in 1831.
            </p>
          </div>
        </div>
      </section>

      {/* Our Founder — Jim Halberstadt */}
      <section className="py-20 bg-navy text-parchment">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Our Founder: Jim Halberstadt" light />
          <div className="grid md:grid-cols-[45%_1fr] gap-8 items-start">
            <div>
              <img
                src="/images/Jim_Halberstadt_2.png"
                alt="James Franklin Halberstadt, Chapter Founder"
                className="w-full h-auto rounded-lg sepia brightness-90"
              />
              <p className="text-parchment/50 text-sm italic mt-3 text-center">James Franklin Halberstadt, Chapter Founder. 1912 to 1983</p>
            </div>
          <div className="space-y-4 text-parchment/80 text-lg leading-relaxed">
            <p>
              James Franklin Halberstadt was born in 1912 in Pleasant Mills, Indiana, and passed in 1983. He was the 3rd great-grandson of Anthony Halberstadt.
            </p>
            <p>
              Jim was a man of remarkable character. He played baseball as a catcher in high school and later competed in horseshoe pitching at the county and state level, earning runner-up at the Indiana State competition in 1952. He worked at Harvester in Fort Wayne, served three years in the Army in the Pacific Theatre of Operations, and later moved to Decatur in 1952. Throughout his life he fought polio, a fractured skull, hepatitis, bladder cancer, and a muscle disease that attacked the use of his legs. He did not stop.
            </p>
            <p>
              On July 19, 1969, Jim Halberstadt founded the Anthony Halberstadt Chapter. He called the first meeting to order with a gavel made from oak from the home of William Henry Harrison in Vincennes. The chapter was formally chartered at a banquet held at the American Legion Hall in Decatur, Indiana.
            </p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Jim Halberstadt", role: "President" },
              { name: "Don Melching", role: "Vice President" },
              { name: "Dick Heller Jr.", role: "Secretary" },
              { name: "Douglas Halberstadt", role: "Treasurer" },
            ].map((officer) => (
              <div key={officer.role} className="bg-parchment/10 border border-parchment/20 rounded-lg p-4 text-center">
                <p className="font-serif text-lg text-parchment font-semibold">{officer.name}</p>
                <p className="text-gold text-sm mt-1">{officer.role}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-parchment/50 text-sm">
            Other founding members: James F. Halberstadt Sr., James Jerome Yager, Alonzo F. Halberstadt, L. Luther Yager, Melvin Werling, and Lester Halberstadt.
          </p>
          </div>
        </div>
      </section>

      {/* Chapter Milestones */}
      <section className="py-20 bg-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Chapter Milestones" />
          <div className="relative ml-4 sm:ml-8">
            {/* Timeline line */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gold/30" />
            <div className="space-y-8">
              {[
                { date: "July 19, 1969", text: "Anthony Halberstadt Chapter formally chartered in Decatur, Indiana" },
                { date: "October 25, 1969", text: "Jim Halberstadt founds the local Children of the American Revolution (CAR)" },
                { date: "March 2, 1970", text: "Dick Heller elected Treasurer of the Indiana Society SAR" },
                { date: "June 14, 1970", text: "Chapter Constitution and Bylaws adopted unanimously at Flag Day meeting" },
                { date: "July 13, 1970", text: "Jim Halberstadt awarded the Indiana State Society Good Citizenship Medal" },
                { date: "October 7, 1974", text: "Anthony Halberstadt Chapter hosts the Indiana State Society meeting; chapter grows to become the fourth largest in the state with 43 members" },
                { date: "1974 & 1975", text: "Mayor of Decatur signs Constitution Week proclamation in recognition of the chapter\u2019s civic work" },
              ].map((item) => (
                <div key={item.date} className="relative pl-10">
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-gold border-4 border-parchment" />
                  <p className="text-gold font-semibold text-sm tracking-wide">{item.date}</p>
                  <p className="text-navy/80 text-lg mt-1">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Jim's Legacy */}
      <section className="py-20 bg-navy text-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Jim&apos;s Legacy" light />
          <div className="space-y-4 text-parchment/80 text-lg leading-relaxed">
            <p>
              Beyond the chapter, Jim Halberstadt organized the Morgan Raid Camp Chapter of the Sons of Union Veterans, served as commander for the Disabled American Veterans, and held membership in the Descendants of Colonial Clergy and the Society of Colonial Wars, among others. He was awarded the Indiana Society&apos;s Good Citizenship Medal in 1970 in recognition of his unfailing faith in America and dedication to his forebears.
            </p>
            <p>
              The gavel he used to call that first meeting to order, carved from the oak of William Henry Harrison&apos;s home in Vincennes, remains a symbol of the chapter&apos;s connection to the deep roots of American history.
            </p>
          </div>
        </div>
      </section>

      {/* Officers & Committees Links */}
      <section className="py-20 bg-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Leadership & Organization" subtitle="2025-2026" />
          <div className="grid sm:grid-cols-2 gap-6">
            <Link href="/about/officers" className="group bg-navy rounded-lg border-t-2 border-gold p-6 flex items-start justify-between gap-4 hover:bg-navy/90 transition-colors">
              <div>
                <h3 className="font-serif text-xl text-parchment font-bold mb-2">Chapter Officers</h3>
                <p className="text-parchment/60 text-sm">Meet the 2025-2026 executive committee leading our chapter.</p>
              </div>
              <span className="text-gold text-xl mt-1 group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
            <Link href="/about/committees" className="group bg-navy rounded-lg border-t-2 border-gold p-6 flex items-start justify-between gap-4 hover:bg-navy/90 transition-colors">
              <div>
                <h3 className="font-serif text-xl text-parchment font-bold mb-2">Chapter Committees</h3>
                <p className="text-parchment/60 text-sm">See the full list of chapter committees and their leads.</p>
              </div>
              <span className="text-gold text-xl mt-1 group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
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

      {/* CTA */}
      <section className="py-20 bg-navy text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gold mb-4">Carry the Legacy Forward</h2>
          <p className="text-parchment/70 text-lg mb-10">
            The Anthony Halberstadt Chapter has stood for patriotism, service, and brotherhood since 1969. If you are a male descendant of a Revolutionary War patriot, your place is with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/join" className="bg-colonial hover:bg-colonial/90 text-parchment px-8 py-3 font-semibold rounded transition-colors text-lg">
              Become a Member
            </a>
            <a href="/contact" className="bg-gold hover:bg-gold/90 text-navy px-8 py-3 font-semibold rounded transition-colors text-lg">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
