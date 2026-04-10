import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/SAR_homepage_hero_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-navy/50" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-parchment mb-4">
            Anthony Halberstadt Chapter
          </h1>
          <p className="text-lg sm:text-xl text-parchment/80 mb-8 font-light">
            Sons of the American Revolution. Fort Wayne, Indiana
          </p>
          <Link
            href="/join"
            className="inline-block bg-colonial hover:bg-colonial/90 text-parchment px-8 py-3 text-lg font-semibold rounded transition-colors"
          >
            Become a Member
          </Link>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Who We Are" subtitle="Libertas et Patria" />
          <div className="space-y-4 text-navy/80 text-lg leading-relaxed">
            <p>
              The Anthony Halberstadt Chapter is a Fort Wayne, Indiana chapter of the National Society of the Sons of the American Revolution. We are a lineage-based organization dedicated to preserving the history, principles, and legacy of the American Revolution.
            </p>
            <p>
              Our members are proven descendants of the patriots who fought for, and won, American independence. We honor their sacrifice through education, patriotic service, and historical preservation in the Fort Wayne community.
            </p>
          </div>
        </div>
      </section>

      {/* Halberstadt Story */}
      <section className="py-20 bg-navy text-parchment">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Our Namesake" light />
          <div className="grid md:grid-cols-[45%_1fr] gap-8 items-start">
            <div>
              <img
                src="/images/Jim_Halberstadt_1.png"
                alt="Jim Halberstadt receives the chapter gavel, July 19, 1969"
                className="w-full h-auto rounded-lg sepia brightness-90"
              />
              <p className="text-parchment/50 text-sm italic mt-3 text-center">Jim Halberstadt receives the chapter gavel. July 19, 1969</p>
            </div>
            <div className="space-y-4 text-parchment/80 text-lg leading-relaxed">
              <p>
                Anthony Halberstadt was a Hessian soldier, one of the German mercenaries hired by the British Crown to fight the American colonists. In the early morning hours of December 26, 1776, General George Washington led his troops across the icy Delaware River and surprised the Hessian garrison at the Battle of Trenton.
              </p>
              <p>
                Halberstadt was among those captured. But rather than await prisoner exchange, he made a fateful choice: he turned his back on the Crown and joined the American cause. He served as a teamster for a Continental Army officer, hauling supplies and equipment through the campaigns that would win a nation its freedom.
              </p>
              <p>
                After the war, Halberstadt settled in the new republic he had helped create. His descendant, Jim Halberstadt, would go on to found the Fort Wayne chapter of the Sons of the American Revolution, naming it in honor of the Hessian soldier who chose liberty.
              </p>
              <a
                href="/about"
                className="inline-block mt-4 bg-gold text-navy px-8 py-3 font-semibold rounded hover:bg-gold/90 transition-colors"
              >
                Discover Our Full History
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Washington Crossing the Delaware */}
      <section className="relative h-[500px] overflow-hidden">
        <img
          src="/images/Washington_Crossing_the_Delaware.jpg"
          alt="Washington Crossing the Delaware by Emanuel Leutze, 1851"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
          <p className="text-gold text-sm italic">Washington Crossing the Delaware. Emanuel Leutze, 1851</p>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 bg-parchment">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Why Join" subtitle="What membership means" />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Heritage",
                desc: "Connect with your patriot ancestors. Prove your lineage back to the founding of this nation and take your place in an unbroken chain of American history.",
                icon: "\u{1F3DB}",
              },
              {
                title: "Brotherhood",
                desc: "Join a community of men who share your respect for American history and its founding principles. Build lasting friendships rooted in purpose.",
                icon: "\u{1F91D}",
              },
              {
                title: "Service",
                desc: "Honor the patriots through action. Participate in community service, educational programs, veterans' support, and patriotic observances.",
                icon: "\u{2B50}",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-lg shadow-sm border border-navy/5 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-2xl text-navy font-bold mb-3">{item.title}</h3>
                <p className="text-navy/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* America 250 */}
      <section className="py-16 bg-colonial text-parchment">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-[40%_1fr] gap-8 items-center">
            <img
              src="/images/America250_logo.png"
              alt="America 250 logo"
              className="w-full max-w-xs mx-auto md:max-w-none h-auto"
            />
            <div className="text-center md:text-left">
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">July 4, 2026</p>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold mb-4">America 250</h2>
              <p className="text-parchment/80 text-lg">
                The 250th anniversary of American independence is approaching. Join us as we commemorate a quarter millennium of the republic our patriot ancestors fought to create.
              </p>
              <Link
                href="/join"
                className="inline-block mt-8 bg-gold text-navy px-8 py-3 font-semibold rounded hover:bg-gold/90 transition-colors"
              >
                Join Before the 250th
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-parchment">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Upcoming Events" subtitle="Mark your calendar" />
          <div className="grid md:grid-cols-3 gap-6">
            {["Chapter Meeting", "Flag Retirement Ceremony", "America 250 Celebration"].map((event) => (
              <div key={event} className="bg-white p-6 rounded-lg border border-navy/5 shadow-sm">
                <p className="text-sm text-gold font-semibold mb-1">Date TBD</p>
                <h3 className="font-serif text-xl text-navy font-bold">{event}</h3>
                <p className="text-navy/60 mt-2 text-sm">Details coming soon.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="py-16 bg-navy text-parchment text-center">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading title="Support Our Mission" light />
          <p className="text-parchment/70 text-lg mb-8">
            Your contributions support educational programs, patriotic ceremonies, veterans&apos; recognition, and the preservation of American Revolution history in our community.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold text-navy px-8 py-3 font-semibold rounded hover:bg-gold/90 transition-colors"
          >
            Get in Touch to Donate
          </Link>
        </div>
      </section>
    </>
  );
}
