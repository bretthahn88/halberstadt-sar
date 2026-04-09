import { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "History",
  description: "American Revolution history with a focus on Fort Wayne, Indiana, and the Northwest Territory frontier. Patriot biographies, patriot graves, and educational resources.",
};

export default function HistoryPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-navy text-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">History</h1>
          <p className="text-parchment/70 text-lg">The American Revolution and Fort Wayne&apos;s frontier role</p>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-gold" />
        </div>
      </section>

      {/* Revolution Overview */}
      <section className="py-20 bg-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeading title="The American Revolution" subtitle="1775 - 1783" />
          <div className="space-y-4 text-navy/80 text-lg leading-relaxed">
            <p>
              The American Revolution was more than a war. It was a radical experiment in self-governance, born from the conviction that the rights of free people cannot be surrendered to distant authority. From the first shots at Lexington and Concord in April 1775 to the Treaty of Paris in 1783, the conflict tested everything the colonists believed about liberty, sacrifice, and the purpose of government.
            </p>
            <p>
              The war was fought on battlefields from Massachusetts to Georgia, on the high seas, and deep into the frontier wilderness. Over 200,000 men served in the Continental Army and colonial militias. Tens of thousands more supported the cause as civil servants, suppliers, and signers of oaths of allegiance to the new states.
            </p>
            <p>
              The outcome was never certain. Washington&apos;s Continental Army endured devastating losses, bitter winters, and chronic supply shortages. But the cause endured, sustained by the determination of ordinary people who believed in something larger than themselves.
            </p>
          </div>
        </div>
      </section>

      {/* Indiana Frontier */}
      <section className="py-20 bg-navy text-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeading title="The Indiana Frontier" light />
          <div className="space-y-4 text-parchment/80 text-lg leading-relaxed">
            <p>
              The Northwest Territory was the critical western front of the Revolution. The British held a network of forts stretching from Detroit to the Illinois Country, and they actively supported Native alliances against American settlements along the frontier.
            </p>
            <p>
              Colonel George Rogers Clark&apos;s 1778-1779 campaign through the Illinois Country was one of the most audacious operations of the entire war. With a force of fewer than 200 men, Clark captured Kaskaskia and Cahokia, then made a legendary 18-day winter march through flooded terrain to surprise the British garrison at Fort Vincennes in February 1779.
            </p>
            <p>
              The Three Rivers region, the confluence of the St. Marys, St. Joseph, and Maumee rivers where Fort Wayne stands today, was the capital of the Miami Confederacy and a vital strategic position. The Miami, led by leaders like Pacanne and Little Turtle, navigated a complex web of alliances with French, British, and American interests throughout the war.
            </p>
            <p>
              Clark&apos;s conquests helped secure American claims to the Northwest Territory in the 1783 Treaty of Paris, directly leading to the creation of Indiana and the other states carved from this vast region.
            </p>
          </div>
        </div>
      </section>

      {/* Patriot Biographies */}
      <section className="py-20 bg-parchment">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Patriot Biographies" subtitle="Honoring those who served" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Patriot 1", "Patriot 2", "Patriot 3", "Patriot 4", "Patriot 5", "Patriot 6"].map((p) => (
              <div key={p} className="bg-white p-6 rounded-lg border border-navy/5 shadow-sm">
                <div className="w-full h-40 bg-navy/5 rounded mb-4 flex items-center justify-center">
                  <span className="text-navy/20 font-serif text-lg">Portrait</span>
                </div>
                <h3 className="font-serif text-xl text-navy font-bold">{p}</h3>
                <p className="text-navy/60 text-sm mt-2">Biography coming soon.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patriot Graves */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Patriot Graves" subtitle="Revolutionary War veterans buried in northeast Indiana" />
          <div className="bg-parchment p-8 rounded-lg border border-navy/5 text-center">
            <p className="text-navy/60 italic text-lg">
              Patriot grave records and locations are being compiled. Check back soon for a searchable directory of Revolutionary War veterans buried in our region.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="py-20 bg-parchment">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading title="A Bit of History" subtitle="Articles and stories from the Revolution" />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "The Battle of Trenton: Turning Point",
              "George Rogers Clark and the Illinois Campaign",
              "The Miami Confederacy During the Revolution",
              "Women of the Revolution: Unsung Patriots",
            ].map((title) => (
              <div key={title} className="bg-white p-6 rounded-lg border border-navy/5 shadow-sm">
                <p className="text-sm text-gold font-semibold mb-2">Coming Soon</p>
                <h3 className="font-serif text-xl text-navy font-bold">{title}</h3>
                <p className="text-navy/60 mt-2 text-sm">Article in progress.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
