import { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the Anthony Halberstadt Chapter of the Sons of the American Revolution in Fort Wayne, Indiana.",
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-navy text-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-parchment/70 text-lg">Reach out to the Anthony Halberstadt Chapter</p>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-gold" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-parchment">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <SectionHeading title="Get in Touch" />
              <div className="space-y-6 text-navy/80">
                <div>
                  <h3 className="font-serif text-xl text-navy font-bold mb-2">Location</h3>
                  <p>Fort Wayne, Indiana</p>
                  <p className="text-sm text-navy/60 mt-1">Meeting location details provided upon inquiry</p>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-navy font-bold mb-2">Connect With Us</h3>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-colonial hover:text-colonial/80 font-semibold transition-colors"
                  >
                    Follow us on Facebook &rarr;
                  </a>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-navy font-bold mb-2">National SAR</h3>
                  <a
                    href="https://www.sar.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-colonial hover:text-colonial/80 font-semibold transition-colors"
                  >
                    Visit SAR.org &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-navy p-8 rounded-lg">
              <h3 className="font-serif text-2xl text-parchment font-bold mb-6 text-center">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
