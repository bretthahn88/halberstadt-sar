"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    await fetch(form.action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <p className="text-gold font-serif text-2xl mb-2">Thank you!</p>
        <p className="text-parchment/70">We&apos;ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form
      action="https://formspree.io/f/PLACEHOLDER"
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-parchment/70 mb-1">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2.5 rounded bg-parchment/10 border border-parchment/20 text-parchment placeholder-parchment/30 focus:outline-none focus:border-gold"
          placeholder="Your full name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-parchment/70 mb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2.5 rounded bg-parchment/10 border border-parchment/20 text-parchment placeholder-parchment/30 focus:outline-none focus:border-gold"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-parchment/70 mb-1">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-4 py-2.5 rounded bg-parchment/10 border border-parchment/20 text-parchment placeholder-parchment/30 focus:outline-none focus:border-gold resize-none"
          placeholder="Tell us about your interest in the SAR..."
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gold text-navy py-3 rounded font-semibold hover:bg-gold/90 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
